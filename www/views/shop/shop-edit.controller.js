(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
   $scope.title=$stateParams.title;
   $scope.property=$stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'111122223333',
      createTime:'2017-10-19 12:19:28',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
    }
  }])
})()
