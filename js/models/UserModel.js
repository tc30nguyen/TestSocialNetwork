define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var UserModel = Backbone.Model.extend({

    defaults: {
      'firstName': '',
      'lastName': '',
      'email': ''
    }
  });

  return UserModel;
});