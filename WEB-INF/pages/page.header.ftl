<div ng-controller="PageCtrl">

<!-- Breadcrumbs -->
<ol class="breadcrumb">
  <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
  <li ng-if="$state.current.name != 'home'" ui-sref-active="active">Input</li>
</ol>
