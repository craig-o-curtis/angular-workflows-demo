(function() {
	'use strict';

	var gulp = require('gulp'),
		$ = require('gulp-load-plugins')(),
		stylish = require('jshint-stylish'),
		karma = require('karma');

	var srcScripts = ['js/**/*.js'];

	// specify here, then npm --save install same versions as in index.html / 
	var karamFiles = [
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/angular/angular.js',
		'node_modules/angular-route/angular-route.js',
		'node_modules/angular-mocks/angular-mocks.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js'
	];

	gulp.task('scripts', function() {
		gulp.src(srcScripts)
			.pipe($.babel({
				presets: ['es2015']
			}))
			.pipe($.ngAnnotate()) // auto adds $inject into angular files
			.pipe($.sourcemaps.init()) // looks at original js structure
			.pipe($.concat('bundle.js')) // spit out to concatenated file called bundle.js
			.pipe($.uglify()) // minify the code
			.pipe($.sourcemaps.write()) // write sourcemaps
			.pipe(gulp.dest('dist/js')); // spit out to dist/js
	});

	gulp.task('validate', function() {

	});

	gulp.task('test', function() {
		// run karma from within gulp
		new karma.Server({
			configFile: __dirname + '/karma.conf.js',
			singleRun: true
		}, function() {
			done();
		}).start();
	});


	gulp.task('default', ['scripts', 'validate'], function() {
		// runs scripts task
		gulp.watch(srcScripts, ['scripts']);
	});

}());