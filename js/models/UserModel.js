define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var UserModel = Backbone.Model.extend({
    urlRoot: '/user',
    defaults: {
      'firstName': '',
      'lastName': '',
      'email': ''
    }
  });

  return UserModel;
});