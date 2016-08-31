<%--
  订单管理
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<style type="text/css">
    .tableTitle{
       color: #666 !important;
       padding: 9px !important;
        border-radius: 0 !important;
        background-color: #eee !important;
        border-collapse: collapse !important;
        border-spacing: 0 !important;
        border:0px !important;
    }
    .table{
        border:0px !important;
    }
    .table tr{
        border:0px solid #e7ecf1;
    }
    .table tr.bottomTr{
        border-bottom-width: 10px  !important;
    }
    .table tr.topTr{
        border-width: 1px 1px 0px 1px !important;
    }
    .table tr td{
        border-width:0px 0px 2px 0px !important;
        /*border-bottom-width: 1px  !important;*/
    }

    .span.orderId{
        color: black;
    }
    .span.split{
        margin-left: 7px;
        margin-right: 7px;
    }
    .operation{
        text-align: right
    }
    .span.productName{
        color: #2b7dbc;
    }
    .span.danger{
        color: #a94442;
    }
    .span.default{
        color: #777;
    }
    .span.success{
        color:#3c763d;
    }
    .lbl.orderId{
        margin-left: 50px;
    }
</style>
<!-- BEGIN PAGE HEADER-->
<div class="page-bar">
    <ul class="page-breadcrumb">
        <li>
            <a href="#/dashboard.html">主页</a>
            <i class="fa fa-circle"></i>
        </li>

        <li>
            <a href="#">订单管理</a>
        </li>
    </ul>

</div>


<div class="row" data-ng-controller="OrderController">

    <br/>


    <div class="col-md-11">
        <div class="tabbable-line boxless tabbable-reversed">

            <div class="portlet light bordered">
                <%--<div class="portlet-title">--%>
                <%--<div class="caption">--%>
                <%--<i class="icon-equalizer font-blue-hoki"></i>--%>
                <%--<span class="caption-subject font-blue-hoki bold uppercase">线路查询</span>--%>
                <%--<span class="caption-helper"></span>--%>
                <%--</div>--%>
                <%--<div class="tools">--%>
                <%--<a href="" class="collapse"> </a>--%>
                <%--&lt;%&ndash;<a href="#portlet-config" data-toggle="modal" class="config"> </a>&ndash;%&gt;--%>
                <%--&lt;%&ndash;<a href="" class="reload"> </a>&ndash;%&gt;--%>
                <%--&lt;%&ndash;<a href="" class="remove"> </a>&ndash;%&gt;--%>
                <%--</div>--%>
                <%--</div>--%>
                <div class="portlet-body form">
                    <!-- BEGIN FORM-->
                    <form  class="horizontal-form"  ng-submit="forms.submit(forms.form.discount)" >
                        <div class="form-body">
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">搜索条件</label>

                                        <div class="col-md-3">
                                            <input type="text" placeholder="订单号" class="form-control">
                                        </div>
                                        <div class="col-md-3">
                                            <input type="text" placeholder="微名片" class="form-control">
                                        </div>
                                        <%--<div class="col-md-2">--%>
                                        <%--<input type="text" placeholder="出港城市" class="form-control">--%>
                                        <%--</div>--%>
                                        <%--<div class="col-md-2">--%>
                                        <%--<input type="text" placeholder="目的地" class="form-control">--%>
                                        <%--</div>--%>
                                        <%--<div class="col-md-1d5">--%>
                                        <%--<input type="text" placeholder="天数" class="form-control">--%>
                                        <%--</div>--%>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">联系人</label>
                                        <div class="col-md-3">
                                            <input type="text" placeholder="姓名" class="form-control">
                                        </div>
                                        <div class="col-md-3">
                                            <input type="text" placeholder="手机" class="form-control">
                                        </div>
                                        <div class="col-md-3">
                                            <input type="text" placeholder="邮箱" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <%--<div class="row">--%>
                                <%--<div class="col-md-10">--%>
                                    <%--<div class="form-group">--%>
                                        <%--<label class="control-label col-md-1d5">联系人</label>--%>
                                        <%--<div class="col-md-3">--%>
                                            <%--<input type="text" placeholder="autoComplete..." class="form-control">--%>
                                        <%--</div>--%>
                                    <%--</div>--%>
                                <%--</div>--%>
                            <%--</div>--%>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">产品状态</label>

                                        <%--<div class="col-md-3">--%>
                                            <%--<div class="radio-list">--%>
                                                <%--<label class="radio-inline">--%>
                                                    <%--<input type="radio" name="optionsRadios2" value="all" checked/> 所有--%>
                                                <%--</label>--%>
                                                <%--<label class="radio-inline">--%>
                                                    <%--<input type="radio" name="optionsRadios2" value="option1"/> 上架--%>
                                                <%--</label>--%>
                                                <%--<label class="radio-inline">--%>
                                                    <%--<input type="radio" name="optionsRadios2" value="option2"/> 下架--%>
                                                <%--</label>--%>
                                            <%--</div>--%>
                                        <%--</div>--%>

                                        <div class="col-md-3">
                                            <select tabindex="1" data-placeholder="Choose a Category" class="form-control">
                                                <option value="Category 1">Category 1</option>
                                                <option value="Category 2">Category 2</option>
                                                <option value="Category 3">Category 5</option>
                                                <option value="Category 4">Category 4</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="checkbox-list">
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" />已结算
                                                </label>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" />已返佣
                                                </label>
                                                <label class="checkbox-inline">
                                                    <input type="checkbox" />已付定金
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">出团时间</label>

                                        <div class="col-md-3">
                                            <div class="input-group dateTimeRange">
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                            <button class="btn default date-range-toggle" type="button">
                                                                <i class="fa fa-calendar"></i>
                                                            </button>
                                                        </span>
                                            </div>
                                        </div>

                                        <label class="control-label col-md-1d5">订单时间</label>

                                        <div class="col-md-3">
                                            <div class="input-group dateTimeRange" >
                                                <input type="text" class="form-control">
                                                <span class="input-group-btn">
                                                            <button class="btn default date-range-toggle" type="button">
                                                                <i class="fa fa-calendar"></i>
                                                            </button>
                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <%--<label class="control-label col-md-1d5">分类</label>--%>

                                        <%--<div class="col-md-3">--%>
                                            <%--<select class="form-control" data-placeholder="Choose a Category"--%>
                                                    <%--tabindex="1">--%>
                                                <%--<option value="Category 1">Category 1</option>--%>
                                                <%--<option value="Category 2">Category 2</option>--%>
                                                <%--<option value="Category 3">Category 5</option>--%>
                                                <%--<option value="Category 4">Category 4</option>--%>
                                            <%--</select>--%>
                                        <%--</div>--%>
                                        <div class="col-md-6">
                                            <button type="submit" class="btn green">
                                                <i class="fa fa-search"></i> 筛查
                                            </button>
                                            <input type="reset" class="btn " value="重置"/>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <%--<div class="form-actions left">--%>

                        <%--<button type="submit" class="btn green">--%>
                        <%--<i class="fa fa-search"></i> 筛查--%>
                        <%--</button>--%>
                        <%--</div>--%>
                    </form>
                    <!-- END FORM-->
                </div>
            </div>


        </div>
    </div>


    <div class="col-md-12">

        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="caption font-dark">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <span class="caption-subject bold uppercase"> 订单列表</span>
                </div>
                <div class="tools">

                </div>
            </div>


            <div class="portlet-body">
                <table class="table table-striped table-bordered table-hover" style="text-align: left"
                       id="userCardTable">
                    <thead>
                        <tr class="tableTitle">
                            <%--<th> 编号</th>--%>
                            <th width="30%" style="text-align: left"> 线路</th>
                            <th width="5%" style="text-align: left"> 人数</th>
                            <th width="15%" style="text-align: left"> 联系人</th>
                            <th width="15%" style="text-align: left"> 金额</th>
                            <th width="5%" style="text-align: left"> 状态</th>
                            <th width="5%" style="text-align: left"> 标记</th>
                            <th width="35%" style="text-align: right"> 操作</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

    </div>
</div>
<!-- END MAIN CONTENT -->

<div class="modal fade draggable-modal" id="modal_groupPerson" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">出行人信息</h4>
            </div>

            <div class="modal-body">
                <table class="table table-striped table-bordered table-hover" style="text-align: center" >
                    <thead>
                    <tr  style="background-color: #ddd">
                        <%--<th> 编号</th>--%>
                        <th width="20%" style="text-align: center"> 序号</th>
                        <th width="30%" style="text-align: center"> 姓名</th>
                        <th width="50%" style="text-align: center"> 手机</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="hisOne in forms.form.groupPerson.groupPersons">
                        <td>{{$index + 1}}</td>
                        <td>{{hisOne.name}}</td>
                        <td>{{hisOne.mobile}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <form   ng-submit="forms.submit(forms.form.groupPerson)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.groupPerson.lastUpdateTimeTs"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                    </button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>


<div class="modal fade bs-modal-sm in" id="modal_audit" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">修改订单状态</h4>
            </div>

            <div class="modal-body ">
                确定要把订单号<span class="span split default">{{forms.form.audit.id}}</span>变为<span class="span danger">已处理</span>状态吗?
            </div>

            <form   ng-submit="forms.submit(forms.form.audit)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.audit.lastUpdateTimeTs"/>
                <input type="hidden" ng-model="forms.form.audit.id"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn green">确定</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<div class="modal fade bs-modal-sm in" id="modal_cancel" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">修改订单状态</h4>
            </div>

            <div class="modal-body ">
                确定要把订单号<span class="span split default">{{forms.form.cancel.id}}</span>变为<span class="span danger">已取消</span>状态吗?
            </div>

            <form   ng-submit="forms.submit(forms.form.cancel)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.cancel.lastUpdateTimeTs"/>
                <input type="hidden" ng-model="forms.form.cancel.id"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn green">确定</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<div class="modal fade bs-modal-sm in" id="modal_went" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">修改订单状态</h4>
            </div>

            <div class="modal-body ">
                确定要把订单号<span class="span split default">{{forms.form.went.id}}</span>变为<span class="span danger">已出行</span>状态吗?
            </div>

            <form   ng-submit="forms.submit(forms.form.went)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.went.lastUpdateTimeTs"/>
                <input type="hidden" ng-model="forms.form.went.id"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn green">确定</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<div class="modal fade in" id="modal_settle" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">修改订单标记</h4>
            </div>

            <div class="modal-body ">
                确定要把订单号<span class="span split default">{{forms.form.settle.id}}</span>的<span class="span danger">未结算</span>标记变为<span class="span success">已结算</span>吗?
            </div>

            <form   ng-submit="forms.submit(forms.form.settle)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.settle.lastUpdateTimeTs"/>
                <input type="hidden" ng-model="forms.form.settle.id"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn green">确定</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<div class="modal fade in" id="modal_discount" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">修改订单标记</h4>
            </div>

            <div class="modal-body ">
                确定要把订单号<span class="span split default">{{forms.form.discount.id}}</span>的<span class="span danger">未返佣</span>标记变为<span class="span success">已返佣</span>吗?
            </div>

            <form   ng-submit="forms.submit(forms.form.discount)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.discount.lastUpdateTimeTs"/>
                <input type="hidden" ng-model="forms.form.discount.id"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">关闭</button>
                    <button type="submit" class="btn green">确定</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>
<!-- BEGIN MAIN JS -->
<script>

</script>
<!-- END MAIN JS -->