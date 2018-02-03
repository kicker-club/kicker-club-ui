module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    frameworks: ['mocha-debug', 'mocha'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'test/index.js'
    ],

    exclude: [],

    preprocessors: {
      'test/index.js': ['webpack']
    },
    // Webpack preprocessor always use webpack-dev-middleware (it's not needed to install)
    // You can specify here another webpack configuration.
    // Entry section is not used. No real path in output section is required.
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true
    },

    reporters: ['nyan'],
    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
