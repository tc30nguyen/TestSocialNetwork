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

        submitForm: function() {
            var newUser = new UserModel({
                firstName: this.$el.$('#firstName'),
                lastName: this.$el.$('#lastName'),
                email: this.$el.$('#email')
            })
            console.log(newUser);
        }
    });

    return SearchView;
});