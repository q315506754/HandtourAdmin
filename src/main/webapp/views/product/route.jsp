<%--
  产品管理 - 线路
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- BEGIN PAGE HEADER-->
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
            <a href="#">线路</a>
        </li>
    </ul>

</div>

<div class="row">
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
                    <form action="#" class="horizontal-form">
                        <div class="form-body">
                            <!--/row-->
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">搜索条件</label>

                                        <div class="col-md-3">
                                            <input type="text" placeholder="输入线路标题" class="form-control">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="text" placeholder="编号" class="form-control">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="text" placeholder="出港城市" class="form-control">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="text" placeholder="目的地" class="form-control">
                                        </div>
                                        <div class="col-md-1d5">
                                            <input type="text" placeholder="天数" class="form-control">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">供应商</label>

                                        <div class="col-md-3">
                                            <input type="text" placeholder="autoComplete..." class="form-control">
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">产品状态</label>

                                        <div class="col-md-3">
                                            <div class="radio-list">
                                                <label class="radio-inline">
                                                    <input type="radio" name="optionsRadios2" value="all" checked/> 所有 </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="optionsRadios2" value="option1" /> 上架 </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="optionsRadios2" value="option2" /> 下架 </label>                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <div class="form-group">
                                        <label class="control-label col-md-1d5">更新时间段</label>

                                        <div class="col-md-3">
                                            <div class="input-group" id="defaultrange">
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
                                        <label class="control-label col-md-1d5">分类</label>

                                        <div class="col-md-3">
                                            <select class="form-control" data-placeholder="Choose a Category" tabindex="1">
                                                <option value="Category 1">Category 1</option>
                                                <option value="Category 2">Category 2</option>
                                                <option value="Category 3">Category 5</option>
                                                <option value="Category 4">Category 4</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3">
                                        <button type="submit" class="btn green">
                                            <i class="fa fa-search"></i> 筛查
                                        </button>
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
                    <i class="fa fa-plane"></i>&nbsp;
                    <span class="caption-subject bold uppercase"> 路线列表</span>
                </div>
                <div class="tools">

                </div>
            </div>
            <div class="portlet-body">
                <table class="table table-striped table-bordered table-hover" id="routeTable">
                    <thead>
                    <tr>
                        <th> 编号 </th>
                        <th> 标题 </th>
                        <th> 供应商 </th>
                        <th> 分类 </th>
                        <th> 状态 </th>
                        <th> 最后更新 </th>
                        <th> 操作 </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 4.0 </td>
                        <td> Win 95+ </td>
                        <td> 4 </td>
                        <td> X </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>

                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 4.0 </td>
                        <td> Win 95+ </td>
                        <td> 4 </td>
                        <td> X </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>

                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 4.0 </td>
                        <td> Win 95+ </td>
                        <td> 4 </td>
                        <td> X </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>

                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 4.0 </td>
                        <td> Win 95+ </td>
                        <td> 4 </td>
                        <td> X </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>

                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 4.0 </td>
                        <td> Win 95+ </td>
                        <td> 4 </td>
                        <td> X </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>
                    <tr>
                        <td> Trident </td>
                        <td> Internet Explorer 5.0 </td>
                        <td> Win 95+ </td>
                        <td> 5 </td>
                        <td> C </td>
                        <td> 4 </td>
                        <td> X </td>
                    </tr>


                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>
<!-- END MAIN CONTENT -->
<!-- BEGIN MAIN JS -->
<script>

</script>
<!-- END MAIN JS -->