// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})




.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    .state('begin', {
        url: '/begin',
        templateUrl: 'templates/begin.html'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
    })

    .state('select-perfil', {
        url: '/select-perfil',
        templateUrl: 'templates/select-perfil.html'
    })

    .state('perfil-pf', {
        url: '/perfil-pf',
        templateUrl: 'templates/perfil-pf.html'
    })

    .state('perfil-pj', {
        url: '/perfil-pj',
        templateUrl: 'templates/perfil-pj.html'
    })

    .state('forgot-password', {
        url: '/forgot-password',
        templateUrl: 'templates/forgot-password.html'
    })



    // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:


// tab home
    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('tab.home-product-detail', {
        url: '/home/product-detail',
        views: {
            'tab-home': {
                templateUrl: 'templates/product-detail.html',
                controller: 'ProductDetailCtrl'
            }
        }
    })

// tab category
    .state('tab.category', {
        url: '/category',
        views: {
            'tab-category': {
                templateUrl: 'templates/tab-category.html',
                controller: 'CategoryCtrl'
            }
        }
    })

    .state('tab.result-category', {
        url: '/category/result-category',
        views: {
            'tab-category': {
                templateUrl: 'templates/result-category.html',
                controller: 'CategoryCtrl'
            }
        }
    })

// tab search
    .state('tab.search', {
        url: '/search',
        views: {
            'tab-search': {
                templateUrl: 'templates/tab-search.html',
                controller: 'SearchCtrl'
            }
        }
    })

    .state('tab.result-search', {
        url: '/search/result-search',
        views: {
            'tab-search': {
                templateUrl: 'templates/result-search.html',
                controller: 'SearchCtrl'
            }
        }
    })

    .state('tab.search-product-detail', {
        url: '/search/product-detail',
        views: {
            'tab-search': {
                templateUrl: 'templates/product-detail.html',
                controller: 'ProductDetailCtrl'
            }
        }
    })

// tab cart
    .state('tab.cart', {
        url: '/cart',
        views: {
            'tab-cart': {
                templateUrl: 'templates/tab-cart.html',
                controller: 'CartCtrl'
            }
        }
    })

    .state('tab.cart-address', {
        url: '/cart/cart-address',
        views: {
            'tab-cart': {
                templateUrl: 'templates/cart-address.html',
                controller: 'CartCtrl'
            }
        }
    })

        .state('tab.cart-newaddress', {
            url: '/cart/cart-newaddress',
            views: {
                'tab-cart': {
                    templateUrl: 'templates/cart-newaddress.html',
                    controller: 'CartCtrl'
                }
            }
        })

    .state('tab.cart-payment', {
        url: '/cart/cart-payment',
        views: {
            'tab-cart': {
                templateUrl: 'templates/cart-payment.html',
                controller: 'CartCtrl'
            }
        }
    })

        .state('tab.cart-newcard', {
            url: '/cart/cart-newcard',
            views: {
                'tab-cart': {
                    templateUrl: 'templates/cart-newcard.html',
                    controller: 'CartCtrl'
                }
            }
        })

    .state('tab.cart-confirm', {
        url: '/cart/cart-confirm',
        views: {
            'tab-cart': {
                templateUrl: 'templates/cart-confirm.html',
                controller: 'CartCtrl'
            }
        }
    })

// tab perfil
    .state('tab.perfil', {
        url: '/perfil',
        views: {
            'tab-perfil': {
                templateUrl: 'templates/tab-perfil.html',
                controller: 'PerfilCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('/tab/home');
    $urlRouterProvider.otherwise('/begin');

});
