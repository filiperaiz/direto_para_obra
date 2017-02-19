angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {

    $scope.begin = function() {
        $state.go('begin');
    };

    $scope.login = function() {
        $state.go('login');
    };

    $scope.selectPerfil = function() {
        $state.go('select-perfil');
    };

    $scope.perfilPF = function() {
        $state.go('perfil-pf');
    };

    $scope.perfilPJ = function() {
        $state.go('perfil-pj');
    };

    $scope.enter = function() {
        $state.go('tab.home');
    };
})


.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate) {
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };

    $scope.items = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ];
})

.controller('ProductDetailCtrl', function($scope, $ionicSlideBoxDelegate, $ionicPopup) {

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
        $scope.slideIndex = index;
    };


    $scope.showConfirm = function() {
        $ionicPopup.show({
            title: 'Adicionado ao carrinho',
            template: 'Seu produto foi adicionado com sucesso ao carrinho.',
            buttons: [{
                text: 'Continuar comprando',
                type: 'button-positive',
                onTap: function(e) {

                }
            }, {
                text: '<b>Ir para o carrinho</b>',
                type: 'button-positive button-outline',
                onTap: function(e) {

                }
            }]
        });

    };
})

.controller('SearchCtrl', function($scope) {
    $scope.items = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
    ];
})

.controller('CategoryCtrl', function($scope) {
    $scope.items = [
        {
            id: 0,
            name: 'Acabamentos'
        },
        {
            id: 1,
            name: 'Elétrica'
        },
        {
            id: 2,
            name: 'Hidraulica'
        },
        {
            id: 3,
            name: 'Material básico'
        },
        {
            id: 4,
            name: 'Ferramentas'
        }
    ];
})

.controller('CartCtrl', function($scope) {
    $scope.items = [
        { id: 0 },
        { id: 1 },
        { id: 2 }
    ];
})





.controller('PerfilCtrl', function($scope, $state) {
    $scope.logout = function() {
        $state.go('begin');
    };
});
