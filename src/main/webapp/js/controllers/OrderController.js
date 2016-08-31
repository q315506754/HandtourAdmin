/**
 * Created by zhawei on 2016-7-17.
 */
angular.module('HandtoursApp').controller('OrderController',['$rootScope', '$scope', 'settings', '$http','crudConfig',function($rootScope, $scope, settings,$http,crudConfig) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
        // ComponentsDateTimePickers.init();
        ComponentsDateTimePickers.handleDateRangePickersByCls('dateTimeRange');

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;


        var dtTable = initOrderTable($scope);

        crudConfig.config($scope,dtTable);

        //extend
        $scope.forms.url={
            create:"/order/save",
            update:"/order/update",
            delete:"/order/delete",
        }

        //groupPerson
        $scope.forms.initialize("groupPerson");
        $scope.forms.onOpenEvent.groupPerson = function (rowData) {
            // console.log(rowData);
            var $this = this;
            this._scope.$apply(function () {
                var newData = $.extend({},$this.formDefault.groupPerson,rowData);
                $this.form.groupPerson = newData;
            });

            this.openDialog('groupPerson');
        };

        var createFunction = function () {
            var func = function (rowData,mode) {
                var l_mode = mode;
                var $this = this;
                $this._scope.$apply(function () {
                    var newData = $.extend({},$this.formDefault[l_mode],rowData);
                    newData.id = newData.orderId;
                    $this.form[l_mode] = newData;
                });
                $this.openDialog(l_mode);
            };
            return func;
        };

        var simpleOpers = {
            "audit":{name:"审核"},
            "went":{name:"改为已出行"},
            "cancel":{name:"取消"},
            "settle":{name:"标记已结算"},
            "discount":{name:"标记已返佣"}
        }

        for(var e in simpleOpers){
            var json = simpleOpers[e];
            $scope.forms.initialize(e);
            $scope.forms.name[e]=json.name;
            $scope.forms.url[e]="/order/"+e;

            $scope.forms.onOpenEvent[e] = createFunction();
        }
    });
}]);
