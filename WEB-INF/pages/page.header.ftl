<div ng-controller="PageCtrl">

  <!-- Breadcrumbs -->
  <ol class="breadcrumb">
    <li><a ui-sref="home" ui-sref-active="active">Home</a></li>
    <li ng-if="$state.current.name != 'home'" ui-sref-active="active">Input</li>
  </ol>
    
  <!-- Filter(s) -->
  <hr />
  <div class="row">
    <div class="col-md-6">
      <tm1-ui-subnm tm1-instance="dev" tm1-dimension="Year" tm1-subset="Default" ng-model="selections.year" tm1-select-only="true" tm1-change="broadcast('year', selections.year)"></tm1-ui-subnm>
    </div>
    <div class="col-md-6">
      <tm1-ui-subnm tm1-instance="dev" tm1-dimension="Version" tm1-subset="All Versions" ng-model="selections.version" tm1-change="broadcast('version', selections.version)" tm1-select-only="true"></tm1-ui-subnm>
    </div>
  </div>
  <hr />
