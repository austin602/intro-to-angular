//define the app controller.
var app = angular.module ('app');

app.controller (
    //name of controller.
    'HomeController',

    //dependencies for controller to work.
    [
        '$scope',

        //controller callback function.
        function ($scope) {
            console.log ('Home controller has been loaded.');
            $scope.title = 'Home Bob';
            $scope.list = [
                'sarah',
                'tom',
                'herb',


            ]

            $scope.testMethod = function () {
                console.log('Test method fired');
            }
        }
    ]
);
