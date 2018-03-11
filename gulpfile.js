'use strict'

const gulp = require('gulp')
    , sass = require('gulp-sass')
    , rename = require('gulp-rename')
    , autoprefixer = require('gulp-autoprefixer')
    , batch = require('gulp-batch')
    , watch = require('gulp-watch')
    , header = require('gulp-header')
    , concat = require('gulp-concat')
    , imagemin = require('gulp-imagemin')
    , imageresize = require('gulp-image-resize')
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
    css: [
      './src/libs/highlight.js/styles/**/*.css'
    ],
    js: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      './src/libs/highlight.js/highlight.pack.js'
    ],
    font: [
      './node_modules/font-awesome/fonts/**/*',
      './src/libs/devicon/**/*'
    ]
  },
  autoprefixer: {
    browsers: [
      "Last 4 versions"
    ]
  },
  imagemin: [
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ],
  imageresize: {
    width: 1366,
    percentage: 80
  }
}

gulp.task('sass', (cb) => {
  pump([
    gulp.src('./src/stylesheets/unquez-site.scss'),
    sass({ outputStyle: 'compressed' }),
    autoprefixer(config.autoprefixer),
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

gulp.task('image', (cb) => {
  pump([
    gulp.src('./src/img/**/*'),
    imageresize(config.imageresize),
    imagemin(config.imagemin),
    gulp.dest('./img')
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
    concat('vendor.css'),
    gulp.dest('./css')
  ], cb)
})

gulp.task('vendor:font', (cb) => {
  pump([
    gulp.src(config.vendor.font),
    gulp.dest('./fonts')
  ], cb)
})

gulp.task('vendor', ['vendor:css', 'vendor:script', 'vendor:font'])
gulp.task('default', ['vendor', 'sass', 'script', 'image'])

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

gulp.task('dev', ['default'], () => {
  gulp.start('watch')
})
