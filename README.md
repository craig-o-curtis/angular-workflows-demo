// From Pluralsight Advanced Angular Workflows

Goals 

1. ES6
2. Gulp review
3. Jasmine
4. ESLint

// Setup
```
$ npm init -y
$ npm install gulp --save-dev
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




