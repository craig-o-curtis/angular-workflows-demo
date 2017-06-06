// From Pluralsight Advanced Angular Workflows

Goals 

1. ES6
2. Gulp review
3. Jasmine
4. ESLint

// Setup
```
$ npm init -y
$ npm install --save-dev gulp
$ npm install --save-dev gulp-concat
```

// Creating Gulp Tasks
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

// Gulp - Concatenation, Minification, and Sourcemaps
```
$ npm install --save-dev gulp-load-plugins gulp-concat gulp-ugflify gulp-ngAnnotate gulp-sourcemaps

```


Concated, Minified, Minify-safe with ngAnnotate and Debuggable with Source Maps

Gulpfile with concatenation and minification should look like: 
```
'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('default', function(){
	gulp.src('js/**/*.js')
		.pipe($.ngAnnotate()) // auto adds $inject into angular files
		.pipe($.concat('bundle.js')) // spit out to concatenated file called bundle.js
		.pipe($.uglify()) // minify the code
		.pipe(gulp.dest('dist/js')); // spit out to dist/js
})
```


// Adding Babel
```
$ npm install --save-dev gulp-babel babel-preset-es2015
```

Updated Gulpfile
```
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
```






