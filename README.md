# PIANO TRIENNALE PER L'INFORMATICA NELLA PUBBLICA AMMINISTRAZIONE 2024 - 2026

[![CircleCI](https://circleci.com/gh/italia/pianotriennale-ict.italia.it.svg?style=svg)](https://circleci.com/gh/italia/pianotriennale-ict.italia.it)

Questo repository contiene il codice sorgente del sito tematico relativo al *Piano Triennale per l'informatica nella pubblica amministrazione*.
Il sito è sviluppato con Jekyll.

Se vuoi contribuire allo sviluppo del sito, è sufficiente aprire una pull-request.

## Sito tematico di presentazione del Piano Triennale
[https://pianotriennale-ict.italia.it/](https://pianotriennale-ict.italia.it/)

## Forum di discussione sui temi del Piano Triennale
[https://forum.italia.it/c/piano-triennale/](https://forum.italia.it/c/piano-triennale)

## Testo integrale del Piano Triennale
[https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/](https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/)

## Generazione del sito e pubblicazione

### Prerequisiti

È necessario installare `ruby`, `ruby-dev`, `ruby-bundler` e `nodejs`.

#### Linux (Ubuntu)

Per installare Ruby:

    $ apt-get install ruby-bundler
    $ apt-get install ruby-dev

Istruzioni per [installare nodejs](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

#### macOS

Istruzioni per [installare nodejs su macOS](https://nodejs.org/en/download/package-manager/#osx)

### Installazione delle dipendenze

Per configurare un ambiente di sviluppo è sufficiente eseguire i seguenti comandi nella directory principale del progetto:

    $ bundle install
    $ npm install

### Come generare automaticamente il sito mentre si lavora sui contenuti o la struttura

Jekyll prevede la possibilità di generare automaticamente il sito ogni volta che viene fatta una modifica.

Questo può essere fatto tramite il [comando serve](https://jekyllrb.com/docs/usage/):

```
$ bundle exec jekyll serve
```

Oltre a generare il sito, questo comando pubblica il sito in locale all'indirizzo web [http://localhost:4000](http://localhost:4000).

### Come generare il sito per la pubblicazione

La generazione del sito per la pubblicazione richiede un po' più di tempo poiché comprende una serie di ottimizzazioni che rendono il sito più leggero ed efficiente.

In questo caso la generazione viene fatta tramite `gulp`:

```
$ gulp build
```

Il risultato della generazione di troverà nella directory `_site`.

### Pubblicare il sito

Per pubblicare il sito è necessario creare un file `.pianotriennale-ict_site.json` nella propria home directory con questo formato:

```
{
  "production": {
    "server": "...",
    "path": "...",
    "port": ...
  },
}
```

Dove `server` è nel formato `user@host`, `path` è il percorso completo alla directory di pubblicazione e `port` è la porta SSH per accedere al server (la pubblicazione avviene tramite _rsync_ via SSH).

***

# THREE-YEAR PLAN FOR ICT IN PUBLIC ADMINISTRATION  2024 - 2026

This repository contains the source code for the descriptive website about the *Three-Year Plan for ICT in Public Administration*.
This website is based on Jekyll.

If you want to contribute to the development, just go on and open a pull-request.

## Descriptive website about the Three-Year Plan
[https://pianotriennale-ict.italia.it/](https://pianotriennale-ict.italia.it/)

## Discussion forum
[https://forum.italia.it/c/piano-triennale/](https://forum.italia.it/c/piano-triennale)

## Full text of the Three-Year Plan
[https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/](https://docs.italia.it/italia/piano-triennale-ict/pianotriennale-ict-doc/)

## Build and deployment

### Prerequisites

Install `ruby`, `ruby-dev`, `ruby-bundler` and `nodejs`.

#### Linux (Ubuntu)

Install Ruby:

    $ apt-get install ruby-bundler
    $ apt-get install ruby-dev

Instructions about [installation of nodejs](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

#### macOS

Instructions about [installing nodejs on macOS](https://nodejs.org/en/download/package-manager/#osx)

### Dependencies

In order to set-up a development environment just run the following commands within the project root directory:

    $ bundle install
    $ npm install

### Automatic rebuild

Jekyll allows to rebuild automatically while editing files.
See documentation for the [serve](https://jekyllrb.com/docs/usage/) command:

```
$ bundle exec jekyll serve
```

In addition, `serve` will run a local webserver at [http://localhost:4000](http://localhost:4000).

### Build for publishing

In order to build website for deployment a few additional optimizations are run for lightness and efficiency.
For such purpose, use `gulp`:

```
$ gulp build
```

Results will be placed in the `_site/` directory.

### Deployment

In order to publish the website just create a file named `.pianotriennale-ict_site.json` under your home directory with the following format:

```
{
  "production": {
    "server": "...",
    "path": "...",
    "port": ...
  },
}
```

Where `server` has the format `user@host`, `path` is the full path to the deplyment directory and `port` is the SSH port to access the server (_rsync_ over SSH will be used).
