<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2016/8/18 0018
  Time: 10:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html data-ng-app>
<head>
    <title>Title2</title>

    <script src="${basePath}/assets/global/plugins/angularjs/angular.min.js" type="text/javascript"></script>
    <script src="${basePath}/js/ng-file-upload/ng-file-upload.min.js" type="text/javascript"></script>
    <script src="${basePath}/js/ng-file-upload/ng-file-upload-shim.min.js" type="text/javascript"></script>
</head>
<body>
Upload on form submit or button click
<form ng-app="fileUpload" ng-controller="MyCtrl" name="form">
    Single Image with validations
    <div class="button" ngf-select ng-model="file" name="file" ngf-pattern="'image/*'"
         ngf-accept="'image/*'" ngf-max-size="20MB" ngf-min-height="100"
         ngf-resize="{width: 100, height: 100}">Select</div>
    Multiple files
    <div class="button" ngf-select ng-model="files" ngf-multiple="true">Select</div>
    Drop files: <div ngf-drop ng-model="files" class="drop-box">Drop</div>
    <button type="submit" ng-click="submit()">submit</button>
</form>

</body>
</html>
