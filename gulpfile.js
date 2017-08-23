const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
	bs.init({
		server: {
			baseDir: "./"
		}
	})
});

gulp.task("watch",['browser-sync'], function() {
	gulp.watch(["./*.html", "./*.css", "./*.js"])
		.on("change", bs.reload);
})
