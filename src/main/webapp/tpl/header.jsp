<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<style type="text/css">
    .red{
        color: red;
    }
</style>

<!-- BEGIN HEADER INNER -->
<div class="page-header-inner">
    <!-- BEGIN LOGO -->
    <div class="page-logo">
        <a href="#/">
            <img src="{{settings.layoutPath}}/img/logo.png" alt="logo" style="width: 30px; margin-top:8px;" class="logo-default" />  </a>
        <div class="menu-toggler sidebar-toggler">
            <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
        </div>
    </div>
    <!-- END LOGO -->
    <!-- BEGIN HEADER SEARCH BOX -->
    <!-- DOC: Apply "search-form-expanded" right after the "search-form" class to have half expanded search box -->
    <%--<form class="search-form hide" action="#" method="GET">--%>
        <%--<div class="input-group">--%>
            <%--<input type="text" class="form-control" placeholder="Search..." name="query">--%>
            <%--<span class="input-group-btn">--%>
                <%--<a href="javascript:;" class="btn submit">--%>
                    <%--<i class="icon-magnifier"></i>--%>
                <%--</a>--%>
            <%--</span>--%>
        <%--</div>--%>
    <%--</form>--%>
    <!-- END HEADER SEARCH BOX -->
    <!-- BEGIN RESPONSIVE MENU TOGGLER -->
    <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
    <!-- END RESPONSIVE MENU TOGGLER -->
    <!-- BEGIN TOP NAVIGATION MENU -->
    <div class="top-menu">
        <ul class="nav navbar-nav pull-right">
            <!-- BEGIN NOTIFICATION DROPDOWN -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <%--<li class="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">--%>
                <%--<a href="#" class="dropdown-toggle" dropdown-menu-hover data-toggle="dropdown" data-close-others="true">--%>
                    <%--<i class="icon-bell"></i>--%>
                    <%--<span class="badge badge-default"> 7 </span>--%>
                <%--</a>--%>
                <%--<ul class="dropdown-menu">--%>
                    <%--<li class="external">--%>
                        <%--<h3>--%>
                            <%--<span class="bold">12 pending</span> notifications</h3>--%>
                        <%--<a href="#/profile/dashboard">view all</a>--%>
                    <%--</li>--%>
                    <%--<li>--%>
                        <%--<ul class="dropdown-menu-list scroller" style="height: 250px;" data-handle-color="#637283">--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">just now</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-success">--%>
                                            <%--<i class="fa fa-plus"></i>--%>
                                        <%--</span> New user registered. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">3 mins</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-danger">--%>
                                            <%--<i class="fa fa-bolt"></i>--%>
                                        <%--</span> Server #12 overloaded. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">10 mins</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-warning">--%>
                                            <%--<i class="fa fa-bell-o"></i>--%>
                                        <%--</span> Server #2 not responding. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">14 hrs</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-info">--%>
                                            <%--<i class="fa fa-bullhorn"></i>--%>
                                        <%--</span> Application error. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">2 days</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-danger">--%>
                                            <%--<i class="fa fa-bolt"></i>--%>
                                        <%--</span> Database overloaded 68%. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">3 days</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-danger">--%>
                                            <%--<i class="fa fa-bolt"></i>--%>
                                        <%--</span> A user IP blocked. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">4 days</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-warning">--%>
                                            <%--<i class="fa fa-bell-o"></i>--%>
                                        <%--</span> Storage Server #4 not responding dfdfdfd. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">5 days</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-info">--%>
                                            <%--<i class="fa fa-bullhorn"></i>--%>
                                        <%--</span> System Error. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="javascript:;">--%>
                                    <%--<span class="time">9 days</span>--%>
                                    <%--<span class="details">--%>
                                        <%--<span class="label label-sm label-icon label-danger">--%>
                                            <%--<i class="fa fa-bolt"></i>--%>
                                        <%--</span> Storage server failed. </span>--%>
                                <%--</a>--%>
                            <%--</li>--%>
                        <%--</ul>--%>
                    <%--</li>--%>
                <%--</ul>--%>
            <%--</li>--%>
            <!-- END NOTIFICATION DROPDOWN -->

            <!-- BEGIN USER LOGIN DROPDOWN -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-user">
                <a href="#" class="dropdown-toggle" dropdown-menu-hover data-toggle="dropdown" data-close-others="true">
                    <%--ng-if="header.user.hasAvatar=true"<img alt="" class="img-circle" src="{{settings.layoutPath}}/img/avatar.png" />--%>
                    <img  alt="" class="img-circle" ng-src="{{config.imgUrl}}/{{header.user.avatarUrl}}-icon" />
                    <span class="username username-hide-on-mobile">
                        {{header.user.name}}
                    </span>
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-default">
                    <li>
                        <%--<a data-toggle="modal" href="javascript:void(0)" onclick="$('#modal_header_update_user').modal('show');$('.modal-backdrop').remove();">--%>
                        <a data-toggle="modal" href="javascript:void(0)" data-ng-click="forms.open('update')">

                            <i class="icon-user"></i> 我的账号 </a>
                    </li>
                    <%--<li>--%>
                        <%--<a href="#">--%>
                            <%--<i class="icon-calendar"></i> 修改密码 </a>--%>
                    <%--</li>--%>

                    <li class="divider"> </li>
                    <%--<li>--%>
                        <%--<a href="#">--%>
                            <%--<i class="icon-lock"></i> Lock Screen </a>--%>
                    <%--</li>--%>
                    <li>
                        <a href="/logout">
                            <i class="icon-key"></i> 注销 </a>
                    </li>
                </ul>
            </li>
            <!-- END USER LOGIN DROPDOWN -->
            <!-- BEGIN QUICK SIDEBAR TOGGLER -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-quick-sidebar-toggler">
                <a href="/logout" class="dropdown-toggle">
                    <i class="icon-logout"></i>
                </a>
            </li>
            <!-- END QUICK SIDEBAR TOGGLER -->
        </ul>
    </div>
    <!-- END TOP NAVIGATION MENU -->
</div>
<!-- END HEADER INNER -->



<div class="modal " id="modal_header_update_user" tabindex="-1" role="basic">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">我的账号</h4>
            </div>

            <form  name="updateMyAccountForm" ng-submit="forms.submit(forms.form.update)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateMyAccountForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.update.lastUpdateTimeTs"/>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="col-md-4 control-label">姓名<span class="red">*</span></label>

                        <div class="col-md-5">

                            <input type="text"  name="name" ng-model="forms.form.update.name" class="form-control"/></div>

                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">手机<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input disabled type="text"  name="mobile" ng-model="forms.form.update.mobile" class="form-control"/>
                        </div>
                    </div>

                    <hr/>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">邮箱</label>

                        <div class="col-sm-5">
                            <input type="email"  name="email" ng-model="forms.form.update.email" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="updateMyAccountForm.email.$dirty && updateMyAccountForm.email.$invalid">
                            <span ng-show="updateMyAccountForm.email.$error.email">请输入正确的邮箱</span>
                          </span>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">头像</label>

                        <div class="col-sm-5">
                            <img id="myAvatar" alt="您还没有上传头像" class="img" ng-src="{{config.imgUrl}}/{{forms.form.update.avatarUrl}}-small" style="cursor: pointer;width: 122px;height:122px;" data-ng-click="changeAvatar()"/>
                            <img id="changedAvatar"  class="img"  style="display:none;cursor: pointer;width: 122px;height:122px;" data-ng-click="changeAvatar()"/>
                            <input type="hidden"  name="avatarKey" ng-model="forms.form.update.avatarKey" class="form-control"/>
                        </div>
                    </div>

                    <hr/>
                    <%--<div class="form-group">--%>
                        <%--<label class="col-sm-4 control-label">旧密码<span class="red">*</span></label>--%>

                        <%--<div class="col-sm-5">--%>
                            <%--<input type="password"  name="oldPassword" ng-model="forms.form.update.oldPassword" class="form-control"/>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">新密码<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="password"  name="password" ng-model="forms.form.update.password" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">确认新密码<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="password"  name="secondPassword" ng-model="forms.form.update.secondPassword" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                    </button>
                    <button type="submit" class="btn green" ng-disabled="updateMyAccountForm.$invalid">保 存</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<form action="/file/upload" id="uploadForm" enctype="multipart/form-data" method="post">
    <input type="file" style="display: none" name="file" accept="image/*"/>
</form>