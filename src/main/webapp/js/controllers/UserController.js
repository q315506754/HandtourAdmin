/**
 * Created by zhawei on 2016-7-17.
 */
angular.module('HandtoursApp').controller('UserController', ['$rootScope', '$scope', 'settings', '$http',function($rootScope, $scope, settings,$http) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
        $scope.dataTable = initUserTable($scope);
        // console.log($scope.dataTable);

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });

    $scope.submitForm = function(form){
        // console.log(form);
        // console.log(form.isEnable);

        if (form.enable == undefined) {
            form.enable = true;
        }

        form.password = $.md5(form.password);
        form.secondPassword = $.md5(form.secondPassword);

        $http({
            method:"POST",
            url:"/user/save",
            params:form,
        }).success(function(res){
            console.log(res);
            if (res.code==0) {
                alert("保存成功");

                $scope.refreshData();
            } else{
                alert(res.msg);
            }
        }).error(function(res){
            // console.log(res);
            alert("保存失败");
        })
    }
    $scope.openEditForm=function () {

    }

    $scope.submitEditForm= function(form){
        console.log('submitEditForm');

        if (form.password != null && form.secondPassword!=null){
            form.password = $.md5(form.password);
            form.secondPassword = $.md5(form.secondPassword);
        }
        
        $http({
            method:"POST",
            url:"/user/update",
            params:form,
        }).success(function(res){
            // console.log(res);
            if (res.code==0) {
                alert("更新成功");

                $scope.refreshData();
            } else{
                alert(res.msg);
            }
        }).error(function(res){
            // console.log(res);
            alert("更新失败");
        })

    }


    $scope.refreshData = function () {
        $scope.dataTable.api().ajax.reload();
    }

    $scope.deleteForm= function(form){
        // console.log('deleteForm');

        $http({
            method:"POST",
            url:"/user/delete",
            params:form,
        }).success(function(res){
            console.log(res);
            if (res.code==0) {
                alert("删除成功");

                $scope.refreshData();
            } else{
                alert(res.msg);
            }
        }).error(function(res){
            // console.log(res);
            alert("删除失败");
        })

    }
}]);
