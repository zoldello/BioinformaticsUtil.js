var gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    jasmine = require('gulp-jasmine'),
    jshint = require('gulp-jshint'),
    documentation = require('gulp-documentation'),
    bcr = require('babel-core/register'),
     gutil = require('gulp-util'),
     concat = require('gulp-concat'),
     rollup = require('gulp-rollup'),
     uglify = require('gulp-uglify');

// ***************************** build dna.js file
gulp.task('build-dna', function () {
   gulp.src('src/dna/*.js', { read: false })
    .pipe(rollup({
        sourceMap: true
    }))
    //.on('error', gutil.log)
    .pipe(concat("dna.js"))
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('build-dna-es5', function () {
   gulp.src('src/dna/*.js', { read: false })
    .pipe(rollup({
        sourceMap: true
    }))
    //.on('error', gutil.log)
    .pipe(concat("dna-es5.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});


// ***************************** JavaScript lint
gulp.task('lint', function() {
  return gulp.src('./src/**.js')
    .pipe(jshint({
        esversion: 6
    }))
    .pipe(jshint.reporter('jshint-stylish'));
});

// ***************************** run unit test
gulp.task('test', function () {
	return gulp.src('./test/spec/*.js')
		.pipe(jasmine())
        .pipe(babel({
            "presets": ["es2015"]
        }));
});

// ***************************** Documentation
// documentation
gulp.task('documentation', function () {
 // gulp.src('./src/dna/**/*.js')
//    .pipe(documentation({ format: 'md' }))
//    .pipe(gulp.dest('documentation/dna-md-documentation'));

  gulp.src('./dist/**/*.js')
    .pipe(documentation({
        format: 'html',
        lint: true
    }))
    .pipe(gulp.dest('./documentation/dna-html-documentation'));

//  gulp.src('./src/dna/**/*.js')
//    .pipe(documentation({ format: 'json' }))
//    .pipe(gulp.dest('documentation/dna-json-documentation'));

  //gulp.src('./src/rna/**/*.js')
//    .pipe(documentation({ format: 'md' }))
//    .pipe(gulp.dest('documentation/rna-md-documentation'));

  //gulp.src('./src/rna/**/*.js')
//    .pipe(documentation({ format: 'html' }))
//    .pipe(gulp.dest('documentation/rna-html-documentation'));

  //gulp.src('./src/rna/**/*.js')
//    .pipe(documentation({ format: 'json' }))
//    .pipe(gulp.dest('documentation/rna-json-documentation'));

});


// ***************************** CLI
gulp.task('default', ['test', 'build-dna', 'lint', 'documentation']);
