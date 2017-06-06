const gulp = require('gulp');
const gutil = require('gulp-util');
const fs = require('fs');
const os = require('os');
const path = require('path');
const configFile = path.join(os.homedir(), ".pianotriennale-ict_site.json");

var config = {};
if (fs.existsSync(configFile)) {
  gutil.log("Reading local config from [" + configFile + "]");
  config = require(configFile);
} else {
  gutil.log("No local config found at [" + configFile + "]");
}

const runSequence = require('run-sequence');
const clean = require('gulp-clean');
const shell = require('gulp-shell');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const jpegtran = require('imagemin-jpegtran');
const gifsicle = require('imagemin-gifsicle');
const minifyHTML = require('gulp-minify-html');
const autoprefixer = require('gulp-autoprefixer');
const uncss = require('gulp-uncss');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const rsync = require('gulp-rsync');

gulp.task('jekyll', function() {
  return gulp.src('_pages/it/index.md', {
      read: false
    })
    .pipe(shell([
      'jekyll build'
    ]));
});

gulp.task('optimize-images', function() {
  return gulp.src(['_site/**/*.jpg', '_site/**/*.jpeg', '_site/**/*.gif',
      '_site/**/*.png'
    ])
    .pipe(imagemin({
      progressive: false,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant(), jpegtran(), gifsicle()]
    }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('optimize-html', function() {
  return gulp.src('_site/**/*.html')
    .pipe(minifyHTML({
      quotes: true
    }))
    .pipe(gulp.dest('_site/'));
});

// gulp.task('optimize-css', function() {
//   return gulp.src('styles/*.css')
//     // .pipe(autoprefixer())
//     // .pipe(uncss({
//     //   html: ['_site/**/*.html'],
//     //   ignore: []
//     // }))
//     .pipe(cleanCss({
//       keepBreaks: false
//     }))
//     .pipe(gulp.dest('_site/styles'));
// });

// gulp.task('optimize-js', function() {
//   return gulp.src("js/*.js")
//     .pipe(concat('scripts.js'))
//     // .pipe(gulp.dest("_site/js"))
//     .pipe(rename('scripts.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest("_site/js"));
// });

gulp.task('clean', function() {
  return gulp.src('_site', {
      read: false
    })
    .pipe(clean());
});

gulp.task('build', function(cb) {
  runSequence(
    'clean',
    'jekyll', [
//      'optimize-js',
//      'optimize-css',
      'optimize-html',
      'optimize-images'
    ], cb);
});

if (config.production) {
  gulp.task('publish-production', function() {
    return gulp.src('_site/**')
      .pipe(rsync({
        root: '_site',
        hostname: config.production.server,
        destination: config.production.path,
        port: config.production.port,
        recursive: true,
        compress: true
      }));
  });
} else {
  gutil.log("No config for production publish, task will be disabled");
}
