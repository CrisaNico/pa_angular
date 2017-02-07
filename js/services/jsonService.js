app.service('jsonService', ["$http", function($http){
    var vm = this;
    
    vm.backend = "localhost/pa/elenco.php";
    
    vm.getPressione = function(callback){
        
        $http.get(vm.backend).success(function(data){console.log(data);});
         
    };
    
    return {
        "getPressione" : vm.getPressione
    };
}]);