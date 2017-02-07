app.controller('PressioneController',["jsonService",function (jsonService){
        var vm = this;
        vm.test = 123;
        
        vm.init = function(){
            jsonService.getPressione();
        };
        
        vm.init();
}]);