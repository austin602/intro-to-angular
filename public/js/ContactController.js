//define the app controller.
var app = angular.module ('app');

app.controller (
    //name of controller.
    'ContactController',

    //dependencies for controller to work.
    [
        '$scope',

        //controller callback function.
        function ($scope) {
            console.log ('Contact controller has been loaded.');
            $scope.title = 'Contact Bob';
            $scope.list = [
                'apples',
                'bing',
                'bong',


            ]
            $scope.testMethod = function () {
                console.log('Test method fired');
            }
        }
    ]
);
