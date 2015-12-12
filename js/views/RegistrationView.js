define([
  'jquery',
  'underscore',
  'backbone',
  'models/UserModel',
  'collections/UsersCollection',
  'text!templates/registrationTemplate.html',
], function($, _, Backbone, UserModel, UsersCollection, registrationTemplate){

  var SearchView = Backbone.View.extend({
    el: $('#container'),

    events: {
      'click #registration-btn': 'submitForm'
    },

    initialze: function(options) {},

    render: function() {
      var compiledTemplate = _.template(registrationTemplate);
      this.$el.html(compiledTemplate());
      return this;
    },

    submitForm: function(e) {
      e.preventDefault(); //prevent page reload on submit
      console.log(this.$el);
      var newUser = new UserModel({
        firstName: this.$el.find('#firstName').val(),
        lastName: this.$el.find('#lastName').val(),
        email: this.$el.find('#email').val()
      })
      this.collection
    }
  });

  return SearchView;
});