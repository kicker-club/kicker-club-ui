/*
 * Loads all the tests using webpack require.context instead of separate imports here
 * or enumeration of all test files in karma configuration.
*/

const webpackContext = require.context('./', true, /.jsx?$/);
const modules = webpackContext.keys();
modules.forEach(webpackContext);