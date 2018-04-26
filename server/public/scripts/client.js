console.log('client.js has been loaded');
var app = angular.module('FoodApp', []); //$http is a dependency

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController loaded');
    var self = this;

    getAllFoods();

    self.food = [
        { name: 'pasta', deliciousness_rating: 9, is_hot: true }
    ];

    self.newFood = {};

    self.foodList = [];
    function getAllFoods() {
        $http({
            method: 'GET', // only "method" is allowed in Angular, not "type".  Either can be used in jQuery.
            url: '/food'
        })
            .then(function (response) {
                console.log(response.data);
                self.foodList = response.data;
            })
            .catch(function (error) {
                console.log('error on /food GET', error);
            })
        }
    self.createFood = function () {
        console.log(self.newFood)
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood
        })
            .then(function (response) {
                console.log(response);
                getAllFoods();
            })
            .catch(function (error) {
                console.log('error on /food GET', error);
            })
    }
}]);




