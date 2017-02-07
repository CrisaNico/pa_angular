app.service('jsonService', ["$http", function($http){
    var vm = this;
    var data = [];
    var backend = "http://localhost/pa/elenco.php";
    
    var getPressione = function(success){
        $http.get(backend)
                .then( success ,
                    function(data){console.log("error:"); console.log(data);} );
    };
    
    
    return {
        "getPressione" : getPressione
    };
}]);