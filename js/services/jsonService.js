app.service('jsonService', ["$http", function($http){
    var vm = this;
    
    var backend = "http://localhost/pa/elenco.php";
    
    var getPressione = function(){
        $http.get(backend)
                .then( function(data){console.log(data);} ,
                    function(data){console.log("error:"); console.log(data);} );
        
        
    };
    
    return {
        "getPressione" : getPressione
    };
}]);