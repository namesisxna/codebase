var app=angular.module("HomePageView");
var mainfunction = function ($scope, $http,$mdDialog,ngClipboard,$mdToast,$location,$window) {
		$scope.dateFrom = new Date();
        $scope.gridOptions = {
            data: [
  {
    "total": {
      "currencyIso": "USD",
      "priceType": "BUY",
      "value": 6100.00,
      "formattedValue": "$6,100.00"
    },
    "statusDisplay": "Valid",
    "code": "3747453",
    "placed": 1417402800000
  },
  {
    "total": {
      "currencyIso": "USD",
      "priceType": "BUY",
      "value": 1100.00,
      "formattedValue": "$1,100.00"
    },
    "statusDisplay": "Hold",
    "code": "3747092",
    "placed": 1398049200000
  }],
            urlSync: false
        };
		$scope.ta = [];
		//$scope.$watch('gridOptions.data', function () {console.log("watcher called")});
		$scope.name="sumit";
		$scope.showCustomToast1 = function(value) {
		console.log("toast called")
        $mdToast.show({
          hideDelay   : 3000,
          position    : 'top right',
          controller  : function($scope, $mdToast){
		$scope.message = value;
	  },
          template : '<md-toast>'+
					'<span class="md-toast-text" flex>{{message}}</span>'+
					'<md-button ng-click="closeToast()">'+
						'Close'+
					'</md-button>'+
					'</md-toast>'
        });
      };
		
		$scope.getData = function(){
	  		
		  		$http({
	  				method : 'GET',
	  				url : 'https://angular-data-grid.github.io/demo/data.json',
	  			}).then(
	  				       function(response){
	  				    	  
	  				    	   console.log($scope.gridOptions.urlSync);
							   var data1 = response.data;
							   
							   $scope.ta = data1

							   $scope.showCustomToast1("hello");
							   console.log($scope.myData);
							   window.location = "#/Application";
	  				    	  
	  				           // success callback
	  				         }, 
	  				         function(response){
	  				           // failure callback
	  				         }
	  				      );
		}
		function getServerData( callback) {
          $http.get('https://angular-data-grid.github.io/demo/data.json').then(function (response) {
          var data = response.data
          console.log(response);
          callback(data);
          });
	  		
	  	};
		$scope.testclick = function(value){
	  		//$scope.selectedvalue = value;
	  		alert(value.code);
	  		
	  	};
		$scope.showAlert = function() {
			console.log("hello")
      alert = $mdDialog.alert()
        .title('Attention, ' + $scope.userName)
        .textContent('This is an example of how easy dialogs can be!')
        .ok('Close');

      $mdDialog
          .show( alert )
          .finally(function() {
            alert = undefined;
          });
    }
		
		
  $scope.showCustomToast = function() {
	
        $mdToast.show({
          hideDelay   : 500,
          position    : 'top right',
          controller  : function($scope, $mdToast){
		$scope.message="Token copied to clipboard";
	  },
          template : '<md-toast>'+
					'<span class="md-toast-text" flex>{{message}}</span>'+
					'<md-button ng-click="closeToast()">'+
						'Close'+
					'</md-button>'+
					'</md-toast>'
        });
      };
		
		$scope.showDetails = function(value,ev) {
		$scope.data = value;
    $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true, 
				  parent: angular.element(document.body),
				  targetEvent: ev,				  
                  template: '<md-dialog class="userDetailsWrap" aria-label="User Details">'+
  '<form ng-cloak>'+
    '<md-toolbar>'+
      '<div class="md-toolbar-tools">'+
	  '<h2 style="color:#FFFFFF;">User Details</h2>'+
	  '<span flex></span>'+
	  '<md-button class="md-icon-button" ng-click="cancel()">'+
         '<md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon>'+
        '</md-button>'+
		'</div>'+
    '</md-toolbar>'+

    '<md-dialog-content>'+
      '<div class="md-dialog-content">'+
	  '<md-content class="md-padding">'+
	  '<md-list-item class="md-1-line">'+
        '<div class="md-list-item-text" layout="column">'+
       ' <span spanclass="md-subhead"><p><b userlabel>Code:</b>&nbsp;&nbsp;{{data.code}}</p></span>'+
		' <span spanclass="md-subhead"><p><b userlabel>statusDisplay:&nbsp;&nbsp;</b>{{data.statusDisplay}}</p></span>'+
		' <span spanclass="md-subhead"><p><b userlabel>placed:&nbsp;&nbsp;</b>{{data.placed}}</p></span>'+		
	   '</md-list-item>'+
	   '</md-content>'+
    '</md-dialog-content>'+
  '</form>'+
'</md-dialog>',
                  controller: function DialogController($scope, $mdDialog) {

                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
					 $scope.cancel = function() {
					  $mdDialog.cancel();
					};
                  }
               });
  };
    }
	
app.controller('AppController', mainfunction)


