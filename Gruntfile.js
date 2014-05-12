module.exports = function(grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: grunt.file.readJSON('bower.json'),
		copy: {
			html5shiv: {
				expand: true, cwd: 'bower_components/html5shiv/dist/', src: '**', dest: 'public/js/'
			},
			respond: {
				expand: true, cwd: 'bower_components/respond/dest/', src: '**', dest: 'public/js/'
			},
			jquery: {
				expand: true, cwd: 'bower_components/jquery/dist/', src: '**', dest: 'public/js/'
			},
			angular: {
				expand: true, cwd: 'bower_components/angular/', src: '**', dest: 'public/js/'
			},
			bootstrap: {
				expand: true, cwd: 'bower_components/bootstrap/dist/', src: '**', dest: 'public/'
			},
		},
		concat: {
			options: {
				separator: ';'
			},
			componentsCss: {
				src: [
					'public/css/bootstrap.css',
					'public/css/bootstrap-theme.css'
				],
				dest: 'public/css/_components.css'
			},
			shimRespondJS: {
				src: [
					'public/js/html5shiv.js',
					'public/js/respond.src.js'
				],
				dest: 'public/js/_shim-respond.js'
			},
			headerJs: {
				src: [
					'public/js/jquery.js',
					'public/js/angular.js'
				],
				dest: 'public/js/_header.js'
			},
			footerJs: {
				src: [
					'public/js/bootstrap.js'
				],
				dest: 'public/js/_footer.js'
			}
		},
		htmlhint: {
			build: {
				options: {
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'tag-pair': true,
					'tag-self-close': true,
					'spec-char-escape': true,
					'id-unique': true,
					'src-not-empty': true,
					//'head-script-disabled': false,
					'img-alt-require': true,
					'doctype-html5': true,
					//'style-disabled': true
				},
				src: ['public/index.html']
			}
		}
	});
	return grunt.registerTask('default', ['copy', 'concat', 'htmlhint']);
};
