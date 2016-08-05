/**
 * Created by zhawei on 2016-7-17.
 */
angular.module('HandtoursApp').controller('RecommendCategoryController', ['$rootScope', '$scope','$http', function($rootScope, $scope,$http) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
        initRecommendCategoryTable();
        //UIModals.init();
        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
    $scope.submitForm = function(form){
        $http({
            method:"POST",
            url:"/product/rc/save",
            params:form,
        }).success(function(res){

        }).error(function(res){

        })
    }


}]);

