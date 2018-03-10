'use strict'

const gulp = require('gulp')
    , sass = require('gulp-sass')
    , sourcemaps = require('gulp-sourcemaps')
    , rename = require('gulp-rename')
    , autoprefixer = require('gulp-autoprefixer')
    , batch = require('gulp-batch')
    , watch = require('gulp-watch')
    , header = require('gulp-header')
    , concat = require('gulp-concat')
    , pump = require('pump')
    , pkg = require('./package.json')

let config = {
  banner: ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n'),
  vendor: {
    css: [],
    js: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    ],
    font: [
      './node_modules/font-awesome/fonts/**/*'
    ]
  }
}

gulp.task('sass', (cb) => {
  pump([
    gulp.src('./src/stylesheets/unquez-site.scss'),
    sass({ outputStyle: 'compressed' }),
    header(config.banner, { pkg : pkg }),
    gulp.dest('./css')
  ], cb)
})

gulp.task('script', (cb) => {
  pump([
    gulp.src('./src/scripts/**/*.js'),
    concat('unquez-site.js'),
    header(config.banner, { pkg : pkg }),
    gulp.dest('./js')
  ], cb)
})

gulp.task('vendor:script', (cb) => {
  pump([
    gulp.src(config.vendor.js),
    concat('vendor.js'),
    gulp.dest('./js')
  ], cb)
})

gulp.task('vendor:css', (cb) => {
  pump([
    gulp.src(config.vendor.css),
    concat('vendor.js'),
    gulp.dest('./js')
  ], cb)
})

gulp.task('vendor:font', (cb) => {
  pump([
    gulp.src(config.vendor.font),
    gulp.dest('./fonts')
  ], cb)
})

gulp.task('vendor', ['vendor:css', 'vendor:script', 'vendor:font'])
gulp.task('default', ['vendor', 'sass', 'script'])

gulp.task('watch:sass', () => {
  watch('./src/stylesheets/**/*.scss', batch((evt, done) => {
    gulp.start('sass', done)
  }))
})

gulp.task('watch:script', () => {
  watch('./src/scripts/**/*.js', batch((evt, done) => {
    gulp.start('script', done)
  }))
})

gulp.task('watch', ['watch:script', 'watch:sass'])
