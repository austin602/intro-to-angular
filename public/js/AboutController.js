//define the app controller.
var app = angular.module ('app');

app.controller (
    //name of controller.
    'AboutController',

    //dependencies for controller to work.
    [
        '$scope',

        //controller callback function.
        function ($scope) {
            console.log ('About controller has been loaded.');
            $scope.title = 'About Bob';
            $scope.list = [
                'air',
                'fire',
                'wind',
                'earth',
            ]
            $scope.testMethod = function () {
                console.log('Test method fired');
            }
        }
    ]
);
