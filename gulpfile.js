var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var uglify = require('gulp-uglifyjs');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var SassString = require('node-sass').types.String;
var notifier = require('node-notifier');
var sourcemaps = require('gulp-sourcemaps');

// Script handling.
gulp.task('scripts:build', function(done) {
  // main.min.js
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(plumber())
    .pipe(uglify('main.min.js', {
      outSourceMap: production ? false : true,
    }))
    .pipe(gulp.dest('dist/assets/scripts'));
});

gulp.task('scripts:lint', function() {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function(done) {
  runSequence('scripts:lint', 'scripts:build', done);
});


// Style handling
gulp.task('compass', function() {
  var task = gulp.src('app/assets/styles/main.scss')
    .pipe(plumber(function (e) {
      notifier.notify({
        title: 'Oops! Sass errored:',
        message: e.message
      });
      console.log('Sass error:', e.toString());
      if (production) {
        process.exit(1);
      }
      // Allows the watch to continue.
      this.emit('end');
    }))

    if (!production) {
      task = task.pipe(sourcemaps.init())
    }
    
    task = task.pipe(sass({
      outputStyle: production ? 'compressed' : 'expanded',
      precision: 10,
      functions: {
        'urlencode($url)': function (url) {
          var v = new SassString();
          v.setValue(encodeURIComponent(url.getValue()));
          return v;
        }
      },
      includePaths: require('node-bourbon').with('node_modules/jeet')
    }));

    if (!production) {
      task = task.pipe(sourcemaps.write())
    }

    return task.pipe(gulp.dest('dist/assets/styles'));
});


// Setup browserSync.
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('copy:app', function(done) {
  return gulp.src(['app/**', '!./app/assets/scripts/**/*', '!./app/assets/styles/**/*'])
    .pipe(gulp.dest('dist'));
});

// Main build task
gulp.task('build', function(done) {
  runSequence(['copy:app', 'scripts', 'compass'], done);
});

// Build task prod version.
var production = false;
gulp.task('prod', function(done) {
  production = true;
  runSequence('clean', ['copy:app', 'scripts', 'compass'], done);
});

gulp.task('watch', function() {
  gulp.watch('app/assets/styles/**/*.scss', function() {
    runSequence('compass', browserReload);
  });

  gulp.watch('app/assets/scripts/**/*.js', function() {
    runSequence('scripts', browserReload);
  });

  gulp.watch(['app/**/*', '!./app/**/*.scss', '!./app/**/*.js'], function() {
    runSequence('copy:app', browserReload);
  });
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

// Default task.
// Builds the website, watches for changes and starts browserSync.
gulp.task('default', function(done) {
  runSequence('build', 'watch', 'browser-sync', done);
});

var shouldReload = true;
gulp.task('no-reload', function(done) {
  shouldReload = false;
  runSequence('build', 'watch', 'browser-sync', done);
});

////////////////////////////////////////////////////////////////////////////////
//------------------------- Helper functions ---------------------------------//
//----------------------------------------------------------------------------//

function browserReload() {
  if (shouldReload) {
    browserSync.reload();
  }
}
