var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var del = require('del');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var merge = require('merge-stream');
var babel = require('gulp-babel');
var npmlodash = require('lodash');
var smushit = require('gulp-smushit');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var browsersync = require('browser-sync');
var htmlmin = require('gulp-htmlmin');
const { parallel } = require('gulp');
var postcss = require('gulp-postcss');
tailwindcss = require('tailwindcss');

// =======================================================
// ----------- START: Datta Able Theme Configuration -----------
// =======================================================

const caption_show = 'true'; // [ false , true ]
const preset_theme = 'preset-1'; // [ preset-1 to preset-10 ]
const theme_layout = 'vertical'; // [ vertical, horizontal, color-header, compact, tab ]
const dark_layout = 'false'; // [ false , true , default ]
const rtl_layout = 'false'; // [ false , true ]
const box_container = 'false'; // [ false , true ]
const sidebar_theme = 'dark'; // [ dark , light ]
const header_theme = ''; // [ '',preset-1 to preset-10 ]
const navbar_bg_theme = ''; // [ '',preset-1 to preset-10 ]
const logo_theme = ''; // [ '',preset-1 to preset-10 ]
const navbar_caption_theme = ''; // [ '',preset-1 to preset-10 ]
const navbar_image_theme = ''; // [ '',preset-1 to preset-6 ]
const nav_dropdown_icon_theme = ''; // [ '',preset-1 to preset-5 ]
const nav_dropdown_link_icon_theme = ''; // [ '',preset-1 to preset-6 ]
const version = 'v1.0';
if (rtl_layout == "true") {
  var rtltemp = "rtl"
} else {
  var rtltemp = 'ltr';
}

if (dark_layout == 'true') {
  var darklayouttemp = 'dark';
} else {
  var darklayouttemp = 'light';
}

const layout = {
  pc_caption_show: caption_show,
  pc_preset_theme: preset_theme,
  pc_theme_layout: theme_layout,
  pc_dark_layout: dark_layout,
  pc_rtl_layout: rtl_layout,
  pc_box_container: box_container,
  pc_sidebar_theme: sidebar_theme,
  pc_header_theme : header_theme,
  pc_navbar_bg_theme : navbar_bg_theme,
  pc_logo_theme : logo_theme,
  pc_navbar_caption_theme : navbar_caption_theme,
  pc_navbar_image_theme : navbar_image_theme,
  pc_nav_dropdown_icon_theme : nav_dropdown_icon_theme,
  pc_nav_dropdown_link_icon_theme : nav_dropdown_link_icon_theme,
  pc_theme_version: version,
  bodySetup: 'data-pc-preset="' + preset_theme + '" data-pc-sidebar-caption="' + caption_show + '" data-pc-direction="' + rtltemp + '" dir="' + rtltemp + '" data-pc-theme="' + darklayouttemp + '"',
};

// =======================================================
// ----------- END: Datta Able Theme Configuration -----------
// =======================================================

// all paths setup
const path = {
  src: {
    html: 'src/html/**/*.html',
    css: 'src/assets/scss/*.scss',
    layoutjs: 'src/assets/js/*.js',
    pagesjs: 'src/assets/js/**/*.js',
    images: 'src/assets/images/**/*.{jpg,png}'
  },  
  destination: {
    html: 'dist',
    css: 'dist/assets/css',
    layoutjs: 'dist/assets/js',
    pagesjs: 'dist/assets/js',
    images: 'dist/assets/images'
  }
};

//  [ common ] task start
//  [ browser reload ] start
gulp.task('browserSync', function () {
  browsersync.init({
    server: 'dist/'
  });
});
//  [ browser reload ] end

gulp.task('cleandist', function (callback) {
  del.sync(['dist/*/']);
  callback();
});
//  [ common ] task end

// =======================================================
// ----------- START: Development tasks -----------
// =======================================================
//  [ scss compiler ] start
gulp.task('tailwind-scss', function () {
  // main style css
  return gulp
    .src(path.src.css)
    .pipe(sass())
    .pipe(postcss(tailwindcss('./tailwind.config.js')))
    .pipe(gulp.dest(path.destination.css));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task('build-node-modules', function () {
  var required_libs = {
    js: [
      'node_modules/@popperjs/core/dist/umd/popper.min.js',
      'node_modules/simplebar/dist/simplebar.min.js',
      'node_modules/feather-icons/dist/feather.min.js',
      'node_modules/clipboard/dist/clipboard.min.js'
    ],
    css: [
      'node_modules/simplebar/dist/simplebar.min.css',
      'node_modules/animate.css/animate.min.css',
    ]
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == 'css') {
      gulp.src(assets).pipe(gulp.dest('dist/assets/css/plugins'));
    } else {
      gulp.src(assets).pipe(gulp.dest('dist/assets/js/plugins'));
    }
  });
  var cpyassets = gulp.src(['src/assets/**/*.*', '!src/assets/scss/**/*.*']).pipe(gulp.dest('dist/assets'));
  return merge(cpyassets);
});
//  [ Copy assets ] end

//  [ build html ] start
gulp.task('build-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});
//  [ build html ] end

//  [ build js ] start
gulp.task('build-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(gulp.dest(path.destination.layoutjs));
  var pagesjs = gulp.src(path.src.pagesjs).pipe(gulp.dest(path.destination.pagesjs));

  return merge(layoutjs, pagesjs);
});
//  [ build js ] end

//  [ watch ] start
gulp.task('watch', function () {
  gulp.watch('tailwind.config.js', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('tailwind_plugins/**/*.js', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('tailwind-scss')).on('change', browsersync.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.series('build-js')).on('change', browsersync.reload);
  gulp.watch('src/html/**/*.html', gulp.series('build-html')).on('change', browsersync.reload);
  gulp.watch('src/html/**/*.html', gulp.series('tailwind-scss')).on('change', browsersync.reload);
});
//  [ watch ] start
const compile = parallel('browserSync', 'watch');
//  [ Default task ] start
gulp.task('default', gulp.series('cleandist', 'build-node-modules', 'tailwind-scss', 'build-js', 'build-html', compile));
//  [ Default task ] end

// =======================================================
// ----------- END: Development tasks -----------
// =======================================================

// =======================================================
// ----------- START: Production mode tasks -----------
// =======================================================

//  [ css minify ] start
gulp.task('tailwind-min-scss', function () {
  // main style css
  return gulp.src(path.src.css)
  .pipe(sass())
  .pipe(postcss(tailwindcss('./tailwind.config.js'), autoprefixer()))
  // .pipe(cssmin())
  .pipe(gulp.dest(path.destination.css));
});
//  [ css minify ] end

//  [ min-js ] start
gulp.task('min-js', function () {
  var layoutjs = gulp.src(path.src.layoutjs).pipe(uglify()).pipe(gulp.dest(path.destination.layoutjs));
  var pagesjs = gulp.src(path.src.pagesjs).pipe(babel()).pipe(uglify()).pipe(gulp.dest(path.destination.pagesjs));
  return merge(layoutjs, pagesjs);
});
//  [ min-js ] end

//  [ minify html ] start
gulp.task('min-html', function () {
  return gulp
    .src(path.src.html)
    .pipe(
      fileinclude({
        context: layout,
        prefix: '@@',
        basepath: '@file',
        indent: true
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest(path.destination.html));
});
//  [ minify html ] end

//  [ image optimizer ] start
// Function to compress images with retry mechanism
function compressImagesWithRetry(src, dest, retries = 40) {
  return new Promise((resolve, reject) => {
    const stream = gulp
      .src(src)
      .pipe(
        smushit({
          verbose: true // Enable verbose logging for debugging
        })
      )
      .on('error', function (err) {
        console.error('Error during image compression:', err.toString());
        if (retries > 0) {
          // Retry by recursively calling the function with reduced number of retries
          compressImagesWithRetry(src, dest, retries - 1)
            .then(resolve)
            .catch(reject);
        } else {
          // No more retries left, reject the promise
          reject(new Error('Max retries exceeded. Unable to compress image.'));
        }
      });

    stream.on('end', () => resolve());
    stream.pipe(gulp.dest(dest));
  });
}
gulp.task('min-image', function () {
  return compressImagesWithRetry(path.src.images, path.destination.images);
});
//  [ image optimizer ] end

//  [ watch minify ] start
gulp.task('watch-minify', function () {
  gulp.watch('src/assets/scss/**/*.scss', gulp.series('tailwind-min-scss'));
  gulp.watch('src/assets/js/**/*.js', gulp.series('min-js'));
  gulp.watch('src/html/**/*.html', gulp.series('min-html'));
});
//  [ watch minify ] start

// build in production mode
gulp.task('build-prod', gulp.series('cleandist', 'build-node-modules', 'tailwind-min-scss', 'min-js', 'min-html'));
// =======================================================
// ----------- END: Production mode tasks -----------
// =======================================================
