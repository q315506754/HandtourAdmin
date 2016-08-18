/**
 * Created by zhawei on 2016-7-17.
 */
angular.module('HandtoursApp').controller('GuideController',['$rootScope', '$scope', 'settings', '$http','crudConfig',function($rootScope, $scope, settings,$http,crudConfig) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();

        // set sidebar closed and body solid layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;

        var dtTable = initCardUserTable($scope);

        crudConfig.config($scope,dtTable);

        //extend
        $scope.forms.url={
            create:"/card/save",
            update:"/card/update",
            delete:"/card/delete",
        }

        //module-delete
        $scope.forms.name.delete="微名片删除";
        $scope.forms.onOpenEvent.delete=function (rowData) {
            var cf = confirm("确认删除该名片吗?");
            if (cf) {
                this.submit($.extend({},this.formDefault.delete,rowData));
            }
        }

        //module-audit
        $scope.forms.initialize("audit");
        $scope.forms.name.audit="审核";
        $scope.forms.url.audit="/card/audit";

        $scope.forms.onOpenEvent.audit = function (rowData) {
            // console.log('aaa');
            var $this = this;
            this._scope.$apply(function () {
                var newData = $.extend({},$this.formDefault.audit,rowData);
                $this.form.audit = newData;
            });

            this.openDialog('audit');
        };

        //module-audit
        $scope.forms.initialize("withdrawHistory");
        $scope.forms.onOpenEvent.withdrawHistory = function (rowData) {
            // console.log('aaa');
            var $this = this;
            this._scope.$apply(function () {
                var newData = $.extend({},$this.formDefault.audit,rowData);
                $this.form.withdrawHistory = newData;
            });

            $http({
                method:"POST",
                url:"/card/query",
                params:{mobile:rowData.mobile},
            }).success(function(res){
                if (res.code==0) {
                    $this.form.withdrawHistory =res.dataList;

                    $this.openDialog('withdrawHistory');
                } else{
                    $this.alertMsg(res.msg);
                }
            }).error(function(res){
                $this.alertMsg('出现了异常');
            });

        };

    });
}]);