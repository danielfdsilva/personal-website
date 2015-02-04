# Daniel da Silva 
My personal website.

> Not live yet.

## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node and npm](http://nodejs.org/)
- Ruby and [Bundler](http://bundler.io/), preferably through something like [rvm](https://rvm.io/)
- Grunt ( $ npm install -g grunt-cli )

After these basic requirements are met, run the following commands in the website's folder:
```
$ npm install
$ bundle install
```

### Getting started

```
$ grunt
```
Compiles the compass files, javascripts and generates the website which is available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

### Other commands
Clean the compiled sass, javascript...
```
$ grunt clean
```

Compile the compass files and javascripts. Use this instead of ```grunt``` if you just want to render it once:
```
$ grunt build
```

Compile the compass files and javascripts prepared for production (minified, uglyfied). Every time changes will be pushed to production, this command needs to be run:
```
$ grunt prod
```

Spins up a webserver to serve the website.
```
$ grunt serve
```

##License
My website is licensed under **The MIT License (MIT)**, see the LICENSE file for more details.