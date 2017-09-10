angular.module("myapp", [])
    .controller("MyController", function($scope) {
      $scope.emp={};
      $scope.emp.name="rajesh";
      $scope.emp.age="35";
      $scope.myData={};
      $scope.myData.showIt=false;
       //$scope.myData = {};
      $scope.myData.switch = 1;

      $scope.myData.items = [ {text : "one"}, {text : "two"}, {text : "three"} ];
    }).controller("MyControllertwo", function($scope) {
            $scope.myData = {};
            $scope.myData.items    = 
                [ {text : "one"}, {text : "two"}, {text : "three"}, {text : "four"} ];
$scope.myData.itemthree= 3;
                $scope.myData.itemstwo    = 
                [ {text : "1"}, {text : "2"}, {text : "3"}, {text : "4"} ];
//console.log($scope.myData.itemstwo)
            $scope.filterArray = function(item) {
                if(item.text == "two") return false;
                return true;
            }

            $scope.sortField = "text";
                $scope.reverse   = false;
        }).controller("MyControllerThree", function($scope) {
                $scope.myData = {};
                $scope.myData.items = [{ v: "1"}, { v: "2"}, { v : "3"} ];

                $scope.myData.doClick = function(item, event) {
                    alert("clicked: " + item.v + " @ " + event.clientX + ": " + event.clientY);
                }


            } );