var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
var concat = require('gulp-concat'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
var concatCss = require('gulp-concat-css');
 

var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/'
    },
    src: {         js: 'src/js/main.js',
        cssin: 'src/cssin/main.css',
        
    },
    watch: { 
        js: 'src/js/**/*.js',
        cssin: 'src/style/**/*.scs    },
    clean: './build'
};

gulp.task('js:build', function () {
    gulp.src(path.src.js) //������ ��� main ����
        .pipe(rigger()) //�������� ����� rigger
        .pipe(sourcemaps.init()) //�������������� sourcemap
        .pipe(uglify()) //������ ��� js
        .pipe(concat('result.js'))
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true})); //� ������������ ������
});

gulp.task('style:build', function () {
    gulp.src(path.src.cssin) //������� ��� main.scss
        .pipe(sourcemaps.init()) 
        .pipe(prefixer( browsers: ['last 2 versions'])
        .pipe(cssmin()) //������ 
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload({stream: true}));
});


gulp.task('build', [
    
    'js:build',
    'cssin:build'
  ]);