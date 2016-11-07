console.log("hello")

// create the angular application
var app = angular.module (
    //this is the name of the application / module.
    'app',

    //specify the dependencies or required modules needed
    //for  this application to run.

    //specify that we want to include the angular ui
    //router for page navigation.
    ['ui.router']
);

//set up the app module.
app.config  ([
    //specify the dependency objects to pull
    //into the configuration.
    '$stateProvider',

    //callback method to run for the configuration.
    function ($stateProvider) {
        //our state provider controls what page
        //orwhat "state" or app is in.
        $stateProvider
        .state ('home', {
            url:'/',
            //  template:'this is a test yO..'
            templateUrl:   'templates/home.html',
            controller:    'HomeController'
        }).state ('about', {
            url:'/about',
            //  template:'this is a test y0..'
            templateUrl:    'templates/about.html',
            controller:     'AboutController'
        })
        .state ('contact', {
            url:'/contact',
            //  template:'this is a test yo..'
            templateUrl:    'templates/contact.html',
            controller:     'ContactController'
        })
        ;


    }
]);
