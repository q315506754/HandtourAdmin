<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2016/8/18 0018
  Time: 10:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>

    <link href="${basePath}/css/dropzone.css" rel="stylesheet" type="text/css" />
    <script src="${basePath}/js/scripts/dropzone.js" type="text/javascript"></script>
</head>
<body>
<div id="myId" class="dropzone">
    <%--aaaaa--%>
</div>
<div class="dropzone-previews">

</div>
<form>

</form>
<form action="/file-upload"
      class="dropzone"
      id="my-awesome-dropzone"></form>
</body>

<script type="text/javascript">
    // Dropzone class:
    var myDropzone = new Dropzone("div#myId", {
        url: "/file/post",
        acceptedFiles:"image/*",
        maxFilesize:5,
        uploadMultiple:false,
        paramName:"avatar",
        addRemoveLinks:true,
//        previewsContainer:".dropzone-previews",
        hiddenInputContainer:"form",
        maxFiles:1,
//        forceFallback:true,
        dictDefaultMessage:"请把图片拖到这儿或者点击该处来上传",
        dictFallbackMessage:"您的浏览器不支持该控件"
    });

</script>
</html>
