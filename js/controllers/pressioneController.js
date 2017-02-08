app.controller('PressioneController',["jsonService","$http",function (jsonService,$http){
        var vm = this;
        
      vm.delete = function(id){
          jsonService.deletePressione(id, vm.init);
      };
        
        vm.addPressione = function(){
            $http.post(jsonService.getPressione, vm.newPressione).then(vm.init);
            vm.resetMisurazione;
        };
        
        
        
       vm.resetMisurazione = function(){
           vm.getPressione = {peso:null,datamisurazione: null, sistolica: null, diastolica: null};
       };
        
        
        vm.init = function(){
            jsonService.getPressione(function(response){
                console.log(response.data);
                vm.list = response.data;
            });  
        };
        
        vm.init();
}]);