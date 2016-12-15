angular.module('quoteBook').controller('mainController', function($scope, mainService){
  $scope.getQuotes = mainService.getQuotes();
  $scope.removeData = mainService.removeData();

  $scope.addQuote = function() {
    var newQuote = {
      text: $scope.addText,
      author: $scope.addAuthor
    }
    $scope.addData = mainService.addData(newQuote);
    return addData();
  }

  $scope.deleteQuote = function(text) {
    mainService.removeData(text);
  }


});
