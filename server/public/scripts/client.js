console.log('client.js has been loaded');
var app = angular.module('FoodApp', []);

app.controller('FoodController', function(){
  console.log('FoodController loaded');
    var self = this;
self.food = [];
});




