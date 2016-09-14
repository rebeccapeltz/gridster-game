angular.module('app')

.directive('integerG', function() {
  return {
    require: 'ngModel',
    link: function(scope, ele, attr, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (viewValue === '' || viewValue === null || typeof viewValue === 'undefined') {
          return null;
        }
        return parseInt(viewValue, 10);
      });
    }
  };
})

.controller('GameCtrl', function($scope) {
  $scope.MAX_ROW = 3;
  $scope.MAX_COL = 6;

  $scope.randomize = function() {
    $scope.displayLayout = $scope.randomItems;
  };
  $scope.solve = function() {
    $scope.displayLayout = $scope.solvedLayout;
  };

  $scope.randomRow = function() {
    return $scope.randomRC($scope.MAX_ROW);
  };
  $scope.randomCol = function() {
    return $scope.randomRC($scope.MAX_COL);
  };
  $scope.randomRC = function(max) {
    //return a random int bewteen 0 and max
    return Math.floor((Math.random() * max));
  };

  $scope.gridsterOpts = {
    margins: [20, 20],
    outerMargin: false,
    pushing: true,
    floating: true,
    draggable: {
      enabled: true, // whether dragging items is supported
      //handle: '.my-class', // optional selector for drag handle
      //start: function(event, $element, widget) {}, // optional callback fired when drag is started,
      //drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
      stop: function(event, $element, widget) {
          console.log('item moved', $element, widget);
        } // optional callback fired when item is finished dragging
    },
    resizable: {
      enabled: false,
      handles: ['n', 'e', 's', 'w', 'se', 'sw']
    }
  };

  // these map directly to gridsterItem options
  $scope.solvedLayout = [{
    sizeX: 2,
    sizeY: 1,
    row: 0,
    col: 0
  }, {
    sizeX: 2,
    sizeY: 2,
    row: 0,
    col: 2
  }, {
    sizeX: 2,
    sizeY: 1,
    row: 2,
    col: 1
  }, {
    sizeX: 1,
    sizeY: 1,
    row: 2,
    col: 3
  }, {
    sizeX: 1,
    sizeY: 1,
    row: 2,
    col: 4
  }, {
    sizeX: 1,
    sizeY: 1,
    row: 0,
    col: 4
  }, {
    sizeX: 1,
    sizeY: 1,
    row: 0,
    col: 5
  }, {
    sizeX: 2,
    sizeY: 1,
    row: 1,
    col: 0
  }, {
    sizeX: 1,
    sizeY: 1,
    row: 1,
    col: 4
  }, {
    sizeX: 1,
    sizeY: 2,
    row: 1,
    col: 5
  }, {
    sizeX: 1,
    sizeY: 1,
    row: 2,
    col: 0
  }];
  //   $scope.standardItems = [{
  //     sizeX: 2,
  //     sizeY: 1,
  //     row: 1,
  //     col: 0,
  //     val: 'A'
  //   }, {
  //     sizeX: 2,
  //     sizeY: 2,
  //     row: 2,
  //     col: 2,
  //     val: 'B'
  //   }, {
  //     sizeX: 2,
  //     sizeY: 1,
  //     row: 0,
  //     col: 1,
  //     val: 'C'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 1,
  //     row: 1,
  //     col: 3,
  //     val: 'D'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 1,
  //     row: 2,
  //     col: 4,
  //     val: 'E'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 1,
  //     row: 0,
  //     col: 4,
  //     val: 'F'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 1,
  //     row: 1,
  //     col: 5,
  //     val: 'G'
  //   }, {
  //     sizeX: 2,
  //     sizeY: 1,
  //     row: 2,
  //     col: 0,
  //     val: 'H'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 1,
  //     row: 0,
  //     col: 4,
  //     val: 'I'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 2,
  //     row: 1,
  //     col: 5,
  //     val: 'J'
  //   }, {
  //     sizeX: 1,
  //     sizeY: 1,
  //     row: 2,
  //     col: 0,
  //     val: 'K'
  //   }];
  $scope.randomItems = [{
    sizeX: 2,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 0,
    val: 'A'
  }, {
    sizeX: 2,
    sizeY: 2,
    row: $scope.randomRow(),
    col: 2,
    val: 'B'
  }, {
    sizeX: 2,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 1,
    val: 'C'
  }, {
    sizeX: 1,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 3,
    val: 'D'
  }, {
    sizeX: 1,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 4,
    val: 'E'
  }, {
    sizeX: 1,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 4,
    val: 'F'
  }, {
    sizeX: 1,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 5,
    val: 'G'
  }, {
    sizeX: 2,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 0,
    val: 'H'
  }, {
    sizeX: 1,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 4,
    val: 'I'
  }, {
    sizeX: 1,
    sizeY: 2,
    row: $scope.randomRow(),
    col: 5,
    val: 'J'
  }, {
    sizeX: 1,
    sizeY: 1,
    row: $scope.randomRow(),
    col: 0,
    val: 'K'
  }];
  $scope.displayLayout = $scope.solvedLayout;



  //$scope.$watchCollection('standardItems', function(newItems, oldItems) {
  //var newItemLen = newItems ? newItems.length : 0;
  //var oldItemLen = oldItems ? oldItems.length : 0;
  //console.log(JSON.stringify(oldItems));
  //console.log(newItemLen, oldItemLen);
  //});


});
