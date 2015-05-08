# Daniel da Silva
> Version 1.1.0

My personal website. Live at http://danielfdsilva.com



## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)
- Gulp ( $ npm install -g gulp )

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
```
This will also run `bundle install`

### Getting started

```
$ gulp
```
Compiles the compass files, javascripts and generates the website which is available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

The website is built from the source files in `app/` and copied to `dist/`.

### Other commands
Clean the compiled sass, javascript...
```
$ gulp clean
```

Compile the compass files and javascripts. Use this instead of ```grunt``` if you just want to render it once:
```
$ gulp build
```

Compile the compass files and javascripts prepared for production (minified, uglyfied). Every time changes will be pushed to production, this command needs to be run:
```
$ gulp prod
```

##License
My website is licensed under **The MIT License (MIT)**, see the LICENSE file for more details.