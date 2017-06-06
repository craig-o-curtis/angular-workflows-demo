'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('default', function(){
	gulp.src('js/**/*.js')
		.pipe($.babel({
			presets: ['es2015']
		}))
		.pipe($.ngAnnotate()) // auto adds $inject into angular files
		.pipe($.sourcemaps.init()) // looks at original js structure
		.pipe($.concat('bundle.js')) // spit out to concatenated file called bundle.js
		.pipe($.uglify()) // minify the code
		.pipe($.sourcemaps.write()) // write sourcemaps
		.pipe(gulp.dest('dist/js')); // spit out to dist/js
})