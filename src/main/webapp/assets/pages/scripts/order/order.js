/**
 * Created by april on 2016/7/18.
 */
//初始化datatable
var initOrderTable = function (_scope) {
    var table = $('#userCardTable');

    var injectModel = function (modalId, params) {
        for (var i in params) {
            $('#' + modalId + ' input[ng-model$="' + i + '"]').val(params[i]);
            $('#' + modalId + ' input[name="' + i + '"]').val(params[i]);
        }
    }

    var getModel = function (modalId) {
        return $('#' + modalId);
    }
    var getModelByNgName = function (modalId, name) {
        return $('#' + modalId).find('input[ng-model$="' + name + '"]');
    }
    var oTable = table.dataTable({
        "ajax": {
            "url": "/order/query",
            "type": "POST",
            data: {
                aa: function () {
                    return new Date().toTimeString();
                }
            },
            // "dataSrc": "dataList",
            dataFilter: function (data) {
                var json = jQuery.parseJSON(data);
                json.recordsTotal = json.totalRecords;
                json.recordsFiltered = json.totalRecords;
                json.data = json.dataList;
                return JSON.stringify(json);
            }
        },
        columns: [
            {
                data: 'productName', "searchable": true, "render": function (data, type, full, meta) {
                // console.log(arguments);
                var ret = "<span class='span productName'>" + full.productName + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<label>团号：</label><span>" + full.groupId + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<label>出团：</label><span>" + full.startTimeStr + "[" + full.startDateOfWeek + "]</span>";
                return ret;
            }
            },
            {
                data: 'groupPersons', "searchable": true, "render": function (data, type, full, meta) {
                // console.log(arguments);
                return "<span class='groupPerson'><a href='javascript:void(0)'>" + full.groupPersons.length + "</a></span>";
            }, "createdCell": function (td, cellData, rowData, row, col) {
                // console.log(rowData);
                $(td).find(".groupPerson").click(function () {
                    _scope.forms.open('groupPerson', rowData);
                });
            }
            },
            {
                data: 'contactName', "searchable": true, "render": function (data, type, full, meta) {
                // console.log(arguments);
                var ret = "<span>" + full.contactName + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<label></label><span>" + full.contactMobile + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<label></label><span>" + full.remark + "</span>";
                return ret;
            }
            },
            {
                data: 'earnest', "searchable": true, "render": function (data, type, full, meta) {
                // console.log(arguments);
                var ret = "";
                ret = ret + "<label>订单金额:</label><span class='span danger'>￥" + full.totalPriceStr + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<label>结算金额:</label><span class='span danger'>￥" + full.settlePriceStr + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<label>返佣金额:</label><span class='span danger'>￥" + full.discountPriceStr + "</span>";
                ret = ret + "<br/>";
                ret = ret + "<br/>";

                if (full.earnest.status == 0) {
                    ret = ret + "<label>"+full.earnest.statusStr+":</label><span class='span danger'>￥" + full.earnest.priceStr + "</span>";
                }
                else if (full.earnest.status == 1) {
                    ret = ret + "<label>"+full.earnest.statusStr+":</label><span class='span success'>￥" + full.earnest.priceStr + "</span>";
                }

                return ret;
            }
            },
            {data: 'statusStr', "searchable": true,"render": function (data, type, full, meta) {
                // console.log(arguments);
                var ret = "";
                var spanCls;
                switch (full.status) {
                    case 0:spanCls = "danger";break;
                    case 1:spanCls = "success";break;
                    case 2:spanCls = "default";break;
                    case 3:spanCls = "default";break;
                }
                ret = ret + "<span  class='span "+spanCls+"'>" + full.statusStr + "</span>";
                return ret;
            }
            },
            {data: 'statusStr', "searchable": true, "render": function (data, type, full, meta) {
                // console.log(arguments);
                var ret = "";
                if (full.settlementStatus == 0) {
                    ret = ret + "<span  class='span default'>" + full.settlementStatusStr + "</span>";
                }
                else if (full.settlementStatus == 1) {
                    ret = ret + "<span  class='span success'>" + full.settlementStatusStr + "</span>";
                }
                ret = ret + "<br/>";
                if (full.discountStatus == 0) {
                    ret = ret + "<span  class='span default'>" + full.discountStatusStr + "</span>";
                }
                else if (full.discountStatus == 1) {
                    ret = ret + "<span  class='span success'>" + full.discountStatusStr + "</span>";
                }
                return ret;
            }
            },
            {
                name: "opers", defaultContent: "", "render": function (data, type, full, meta) {
                // console.log(arguments);
                var auditHref = $("<a class='auditHref'>审核</a>");

                var cancelHref = $("<a class='cancelHref'>取消</a>");

                var settleHref = full.settlementStatus == 0?$("<a class='settleHref'>结算</a>"):null;
                var discountHref =  full.discountStatus == 0?$("<a class='discountHref'>返佣</a>"):null;

                var wentHref = $("<a class='wentHref'>出行</a>");

                var split = $("<span class='span split'>|</span>");//prototype

                var div = $("<div></div>");

                var spanArr = new Array();
                switch (full.status) {
                    case 0:spanArr.push(auditHref,cancelHref);break;//未处理
                    case 1:spanArr.push(settleHref,discountHref,wentHref,cancelHref);break;//已处理
                    case 2:break;//已取消
                    case 3:spanArr.push(settleHref,discountHref);;break;//已出行
                }

                var hasPrev = false;
                for(var i=0;i<spanArr.length;i++) {
                    var cur  = spanArr[i];
                    if (cur != null){
                        if(hasPrev){
                            div.append(split.clone());
                        }
                        div.append(cur);
                        hasPrev = true;
                    }
                }

                return div.html();
            }, createdCell: function (td, cellData, rowData, row, col) {
                // console.log(arguments);
                var pData = {orderId: rowData.orderId, lastUpdateTimeTs: rowData.lastUpdateTimeTs};

                var bind = function (cls,mode) {
                    $(td).find("."+cls).click(function () {
                        _scope.forms.open(mode, pData);
                    });
                }

                bind("auditHref","audit");
                bind("cancelHref","cancel");
                bind("settleHref","settle");
                bind("discountHref","discount");
                bind("wentHref","went");


                $(td).addClass("operation");
            }
            },
        ],
        "searching": false,//搜索栏
        "serverSide": true,
        // "deferRender": true,
        // Or you can use remote translation file
        "language": _scope.dataTable_language_cn,
        "createdRow": function (row, data, dataIndex) {
            $(row).addClass("eachOrderRow").addClass("bottomTr");

        },
        "rowCallback": function (row, data, dataIndex) {

        },
        "initComplete": function (settings, json) {
        },
        "drawCallback": function (settings) {
            var api = this.api();


            for (var i = 0; i < api.rows().nodes().length; i++) {
                var tr = api.rows().nodes()[i];
                var $tr = $(tr);
                var data = api.row(tr).data();
                // console.log(data);


                var $ntr = $('<tr class="tableTitle topTr" style=""></tr>');

                var $td1 = $('<td colspan="2"></td>');
                $td1.append("<span>" + data.createTime + "</span>");
                $td1.append("<label class='lbl orderId'>订单号：</label><span class='span orderId'>" + data.orderId + "</span>");
                $ntr.append($td1);

                var $td2 = $('<td colspan="1"></td>');
                $td2.append("<label>微名片：</label><span>" + data.cardUser + "</span>");
                $ntr.append($td2);

                $ntr.append('<td colspan="3"></td>');

                var $td4 = $('<td colspan="1" class="operation"></td>');
                $td4.append("<span >" + data.providerName + "</span>");
                $ntr.append($td4);

                $(tr).before('<tr class=""><td  colspan="7"></td></tr>').before($ntr);
            }
            // $(".eachOrderRow").before('<tr><td>aaaa</td><td>aaaa</td><td>aaaa</td><td>aaaa</td><td>aaaa</td></tr>');
        },
        buttons: [
            {
                text: '刷新数据',
                className: 'btn yellow btn-outline',
                action: function (e, dt, node, config) {
                    _scope.forms.refreshData();

                    toastr["success"]("数据已刷新");
                }
            },
            // { extend: 'print', className: 'btn dark btn-outline' },
            {extend: 'copy', className: 'btn red btn-outline'},
            // { extend: 'pdf', className: 'btn green btn-outline' },
            {extend: 'excel', className: 'btn yellow btn-outline '},
            // { extend: 'csv', className: 'btn purple btn-outline ' },
            {extend: 'colvis', className: 'btn dark btn-outline', text: 'Columns'}
        ],

        // setup responsive extension: http://datatables.net/extensions/responsive/
        responsive: true,

        "ordering": false, //disable column ordering
        //"paging": false, disable pagination
        //
        // "order": [
        //     [3, 'desc']
        // ],

        "lengthMenu": [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "All"] // change per page values here
        ],
        // set the initial value
        "pageLength": _scope.initialPageLength,

        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default
        // datatable layout setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical
        // scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). So when dropdowns
        // used the scrollable div should be removed. "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6
        // col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
    });

    // var api = oTable.api();
    // api.on( 'draw.dt', function (e,settings) {
    //     console.log(arguments);
    //     console.log( 'Redraw occurred at: '+new Date().getTime() );
    // } );
    return oTable;
}
