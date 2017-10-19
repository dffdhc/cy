(function () {
  'use strict'
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope','$ionicActionSheet','$ionicHistory','CategoryService','productService','popupService', function ($scope,$ionicActionSheet,$ionicHistory,CategoryService,productService,popupService) {
      $scope.$on('$stateChangeSuccess',function (event,toState,toParams,fromState,fromParams) {
        $scope.showInfo='无小分类进入大分类';
        if(fromState.name=='app.product-list'){
          $scope.showInfo='全部商品';
        }
      });
      $scope.categories = [
        {
          ID: 1,
          Name: '早餐',
          Children: [
            {
              ID: 11,
              Name: '面条',
              Children: []
            },
            {
              ID: 12,
              Name: '面条',
              Children: []
            },
            {
              ID: 13,
              Name: '面条',
              Children: []
            },
            {
              ID: 14,
              Name: '面条',
              Children: []
            }
          ]
        },
        {
          ID: 2,
          Name: '午餐',
          Children: [
            {
              ID: 21,
              Name: '面条',
              Children: []
            },
            {
              ID: 22,
              Name: '面条',
              Children: []
            },
            {
              ID: 23,
              Name: '面条',
              Children: []
            },
            {
              ID: 24,
              Name: '面条',
              Children: []
            }
          ]
        },
        {
          ID: 3,
          Name: '晚餐',
          Children: [
            {
              ID: 31,
              Name: '面条',
              Children: []
            },
            {
              ID: 32,
              Name: '面条',
              Children: []
            },
            {
              ID: 33,
              Name: '面条',
              Children: []
            },
            {
              ID: 34,
              Name: '面条',
              Children: []
            }
          ]
        },
        {
          ID: 4,
          Name: '面条',
          Children: [
            {
              ID: 41,
              Name: '面条',
              Children: []
            },
            {
              ID: 42,
              Name: '面条',
              Children: []
            },
            {
              ID: 43,
              Name: '面条',
              Children: []
            },
            {
              ID: 44,
              Name: '面条',
              Children: []
            }
          ]
        },
      ];
      $scope.activeCategory = {};
      $scope.activeSubCategory = {};
      if ($scope.categories.length > 0) {
        $scope.activeCategory = $scope.categories[0];
      }
      $scope.seleCategory = function (index) {
        if ($scope.activeCategory.ID != $scope.categories[index].ID) {
          $scope.activeCategory = $scope.categories[index];
        }
      };
      $scope.selectSubCategory = function (data) {
        console.log(data);
        $scope.activeSubCategory = data;
        $ionicHistory.goBack();
      };
      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons:[
            {
              text:'<b>新增小分类</b>'
            },
            {
              text:'编辑分类'
            }
          ],
         cancelText:'取消',
          buttonClicked:function (index) {
            switch(index){
              case 0:
                    $scope.gotoCategoryAdd();
                    break;
              case 1:

                    break;
            }
          },
          titleText:'更多操作'
        });
      };
      $scope.gotoCategoryAdd=function () {
        location.href='#/app/category-add/' +$scope.activeCategory.ID + '/' +$scope.activeCategory.Name;
      }
      $scope.$watch('activeSubCategory',function (newValue,oldValue) {
        if(newValue.ID){
          CategoryService.updateCategory($scope.activeSubCategory);
        }
      })
    }
    ]);
})();

