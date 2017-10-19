(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductLoading',['$scope','$ionicLoading','$filter','$timeout',function ($scope,$ionicLoading,$filter,$timeout) {
      $scope.products=[];
      $scope.sourceProducts = [];
      $scope.searchMV={
        content:''
      };
      $scope.hasMore=true;
      var isLoading = false;
      var pageIndex = 1;
      $scope.$on('$ionicView.enter',function () {
       $ionicLoading.show({
         template:'<ion-spinner icon="ios" class="spinner-list"></ion-spinner>数据加载中，请稍后......'
       });
        $scope.doRefresh();
      });
      $scope.getByNaem=function () {
        $scope.products = $filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh = function () {
        pageIndex=1;
        $scope.hasMore=true;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function  loadData() {
        if (isLoading == true) {
          return;
        }
        isLoading = true;
        $timeout(function () {
          var list = [
            {
              ID: 1
              , Images: ['views/product/images/1.jpg']
              , Name: 'iphone'
              , Price: '1231'
              , Store: 1231              , Barcode: '123'
            }
            , {
              ID: 2
              , Images: ['views/product/images/2.jpg']
              , Name: 'iphone1'
              , Price: '1231'
              , Store: 123              , Barcode: '123'
            }
            , {
              ID: 3
              , Images: ['views/product/images/3.jpg']
              , Name: 'iphone2'
              , Price: '1231'
              , Store: 12
              , Barcode: '123123'
            }
            , {
              ID: 4
              , Images: ['views/product/images/4.jpg']
              , Name: 'iphone3'
              , Price: '1231'
              , Store: 12              , Barcode: '12312'
            }
            , {
              ID: 5
              , Images: ['views/product/images/5.jpg']
              , Name: 'iphone4'
              , Price: '123'
              , Store: 12
              , Barcode: '1231'
            }
            , {
              ID: 6
              , Images: ['views/product/images/6.jpg']
              , Name: 'iphone5'
              , Price: '1231'
              , Store: 12
              , Barcode: '1231'
            }
            , {
              ID: 7
              , Images: ['views/product/images/7.jpg']
              , Name: 'iphone6'
              , Price: '1231'
              , Store: 12
              , Barcode: '1231'
            }
            , {
              ID: 7
              , Images: ['views/product/images/8.jpg']
              , Name: 'iphone7'
              , Price: '1231'
              , Store: 12              , Barcode: '1231'
            }
          ];
          $scope.products=$scope.products.concat(list);
          $scope.sourceProducts=angular.copy($scope.products);
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $ionicLoading.hide();
          isLoading=false;
          if(pageIndex==3){
            $scope.hasMore=false;
          }
        }, 3000);
      }
    }]);
})();
