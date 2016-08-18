<%--
  微名片
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style type="text/css">
    .red{
        color: red;
    }
    .price {
        color: #a94442;
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
            <a href="#">微名片</a>
        </li>
    </ul>

</div>


<div class="row" data-ng-controller="GuideController">

    <br/>


    <div class="col-md-12">

        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="caption font-dark">
                    <i class="fa fa-star-o"></i>&nbsp;
                    <span class="caption-subject bold uppercase"> 微名片列表</span>
                </div>
                <div class="tools">

                </div>
            </div>
            <div class="portlet-body">
                <table class="table table-striped table-bordered table-hover" style="text-align: center"  id="userCardTable">
                    <thead>
                        <tr  >
                            <%--<th> 编号</th>--%>
                            <th width="15%" style="text-align: center"> 手机</th>
                            <th width="15%" style="text-align: center"> 余额</th>
                            <th width="15%" style="text-align: center"> 状态</th>
                            <th width="30%" style="text-align: center"> 添加时间</th>
                            <th width="25%" style="text-align: center"> 操作</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>

    </div>
</div>


<div class="modal fade draggable-modal" id="modal_audit" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">确认审核</h4>
            </div>
            <form   ng-submit="forms.submit(forms.form.audit)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.update.lastUpdateTimeTs"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                    </button>
                    <button type="submit" class="btn green" >审 核</button>
                </div>
            </form>

        </div>
        <!-- /.modal-content -->
    </div>
</div>

<div class="modal fade draggable-modal" id="modal_withdrawHistory" tabindex="-1" role="basic"
     aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true"></button>
                <h4 class="modal-title">提现申请记录</h4>
            </div>

            <div class="modal-body">
                <table class="table table-striped table-bordered table-hover" style="text-align: center"  id="userCardWithdrawHistoryTable">
                    <thead>
                        <tr  style="background-color: #ddd">
                            <%--<th> 编号</th>--%>
                            <th width="15%" style="text-align: center"> 金额</th>
                            <th width="15%" style="text-align: center"> 银行卡</th>
                            <th width="15%" style="text-align: center"> 进度</th>
                            <th width="30%" style="text-align: center"> 创建时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="hisOne in forms.form.withdrawHistory">
                            <td>{{hisOne.mobile}}</td>
                            <td>{{hisOne.mobile}}</td>
                            <td>{{hisOne.mobile}}</td>
                            <td>{{hisOne.createTime}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form   ng-submit="forms.submit(forms.form.audit)" class="form-horizontal ">
                <%--<input type="hidden" ng-model="updateForm.mobile" />--%>
                <input type="hidden" ng-model="forms.form.update.lastUpdateTimeTs"/>

                <div class="modal-footer">
                    <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                    </button>
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