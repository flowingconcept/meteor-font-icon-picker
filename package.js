// package metadata file for Meteor.js
'use strict';

var packageName = 'flowingconcept:font-icon-picker';  // https://atmospherejs.com/flowingconcept/..

Package.describe({
  name: packageName,
  summary: 'jQuery & fontawesome based icon picker for Meteor',
  version: '0.0.1',
  git: 'https://github.com/flowingconcept/meteor-font-icon-picker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery@1.7.1', 'client');
  api.addFiles('lib/fontIconPicker/jquery.fonticonpicker.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use(packageName);
  api.use('tinytest');
  api.addFiles('font-icon-picker-tests.js');
});


