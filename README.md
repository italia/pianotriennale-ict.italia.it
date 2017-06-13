# PIANO TRIENNALE PER L’INFORMATICA NELLA PUBBLICA AMMINISTRAZIONE 2017 - 2019

[![CircleCI](https://circleci.com/gh/italia/pianotriennale-ict.italia.it.svg?style=svg)](https://circleci.com/gh/italia/pianotriennale-ict.italia.it)

Questo repository contiene il codice sorgente del sito tematico relativo al *Piano Triennale per l'informatica nella pubblica amministrazione*.
Il sito è sviluppato con Jekyll.

Se vuoi contribuire allo sviluppo del sito, è sufficiente aprire una pull-request.

## Sito tematico di presentazione del Piano Triennale
[https://pianotriennale-ict.italia.it/](https://pianotriennale-ict.italia.it/)

## Forum di discussione sui temi del Piano Triennale
[https://forum.italia.it/c/piano-triennale/](https://forum.italia.it/c/piano-triennale)

## Testo integrale del Piano Triennale
[https://pianotriennale-ict.readthedocs.io/](https://pianotriennale-ict.readthedocs.io/)

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
