# Daniel da Silva [![Build Status](https://travis-ci.org/danielfdsilva/personal-website.svg?branch=master)](https://travis-ci.org/danielfdsilva/personal-website)
> Version 1.1.1

My personal website. Live at http://danielfdsilva.com



## Development environment
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v6 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/) Package manager

After these basic requirements are met, run the following commands in the website's folder:
```
$ yarn install
```

### Getting started

```
$ yarn serve
```
Compiles the compass files, javascripts and generates the website which is available at `http://localhost:3000/`
The system will watch files and execute tasks whenever one of them changes.
The site will automatically refresh since it is bundled with livereload.

The website is built from the source files in `app/` and copied to `dist/`.

### Other commands
Compile the compass files and javascripts prepared for production (minified, uglyfied). Every time changes will be pushed to production, this command needs to be run:
```
$ yarn build
```

## License
My website is licensed under **The MIT License (MIT)**, see the LICENSE file for more details.
