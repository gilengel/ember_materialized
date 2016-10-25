/* jshint node: true */
'use strict';

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var compileLess = require('broccoli-less-single');
var path = require( 'path' );

module.exports = {
  name: 'ember-materialized',

  isDevelopingAddon: function() {
    return true;
  },

  /**
 * Name used for LESS-generated CSS file placed in vendor tree
 *
 * @returns {String}
 */
  getCssFileName: function() {
      return this.name + '.css';
  },

  /**
   * Whether this module is being accessed by an addon or an app
   *
   * @returns {Boolean}
   */
  isAddon: function() {
      var keywords = this.project.pkg.keywords;

      return ( keywords && keywords.indexOf( 'ember-addon' ) !== -1 ) ? true : false;
  },

/*
  treeForStyles: function(tree) {
      var scssFiles = [
        //core styles
        'app/styles/ember_materialized.less',
      ];

      var angularScssFiles = new Funnel('app', {
        files: scssFiles,
        destDir: 'angular-material',
        annotation: 'AngularScssFunnel'
      });


      return this._super.treeForStyles(mergeTrees([angularScssFiles, tree], { overwrite: true }));
    },
*/


  afterInstall: function() {
  return this.addBowerPackageToProject('ember_materialized'); // is a promise
}
};
