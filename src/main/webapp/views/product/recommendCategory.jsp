<%--
  产品管理 - 推荐位
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="page-bar">
    <ul class="page-breadcrumb">
        <li>
            <a href="#/dashboard.html">主页</a>
            <i class="fa fa-circle"></i>
        </li>
        <li>
            <a href="#">产品管理</a>
            <i class="fa fa-circle"></i>
        </li>
        <li>
            <a href="#">推荐位</a>
        </li>
    </ul>

</div>


<%--<a class="btn red btn-outline sbold" data-target="#draggable_ddd" data-toggle="modal" href="#"> View Demo </a>--%>
<%--<div class="row" >--%>
<div class="row" data-ng-controller="RecommendCategoryController">

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
                    <div class="modal fade draggable-modal" id="draggable_ddd" tabindex="-1" role="basic"
                         aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"
                                            aria-hidden="true"></button>
                                    <h4 class="modal-title">新建推荐位</h4>
                                </div>
                                <form action="#" ng-submit="submitForm(rc)" class="form-horizontal ">
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label class="col-md-4 control-label">名称</label>

                                            <div class="col-md-5">

                                                <input type="text" ng-model="rc.name" class="form-control"/></div>

                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">位置</label>

                                            <div class="col-sm-5">

                                                <input type="text" ng-model="rc.seat" class="form-control"/></div>

                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">隐藏</label>

                                            <div class="col-sm-5">

                                                <%--<input type="text"  class="form-control"/>--%>
                                                <input type="checkbox" ng-model="rc.hide" data-bs-switch checked class="make-switch" data-size="normal">
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn dark btn-outline" data-dismiss="modal">取 消
                                        </button>
                                        <button type="submit" class="btn green">保 存</button>
                                    </div>
                                </form>

                            </div>
                            <!-- /.modal-content -->
                        </div>
                        <!-- /.modal-dialog -->
                    </div>
                    <!-- BEGIN FORM-->
                    <form action="#" class="horizontal-form">
                        <div class="form-body">
                            <!--/row-->

                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <div class="col-md-4">
                                            <div class="input-icon">
                                                <i class="fa fa-search"></i>
                                                <input type="text" placeholder="请输入搜索关键字" class="form-control"></div>
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
                    <span class="caption-subject bold uppercase"> 推荐位列表</span>
                </div>
                <div class="tools">

                </div>
            </div>
            <div class="portlet-body">
                <table class="table table-striped table-bordered table-hover" id="recommendCategoryTable">
                    <thead>
                    <tr>
                        <th> 编号</th>
                        <th> 标题</th>
                        <th> 状态</th>
                        <th> 位置</th>
                        <th> 操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>
                    <tr>
                        <td> Trident</td>
                        <td> Internet Explorer 4.0</td>
                        <td> Win 95+</td>
                        <td> 4</td>
                        <td> X</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>
<!-- END MAIN CONTENT -->
<!-- BEGIN MAIN JS -->
<script type="text/javascript">

</script>
<!-- END MAIN JS -->