<%--
  用户管理
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div class="page-bar">
  <ul class="page-breadcrumb">
    <li>
      <a href="#/dashboard.html">主页</a>
      <i class="fa fa-circle"></i>
    </li>

    <li>
      <a href="#">用户管理</a>
    </li>
  </ul>

</div>

<div class="row" data-ng-controller="UserController">

  <br/>


  <div class="col-md-12">

    <div class="portlet light bordered">
      <div class="portlet-title">
        <div class="caption font-dark">
          <i class="fa fa-star-o"></i>&nbsp;
          <span class="caption-subject bold uppercase"> 用户列表</span>
        </div>
        <div class="tools">

        </div>
      </div>
      <div class="portlet-body">
        <table class="table table-striped table-bordered table-hover" style="text-align: center" id="userTable">
          <thead>
          <tr  >
            <%--<th> 编号</th>--%>
            <th width="15%" style="text-align: center"> 姓名</th>
            <th width="15%" style="text-align: center"> 手机</th>
            <th width="25%" style="text-align: center"> 邮箱</th>
            <th width="15%" style="text-align: center"> 状态</th>
            <th width="15%" style="text-align: center"> 添加时间</th>
            <th width="15%" style="text-align: center"> 操作</th>
          </tr>
          </thead>
        </table>
      </div>
    </div>

  </div>
</div>


<div class="modal fade draggable-modal" id="modal_create" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">新建用户</h4>
            </div>
            <form  name="createForm" ng-submit="forms.submit(forms.form.create)" class="form-horizontal" novalidate>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="col-md-4 control-label">姓名<span class="red">*</span></label>

                        <div class="col-md-5">
                            <input type="text" name="name" ng-model="forms.form.create.name" class="form-control" ng-minlength="2" ng-maxlength="10" required/>
                        </div>

                    </div>

                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="createForm.name.$dirty && createForm.name.$invalid">
                            <span ng-show="createForm.name.$error.required">请输入用户名</span>
                            <span ng-show="createForm.name.$error.minlength">用户名应该在2~10个之间</span>
                            <span ng-show="createForm.name.$error.maxlength">用户名应该在2~10个之间</span>
                          </span>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">手机<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="number" name="mobile" ng-model="forms.form.create.mobile" class="form-control" required/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="createForm.mobile.$dirty && createForm.mobile.$invalid">
                            <span ng-show="createForm.mobile.$error.required">请输入手机号</span>
                            <span ng-show="createForm.mobile.$error.number">手机号应该为数字</span>
                          </span>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">邮箱</label>

                        <div class="col-sm-5">
                            <input type="email"  name="email" ng-model="forms.form.create.email" class="form-control"/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="createForm.email.$dirty && createForm.email.$invalid">
                            <span ng-show="createForm.email.$error.email">请输入正确的邮箱</span>
                          </span>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">启用<span class="red">*</span></label>

                        <div class="col-sm-5">

                            <%--<input type="text"  class="form-control"/>--%>
                            <input type="checkbox" ng-model="forms.form.create.enable" data-bs-switch checked class="make-switch" data-size="normal" />
                            </p>
                        </div>
                    </div>

                    <hr/>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">密码<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="password"  name="password" ng-model="forms.form.create.password" class="form-control" required/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="createForm.password.$dirty && createForm.password.$invalid">
                            <span ng-show="createForm.password.$error.required">请输入密码</span>
                          </span>
                    </div>


                    <div class="form-group">
                        <label class="col-sm-4 control-label">确认密码<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="password"  name="secondPassword" ng-model="forms.form.create.secondPassword" class="form-control" required/>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="createForm.secondPassword.$dirty && createForm.secondPassword.$invalid">
                            <span ng-show="createForm.secondPassword.$error.required">请再次输入密码</span>
                          </span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                    </button>
                    <button type="submit" class="btn green" ng-disabled="createForm.$pristine || createForm.$invalid">保 存</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<div class="modal fade draggable-modal" id="modal_edit" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">编辑用户</h4>
            </div>
            <form  name="updateForm" ng-submit="forms.submit(forms.form.update)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
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
                    <div class="form-group">
                        <label class="col-sm-4 control-label">邮箱</label>

                        <div class="col-sm-5">
                            <input type="email"  name="email" ng-model="forms.form.update.email" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-4"></div>
                        <span class="col-md-5" style="color:red" ng-show="updateForm.email.$dirty && updateForm.email.$invalid">
                            <span ng-show="updateForm.email.$error.email">请输入正确的邮箱</span>
                          </span>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">启用<span class="red">*</span></label>

                        <div class="col-sm-5">

                            <%--<input type="text"  class="form-control"/>--%>
                            <input type="checkbox" ng-model="forms.form.update.enable" data-bs-switch checked class="make-switch" data-size="normal">
                            </p>
                        </div>
                    </div>

                    <hr/>

                    <div class="form-group">
                        <label class="col-sm-4 control-label">密码<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="password"  name="password" ng-model="forms.form.update.password" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-4 control-label">确认密码<span class="red">*</span></label>

                        <div class="col-sm-5">
                            <input type="password"  name="secondPassword" ng-model="forms.form.update.secondPassword" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                    </button>
                    <button type="submit" class="btn green" ng-disabled="updateForm.$pristine || updateForm.$invalid">保 存</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>


<!-- END MAIN CONTENT -->
<!-- BEGIN MAIN JS -->
<script>

</script>
<!-- END MAIN JS -->