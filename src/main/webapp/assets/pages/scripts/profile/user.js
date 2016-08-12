/**
 * Created by april on 2016/7/18.
 */
//初始化datatable
var initUserTable = function (_scope) {
    var table = $('#userTable');

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
            "url": "/user/query",
            "type": "POST",
            "dataSrc":"dataList"
            },
        columns: [
            { data: 'name' ,"searchable": true},
            { data: 'mobile' ,"searchable": true },
            { data: 'email' ,"searchable": true },
            { data: 'enable'  ,"searchable": true,"render": function ( data, type, full, meta ) {
                    return data?"<span class='label label-success'>已启用</span>":"<span class='label label-default'>已禁用</span>";
                }
            },
            { data: 'createTime'  ,"searchable": false},
            { name:"opers",defaultContent:"","render": function ( data, type, full, meta ) {
                // console.log(arguments);
                var upHref = $("<a class='editHref'>编辑</a>");
                var delHref = $("<a class='deleteHref'>删除</a>");
                var div = $("<div></div>");
                return div.append(upHref).append("|").append(delHref).html();
            },createdCell: function (td, cellData, rowData, row, col) {
                // console.log(arguments);
                $(td).find(".editHref").click(function () {
                    // console.log(rowData);
                    // injectModel('modal_edit',rowData);
                    // getModelByNgName('modal_edit','password').val("");
                    // getModelByNgName('modal_edit','secondPassword').val("");
                    getModelByNgName('modal_edit','enable').bootstrapSwitch("state",rowData.enable);
                    // _scope.$apply(function () {
                    //     _scope.updateForm = rowData;
                    // });

                    // $('#modal_edit').modal();
                    // _scope.openEditForm();
                    _scope.forms.open('update',rowData);
                });
                $(td).find(".deleteHref").click(function () {
                    // console.log(rowData);
                    // var cf = confirm("确认删除该用户吗?");
                    // if (cf) {
                    //     _scope.deleteForm(rowData);
                    // }

                    _scope.forms.open('delete',rowData);
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
        "language": {
            //url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            url: 'assets/global/scripts/cn.txt'
        },


        buttons: [
            {
                text: '新建用户',
                className: 'btn blue btn-outline',
                action: function ( e, dt, node, config ) {
                    _scope.forms.open('create');
                }
            },
            {
                text: '刷新数据',
                className: 'btn yellow btn-outline',
                action: function ( e, dt, node, config ) {
                    _scope.forms.refreshData();

                    toastr["success"]("数据已刷新");
                }
            },
            { extend: 'print', className: 'btn dark btn-outline' },
            //{ extend: 'copy', className: 'btn red btn-outline' },
            { extend: 'pdf', className: 'btn green btn-outline' },
            { extend: 'excel', className: 'btn yellow btn-outline ' },
            { extend: 'csv', className: 'btn purple btn-outline ' },
            { extend: 'colvis', className: 'btn dark btn-outline', text: 'Columns'}
        ],

        // setup responsive extension: http://datatables.net/extensions/responsive/
        responsive: true,

        //"ordering": false, disable column ordering
        //"paging": false, disable pagination

        "order": [
            [4, 'desc']
        ],

        "lengthMenu": [
            [5, 10, 15, 20, -1],
            [5, 10, 15, 20, "All"] // change per page values here
        ],
        // set the initial value
        "pageLength": 10,

        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-2 col-sm-12'f><'col-md-10 col-sm-12'l>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
    });

    return oTable;
}
