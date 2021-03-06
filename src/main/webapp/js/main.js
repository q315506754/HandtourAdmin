/***
 Handtours AngularJS App Main Script
***/

/* Handtours App */
var HandtoursApp = angular.module("HandtoursApp", [
    "ui.router", 
    "ui.bootstrap", 
    "oc.lazyLoad",  
    "ngSanitize"
]); 

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
HandtoursApp.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
HandtoursApp.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);

//HandtoursApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//
//    //..省略代码
//    $locationProvider.html5Mode(true);
//}]);

/********************************************
 END: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/

/* Setup global settings */
HandtoursApp.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: '../assets/global',
        layoutPath: '../assets/layouts/layout',
    };

    $rootScope.settings = settings;

    return settings;
}]);

/* Setup App Main Controller */
HandtoursApp.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Layout Part - Header */
HandtoursApp.controller('HeaderController', ['$rootScope','$scope','crudConfig','$http', function($rootScope,$scope,crudConfig,$http) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header

        crudConfig.config($scope);
        // console.log($scope.forms);
        $scope.forms.div.update = "modal_header_update_user";
        $scope.forms.url.update = "/user/update";



        var bfCheck = function (l_param) {
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
        $scope.forms.beforeRequest.update =bfCheck;
        $scope.forms.postSuccessEvent.update =function (res) {
            $rootScope.refreshHeaderUser();
        };
        $scope.forms.onOpenEvent.update = function () {
            // console.log('aaa');
            // $("#myAvatar").removeAttr("src") ;
            $("#myAvatar").show();
            $("#changedAvatar").hide();

            var $this = this;

            $http({
                method:"POST",
                url:"/info"
            }).success(function(res){
                $this.form.update =$.extend({},$this.formDefault.update,res);

                $this.openDialog('update');

                $('.modal-backdrop').remove();

            }).error(function(res){
                $this.alertMsg('出现了异常');
            });

        };


        $scope.changeAvatar = function () {
            $("#uploadForm :file").trigger("click");
        }

        $("#uploadForm :file").change(function () {

            $("#myAvatar").hide();
            $("#changedAvatar").show();

            var objUrl = getObjectURL(this.files[0]) ;
            if (objUrl) {
                $("#changedAvatar").attr("src", objUrl) ;
            }

            $("#uploadForm").ajaxSubmit({
                success     : function (data){
                    $scope.$apply(function () {
                        $scope.forms.form.update.avatarKey = data;
                    });
                }
            });
        });

        var getObjectURL= function (file) {
            var url = null ;
            if (window.createObjectURL!=undefined) { // basic
                url = window.createObjectURL(file) ;
            } else if (window.URL!=undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file) ;
            } else if (window.webkitURL!=undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file) ;
            }
            return url ;
        }

    });
}]);

/* Setup Layout Part - Sidebar */
HandtoursApp.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
}]);

/* Setup Layout Part - Quick Sidebar */
HandtoursApp.controller('QuickSidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
       setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar        
        }, 2000)
    });
}]);

/* Setup Layout Part - Theme Panel */
HandtoursApp.controller('ThemePanelController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Demo.init(); // init theme panel
    });
}]);

/* Setup Layout Part - Footer */
HandtoursApp.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

HandtoursApp.service('alertMsg',[function(){
    toastr.options = {
        "positionClass": "toast-top-center",
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000"
    }

    this.success = function (msg,title) {
        toastr["success"](msg, title);
    }
    this.fail = function (msg,title) {
        // toastr["error"](msg, title);
        alert(msg);
    }
    this.warn = function (msg,title) {
        toastr["warning"](msg, title);
    }
}]);

HandtoursApp.service('crudConfig',['$rootScope','$http', 'alertMsg',function($rootScope,$http,alertMsg){
    this.config=function (curscope,dtTable) {
        curscope.forms={
            _scope:curscope,
            div:{
                create:"modal_create",
                update:"modal_edit",
                delete:"modal_delete"
            },
            url:{
                create:"/user/save",
                update:"/user/update",
                delete:"/user/delete",
            },
            name:{
                create:"保存",
                update:"更新",
                delete:"删除",
            },
            formName:{
                create:"createForm",
                update:"updateForm",
                delete:"deleteForm",
            },
            form:{
                create:{_mode:"create"},
                update:{_mode:"update"},
                delete:{_mode:"delete"}
            },
            formDefault:{
                create:{_mode:"create"},
                update:{_mode:"update"},
                delete:{_mode:"delete"}
            },
            reset:function (mode) {
                this.onResetEvent[mode].apply(this,Array.prototype.slice.call(arguments, 1));
            },
            onResetEvent: {
                create: function () {
                    this.resetEventCommon('create');

                    var $this = this;
                    this._scope.$apply(function () {
                        var newData = $.extend({},$this.formDefault.create);
                        console.log(newData);
                        $this.form.create = newData;
                    });
                },update: function () {
                    this.resetEventCommon('update');
                },delete: function () {
                    this.resetEventCommon('delete');
                },
            },
            resetEventCommon:function (mode) {
                // $("#"+this.div[mode]).find("form")[0].reset();

                if (this._scope[this.formName[mode]]) {
                    this._scope[this.formName[mode]].$setPristine();
                    this._scope[this.formName[mode]].$setUntouched();
                }
            },
            dataApi:function () {
                if(dtTable){
                    return dtTable.api();
                }
            },
            refreshData:function(){
                if(this.dataApi()){
                    this.dataApi().ajax.reload();
                }
            },
            alertMsg:function(msg){
                alertMsg.fail(msg);
            },
            beforeRequest:{
                create:function (l_params) {
                    return true;
                },
                update:function (l_params) {
                    return true;
                },
                delete:function (l_params) {
                    return true;
                }
            },
            submit:function(form) {
                // console.log(this);
                var mode = form._mode;
                var l_params = $.extend({},this.formDefault[mode],form);
                var reqUrl = this.url[mode];
                var name = this.name[mode];
                var $this = this;

                // console.log(mode);
                // console.log(form);
                // console.log(reqUrl);
                // console.log(name);
                // console.log(l_params);

                if (this.beforeRequest[mode] !=undefined){
                    if(!this.beforeRequest[mode].apply(this,[l_params])){
                        return;
                    }
                }



                $http({
                    method:"POST",
                    url:reqUrl,
                    params:l_params,
                }).success(function(res){
                    if (res.code==0) {
                        // $this.alertMsg(name+"成功");
                        alertMsg.success(name+"成功");
                        $this.refreshData();
                        $this.close(mode);
                        $this.postSuccess(mode,res);
                    } else{
                        alertMsg.fail(res.msg);
                        // $this.alertMsg(res.msg);
                    }
                }).error(function(res){
                    // $this.alertMsg(name+"失败");
                    alertMsg.fail(name+"失败","错误");
                })
            },
            open:function(mode) {
                // this.onOpenDefault(this.div[mode]);
                // console.log(typeof arguments);
                // console.log( arguments);
                var p = Array.prototype.slice.call(arguments, 1);
                p.push(mode);
                this.onOpenEvent[mode].apply(this,p);
            },
            postSuccess:function(mode) {
                if (this.postSuccessEvent[mode]){
                    this.postSuccessEvent[mode].apply(this,Array.prototype.slice.call(arguments, 1));
                }
            },
            postSuccessEvent:{
                create:function (res) {
                },
                update:function (res) {
                },
                delete:function (res) {
                }
            },
            initialize:function(mode) {
                this.div[mode] = "modal_"+mode;
                this.formDefault[mode] = {_mode:mode};
                this.form[mode] = {_mode:mode};
                this.formName[mode] = mode+"Form";
                this.name[mode] = "功能"+mode;
                this.onOpenEvent[mode] = function () {
                    this.reset(mode);

                    this.openDialog(mode);
                };
                this.onResetEvent[mode] = function () {
                    this.resetEventCommon(mode);
                };

            },
            onOpenEvent:{
                create:function () {
                    this.reset('create');

                    this.openDialog('create');
                },
                update:function (rowData) {
                    this.reset('update');

                    // console.log(rowData);
                    var $this = this;
                    this._scope.$apply(function () {
                        var newData = $.extend({},$this.formDefault.update,rowData);
                        // console.log(newData);
                        $this.form.update = newData;
                    });

                    this.openDialog('update');
                },
                delete:function () {
                    this.reset('delete');

                    this.openDialog('delete');
                }
            },
            openDialog:function (mode) {
                $("#"+this.div[mode]).modal();
            },
            close:function(mode) {
                this.onCloseDefault(this.div[mode]);
            },
            onCloseDefault:function (div) {
                $("#"+div).modal('hide');
            }

        }
    }

}]);


/* Setup Rounting For All Pages */
HandtoursApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/route.html");
    
    $stateProvider

        // 主页
        .state('dashboard', {
            url: "/dashboard.html",
            templateUrl: "views/dashboard.jsp",
            data: {pageTitle: '掌旅行管理后台'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            '../assets/global/plugins/morris/morris.css',                            
                            '../assets/global/plugins/morris/morris.min.js',
                            '../assets/global/plugins/morris/raphael-min.js',                            
                            '../assets/global/plugins/jquery.sparkline.min.js',

                            '../assets/pages/scripts/dashboard.js',
                            'js/controllers/DashboardController.js',
                        ] 
                    });
                }]
            }
        })

        // 产品管理 - 线路
        .state('route', {
            url: "/route.html",
            templateUrl: "views/product/route.jsp",
            data: {pageTitle: '线路管理 - 掌旅行'},
            controller: "RouteController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'route',
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css',
                            //'../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css',
                            '../assets/global/css/handtours.css',

                            '../assets/global/plugins/moment.min.js',
                            //'../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js',
                            '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js',
                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/scripts/datatable.js',
                            '../assets/pages/scripts/product/route.js',

                            //'js/scripts/table-ajax.js',
                            '../assets/pages/scripts/components-date-time-pickers.js',
                            'js/controllers/RouteController.js'
                        ]
                    }]);
                }]
            }
        })

        // 产品管理 - 分类
        .state('category', {
            url: "/category.html",
            templateUrl: "views/product/category.jsp",
            data: {pageTitle: '分类 - 掌旅行'},
            controller: "CategoryController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'category',
                        files: [
                            '../assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                            '../assets/global/plugins/datatables/datatables.min.css',
                            '../assets/global/css/handtours.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/scripts/datatable.js',
                            '../assets/pages/scripts/product/category.js',

                            //'js/scripts/table-ajax.js',
                            'js/controllers/CategoryController.js'
                        ] 
                    }]);
                }]
            }
        })

        // 产品管理 - 推荐位
        .state('recommendCategory', {
            url: "/recommendCategory.html",
            templateUrl: "views/product/recommendCategory.jsp",
            data: {pageTitle: '推荐位 - 掌旅行'},
            controller: "RecommendCategoryController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'recommendCategory',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css',
                            '../assets/global/css/handtours.css',

                            '../assets/global/plugins/jquery-ui/jquery-ui.min.js',
                            //'../assets/pages/scripts/ui-modals.js',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/scripts/datatable.js',
                            '../assets/pages/scripts/product/recommendCategory.js',
                            'js/controllers/RecommendCategoryController.js'
                        ]
                    }]);
                }]
            }
        })

        // 订单管理
        .state('order', {
            url: "/order.html",
            templateUrl: "views/order/order.jsp",
            data: {pageTitle: '订单管理 - 掌旅行'},
            controller: "OrderController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Order',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            // '../assets/global/plugins/moment.js',
                            // '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            // '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js',

                            '../assets/global/plugins/datatables/datatables.min.css',
                            //'../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css',
                            '../assets/global/css/handtours.css',

                            //'../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js',
                            '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js',
                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/scripts/datatable.js',
                            // '../assets/pages/scripts/product/route.js',


                            '../assets/pages/scripts/order/order.js',
                            //'js/scripts/table-ajax.js',
                            '../assets/pages/scripts/components-date-time-pickers.js',
                            'js/controllers/OrderController.js'

                        ]
                    }
                    // , {
                    //     name: 'HandtoursApp',
                    //     files: [
                    //         'js/controllers/OrderController.js'
                    //     ]
                    // }
                    ]);
                }]
            }
        })

        //供应商
        .state('supplier', {
            url: "/supplier.html",
            templateUrl: "views/provider/supplier.jsp",
            data: {pageTitle: '供应商 - 掌旅行'},
            controller: "SupplierController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Supplier',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/SupplierController.js'
                        ]
                    }]);
                }]
            }
        })

        //微名片
        .state('guide', {
            url: "/guide.html",
            templateUrl: "views/guide/guide.jsp",
            data: {pageTitle: '微名片 - 掌旅行'},
            controller: "GuideController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Guide',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js',

                            '../assets/global/plugins/datatables/datatables.min.css',
                            '../assets/global/css/handtours.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/scripts/datatable.js',

                            '../assets/pages/scripts/guide/card.js',
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/GuideController.js'
                        ]
                    }]);
                }]
            }
        })

        //提现管理
        .state('withdraw', {
            url: "/withdraw.html",
            templateUrl: "views/withdraw/withdraw.jsp",
            data: {pageTitle: '提现管理 - 掌旅行'},
            controller: "WithdrawController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Withdraw',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/WithdrawController.js'
                        ]
                    }]);
                }]
            }
        })

        //用户管理
        .state('user', {
            url: "/user.html",
            templateUrl: "views/profile/user.jsp",
            data: {pageTitle: '用户管理 - 掌旅行'},
            controller: "UserController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'User',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js',

                            '../assets/global/plugins/datatables/datatables.min.css',
                            '../assets/global/css/handtours.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/scripts/datatable.js',
                            // '../assets/global/scripts/jQuery.md5.js',

                            '../assets/pages/scripts/profile/user.js',
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/UserController.js'
                        ]
                    }]);
                }]
            }
        })

        //微信管理 - 自定义菜单
        .state('menu', {
            url: "/menu.html",
            templateUrl: "views/wechat/menu.jsp",
            data: {pageTitle: '自定义菜单 - 掌旅行'},
            controller: "MenuController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Menu',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/MenuController.js'
                        ]
                    }]);
                }]
            }
        })

        //微信管理 - 关键词回复
        .state('keyword', {
            url: "/keyword.html",
            templateUrl: "views/wechat/keyword.jsp",
            data: {pageTitle: '关键词回复 - 掌旅行'},
            controller: "KeywordController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Keyword',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/KeywordController.js'
                        ]
                    }]);
                }]
            }
        })

        //微信管理 - 基础配置
        .state('basic', {
            url: "/basic.html",
            templateUrl: "views/wechat/basic.jsp",
            data: {pageTitle: '基础配置 - 掌旅行'},
            controller: "BasicController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Basic',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/BasicController.js'
                        ]
                    }]);
                }]
            }
        })

        //系统管理 - 关于掌旅行
        .state('about', {
            url: "/about.html",
            templateUrl: "views/system/about.jsp",
            data: {pageTitle: '关于掌旅行 - 掌旅行'},
            controller: "AboutController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'About',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/AboutController.js'
                        ]
                    }]);
                }]
            }
        })

        //系统管理 - 意见反馈
        .state('agreement', {
            url: "/agreement.html",
            templateUrl: "views/system/agreement.jsp",
            data: {pageTitle: '意见反馈 - 掌旅行'},
            controller: "AgreementController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Agreement',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/AgreementController.js'
                        ]
                    }]);
                }]
            }
        })

        //系统管理 - 用户协议
        .state('feedback', {
            url: "/feedback.html",
            templateUrl: "views/system/feedback.jsp",
            data: {pageTitle: '用户协议 - 掌旅行'},
            controller: "FeedbackController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'Feedback',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            '../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'HandtoursApp',
                        files: [
                            'js/controllers/FeedbackController.js'
                        ]
                    }]);
                }]
            }
        })
        // Form Tools
        .state('formtools', {
            url: "/form-tools",
            templateUrl: "views/form_tools.html",
            data: {pageTitle: 'Form Tools'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            '../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                            '../assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                            '../assets/global/plugins/typeahead/typeahead.css',

                            '../assets/global/plugins/fuelux/js/spinner.min.js',
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                            '../assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                            '../assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                            '../assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                            '../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                            '../assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            '../assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                            '../assets/global/plugins/typeahead/handlebars.min.js',
                            '../assets/global/plugins/typeahead/typeahead.bundle.min.js',
                            '../assets/pages/scripts/components-form-tools-2.min.js',

                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })        

        // Date & Time Pickers
        .state('pickers', {
            url: "/pickers",
            templateUrl: "views/pickers.html",
            data: {pageTitle: 'Date & Time Pickers'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/clockface/css/clockface.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            '../assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
                            '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css',
                            '../assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',

                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            '../assets/global/plugins/clockface/js/clockface.js',
                            '../assets/global/plugins/moment.min.js',
                            '../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.js',
                            '../assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                            '../assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',

                            '../assets/pages/scripts/components-date-time-pickers.min.js',

                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })

        // Custom Dropdowns
        .state('dropdowns', {
            url: "/dropdowns",
            templateUrl: "views/dropdowns.html",
            data: {pageTitle: 'Custom Dropdowns'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
                            '../assets/global/plugins/select2/css/select2.min.css',
                            '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                            '../assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
                            '../assets/global/plugins/select2/js/select2.full.min.js',

                            '../assets/pages/scripts/components-bootstrap-select.min.js',
                            '../assets/pages/scripts/components-select2.min.js',

                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        }) 

        // Advanced Datatables
        .state('datatablesAdvanced', {
            url: "/datatables/managed.html",
            templateUrl: "views/datatables/managed.html",
            data: {pageTitle: 'Advanced Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [                             
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',

                            '../assets/pages/scripts/table-datatables-managed.min.js',

                            'js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // Ajax Datetables
        .state('datatablesAjax', {
            url: "/datatables/ajax.html",
            templateUrl: "views/datatables/ajax.html",
            data: {pageTitle: 'Ajax Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/datatables/datatables.min.css', 
                            '../assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',

                            '../assets/global/plugins/datatables/datatables.all.min.js',
                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            '../assets/global/scripts/datatable.js',

                            'js/scripts/table-ajax.js',
                            'js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // User Profile
        .state("profile", {
            url: "/profile",
            templateUrl: "views/profile/main.html",
            data: {pageTitle: 'User Profile'},
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            '../assets/pages/css/profile.css',
                            
                            '../assets/global/plugins/jquery.sparkline.min.js',
                            '../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                            '../assets/pages/scripts/profile.min.js',

                            'js/controllers/UserProfileController.js'
                        ]                    
                    });
                }]
            }
        })

        // User Profile Dashboard
        .state("profile.dashboard", {
            url: "/dashboard",
            templateUrl: "views/profile/dashboard.html",
            data: {pageTitle: 'User Profile'}
        })

        // User Profile Account
        .state("profile.account", {
            url: "/account",
            templateUrl: "views/profile/account.html",
            data: {pageTitle: 'User Account'}
        })

        // User Profile Help
        .state("profile.help", {
            url: "/help",
            templateUrl: "views/profile/help.html",
            data: {pageTitle: 'User Help'}      
        })

        // Todo
        .state('todo', {
            url: "/todo",
            templateUrl: "views/todo.html",
            data: {pageTitle: 'Todo'},
            controller: "TodoController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({ 
                        name: 'HandtoursApp',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            '../assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            '../assets/apps/css/todo-2.css',
                            '../assets/global/plugins/select2/css/select2.min.css',
                            '../assets/global/plugins/select2/css/select2-bootstrap.min.css',

                            '../assets/global/plugins/select2/js/select2.full.min.js',
                            
                            '../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',

                            '../assets/apps/scripts/todo-2.min.js',

                            'js/controllers/TodoController.js'  
                        ]                    
                    });
                }]
            }
        })

}]);

/* Init global settings and run the app */
HandtoursApp.run(["$rootScope", "settings", "$state","$http", function($rootScope, settings, $state,$http) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
    $rootScope.initialPageLength=10;

    $rootScope.header = {};
    $rootScope.config = {};

    $rootScope.refreshHeaderUser = function () {
        $http({
            method:"POST",
            url:"/info"
        }).success(function(res){
            $rootScope.header.user = res;
            $rootScope.header.user.hasAvatar = res.avatarUrl?true:false;
        })
    }

    $rootScope.refreshConfig = function () {
        $http({
            method:"POST",
            url:"/config"
        }).success(function(res){
            $rootScope.config = res;
        })
    }

    $rootScope.getHeaderUser = function () {
        return $rootScope.header.user;
    }

    $rootScope.refreshHeaderUser();
    $rootScope.refreshConfig();

    $rootScope.dataTable_language_cn = {
        "sLengthMenu": " _MENU_ 记录",
        "sZeroRecords": "对不起，查询不到任何相关数据",
        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
        "sInfoEmpty": "找不到相关数据",
        "sInfoFiltered": "数据表中共为 _MAX_ 条记录)",
        "sProcessing": "正在加载中...",
        "sSearch": "搜索",
        "oPaginate": {
        "sFirst": "第一页",
            "sPrevious": " 上一页 ",
            "sNext": " 下一页 ",
            "sLast": " 最后一页 "
    }
    }
}]);