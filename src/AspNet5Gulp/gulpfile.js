/// <binding />
var gulp = require("gulp");
var browserify = require("browserify");
var stringify = require("stringify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var clean = require("gulp-clean");

gulp.task("build", function() {
	return browserify({ entries: "./wwwroot/app.js" })
		.transform(stringify([".html"]))
		.transform("babelify", { presets: ["es2015"] })
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./wwwroot/bundles"));
});

gulp.task("clean", function() {
	return gulp.dest("./wwwroot/bundles/**/*")
		.pipe(clean());
});

gulp.task("watch", function() {
	var watcher = gulp.watch(["./wwwroot/**/*.js", "./wwwroot/components/**/*.html"], ["build"]);
	watcher.on("change", function (event) {
		console.log("File " + event.path + " was " + event.type + ", running tasks ...");
	});
});

gulp.task("default", ["watch"]);