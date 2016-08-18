/**
 * Created by april on 2016/7/18.
 */
//初始化datatable
var initCardUserTable = function (_scope) {
    var table = $('#userCardTable');

    var injectModel = function (modalId,params) {
        for (var i in params){
            $('#'+modalId+' input[ng-model$="'+i+'"]').val(params[i]);
            $('#'+modalId+' input[name="'+i+'"]').val(params[i]);
        }
    }

    var getModel = function (modalId) {
        return $('#'+modalId);
    }
    var getModelByNgName = function (modalId,name) {
        return $('#'+modalId).find('input[ng-model$="'+name+'"]');
    }
    var oTable = table.dataTable({
        "ajax": {
            "url": "/card/query",
            "type": "POST",
            "dataSrc":"dataList"
            },
        columns: [
            { data: 'mobile' ,"searchable": true},
            { data: 'balanceStr' ,"searchable": true ,"render": function ( data, type, full, meta ) {
                // console.log(arguments);
                return "<span class='price'>￥&nbsp"+full.balanceStr+"</span>";
            }},
            { data: 'statusStr' ,"searchable": true ,"render": function ( data, type, full, meta ) {
                // console.log(arguments);
                if (full.status===1){
                    return '<span class="label label-success">'+full.statusStr+'</span>';
                }else {
                    return '<span class="label label-danger">'+full.statusStr+'</span>';
                }
            }},
            { data: 'createTime' ,"searchable": true},
            { name:"opers",defaultContent:"","render": function ( data, type, full, meta ) {
                // console.log(arguments);
                var auditHref = $("<a class='auditHref'>审核</a>");

                var delHref = $("<a class='deleteHref'>删除</a>");

                var withdrawHisHref = $("<a class='withdrawHisHref'>提现申请</a>");

                var div = $("<div></div>");
                if (full.status != 1){
                    div.append(auditHref).append("|");
                }
                div.append(delHref).append("|").append(withdrawHisHref);
                return div.html();
            },createdCell: function (td, cellData, rowData, row, col) {
                // console.log(arguments);
                $(td).find(".auditHref").click(function () {
                    // console.log('cccc');
                    _scope.forms.open('audit',{mobile:rowData.mobile,lastUpdateTimeTs:rowData.lastUpdateTimeTs});
                });
                $(td).find(".deleteHref").click(function () {
                    _scope.forms.open('delete',rowData);
                });
                $(td).find(".withdrawHisHref").click(function () {
                    _scope.forms.open('withdrawHistory',rowData);
                });

            }
            },
        ],
        // Internationalisation. For more info refer to http://datatables.net/manual/i18n
        //"language": {
        //    "aria": {
        //        "sortAscending": ": activate to sort column ascending",
        //        "sortDescending": ": activate to sort column descending"
        //    },
        //    "emptyTable": "No data available in table",
        //    "info": "Showing _START_ to _END_ of _TOTAL_ entries",
        //    "infoEmpty": "No entries found",
        //    "infoFiltered": "(filtered1 from _MAX_ total entries)",
        //    "lengthMenu": "_MENU_ entries",
        //    "search": "Search:",
        //    "zeroRecords": "No matching records found"
        //},
        "searching": true,//搜索栏

        // Or you can use remote translation file
        "language": _scope.dataTable_language_cn,

        buttons: [
            {
                text: '刷新数据',
                className: 'btn yellow btn-outline',
                action: function ( e, dt, node, config ) {
                    _scope.forms.refreshData();

                    toastr["success"]("数据已刷新");
                }
            },
            // { extend: 'print', className: 'btn dark btn-outline' },
            { extend: 'copy', className: 'btn red btn-outline' },
            // { extend: 'pdf', className: 'btn green btn-outline' },
            { extend: 'excel', className: 'btn yellow btn-outline ' },
            // { extend: 'csv', className: 'btn purple btn-outline ' },
            { extend: 'colvis', className: 'btn dark btn-outline', text: 'Columns'}
        ],

        // setup responsive extension: http://datatables.net/extensions/responsive/
        responsive: true,

        //"ordering": false, disable column ordering
        //"paging": false, disable pagination

        "order": [
            [3, 'desc']
        ],

        "lengthMenu": [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "All"] // change per page values here
        ],
        // set the initial value
        "pageLength": _scope.initialPageLength,

        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-2 col-sm-12'f><'col-md-10 col-sm-12'l>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
    });

    return oTable;
}
