app.controller('PressioneController',["jsonService",function (jsonService){
        var vm = this;
        
       
        
        
        vm.init = function(){
            jsonService.getPressione(function(response){
                console.log(response.data);
                vm.list = response.data;
            });  
        };
        
        vm.init();
}]);