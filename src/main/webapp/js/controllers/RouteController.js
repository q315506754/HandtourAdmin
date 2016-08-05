/**
 * Created by zhawei on 2016-7-17.
 */
angular.module('HandtoursApp').controller('RouteController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
        //TableAjax.init();
        initRouteTable();
        ComponentsDateTimePickers.init();
    });

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});