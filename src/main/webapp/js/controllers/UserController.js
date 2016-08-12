/**
 * Created by zhawei on 2016-7-17.
 */
angular.module('HandtoursApp').controller('UserController', ['$rootScope', '$scope', 'settings', '$http','crudConfig',function($rootScope, $scope, settings,$http,crudConfig) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();

        // console.log($scope.dataTable);

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;


        var dtTable = initUserTable($scope);

        crudConfig.config($scope,dtTable);

        //extend
        $scope.forms.onOpenEvent.delete=function (rowData) {
            var cf = confirm("确认删除该用户吗?");
            if (cf) {
                this.submit($.extend({},this.formDefault.delete,rowData));
            }
        }

        $scope.forms.formDefault.create.enable=true;
        var bfCheck = function (l_param) {
            // console.log('bfcheck');
            // console.log(l_param);
            if (l_param.password != undefined || l_param.secondPassword!= undefined){
                if (l_param.password != l_param.secondPassword){
                    this.alertMsg('密码不一致');
                    return false;
                }
                l_param.password = $.md5(l_param.password);
                l_param.secondPassword = $.md5(l_param.secondPassword);
            }

            return true;
        };

        $scope.forms.beforeRequest.create =bfCheck;
        $scope.forms.beforeRequest.update =bfCheck;
        $scope.forms.name={
            create:"账号保存",
            update:"账号更新",
            delete:"账号删除"
        };

    });

}]);
