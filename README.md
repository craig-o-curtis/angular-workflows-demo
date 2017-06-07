// From Pluralsight Advanced Angular Workflows
** This is AngularJS 1.5.8 **

Goals  - Gulp to Automate:

1. Babel - ES6 in AngularJS
2. Validate code with JSHint
3. Unit testing with karma & Mocha, Chai for insertion framework, Sinon for mocking
4. Specifying Environment processes

// Gulp will:
* bundle, minify, sourcemap, transpile es6 with babel, watch js files


// Setup
```
$ npm init -y
$ npm install --save-dev jquery@3.1.0 angular@1.5.8 angular-route@1.5.8 angular-mocks@1.5.8 // fronteend dependencies
$ npm install --save-dev gulp
$ npm install --save-dev gulp-load-plugins gulp-concat gulp-ugflify gulp-ngAnnotate gulp-util
$ npm install --save-dev gulp-babel babel-preset-es2015gulp-sourcemaps
$ npm install --save-dev mocha sinon chai karma-mocha karma-sinon karma-chai 
karma-phantomjs-launcher phantomjs-prebuilt
$ npm install --save-dev gulp-jshint jshint jshint-stylish
$ npm install --save gulp-jshint jshint-stylish
$ npm install --save-dev yargs
```

// Create a Gulpfile
```
$ touch gulpfile.js // creates gulpfile
```

File should output as:
```
'use strict';

var gulp = require('gulp');

gulp.task('default', function(){
	console.log('We are ready to go!');

})
```

// Setup JSHint
```
$ touch .jshintrc
```

Should magically output:
```
{
	"curly": true,
	"eqeqeq": true,
	"esversion": 6,
	"maxcomplexity":5,
	"maxdepth":3,
	"strict":true,
	"predef": ["angular", "crmContactId", "console", "process", "modules", "require"]
}

Slightly modify adding the commented parts:
```
{
	"curly": true,
	"eqeqeq": true,
	"esversion": 6,
	"maxcomplexity":5,
	"maxdepth":3,
	"strict":true,
	"validthis": true, // add
	"predef": [
		"angular",
		"crmContactId",
		"console",
		"process",
		"modules", // add
		"require", // add
		"describe", // add
		"module", // add
		"inject", // add
		"beforeEach", // add
		"sinon", // add
		"it" // add
	]
}
```


```

// Setup Karma, Mocha, Chai, and Sinon
```
$ karma --version
$ npm install -g karma-cli
$ npm install --s-dev karma
```



// Gulp with all goodies

```
'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

var srcScripts = ['js/**/*.js'];

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
})

gulp.task('default', ['scripts'], function() {
	// runs scripts task
	gulp.watch(srcScripts, ['scripts']);
});
```


// Config Karma testing
```
$ karma init
// tab to mocha
// no - use require.js
// tab to phantom 
// [Enter] through rest of defaults
```

In karma.conf.js
// add chai and sinon to frameworks

// add npm modules
```
$ npm install --save-dev mocha sinon chai karma-mocha karma-sinon karma-chai karma-phantomjs-launcher phantomjs-prebuilt jshint-stylish
```



