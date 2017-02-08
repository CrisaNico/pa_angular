angular.modile('misurazione').controller('PressioneController',["jsonService",function (jsonService){
        var vm = this;

        vm.populate = function (response) {
            console.log(response.data);
            vm.list = response.data;
        };

        vm.init = function () {
            vm.clear();
            jsonService.getPressione(vm.populate);
        };

        vm.removeRow = function (id) {
          jsonService.deletePressione(vm.populate, id);
        };


        vm.clear = function () {
          vm.misurazione = {
            datamisurazione: null,
            sistolica: null,
            diastolica: null,
            peso: null
          };
        };


        vm.addRow = function () {
            var ok = true;
            //           angular.forEach(vm.misurazione, function(v,k){
//               if(v==null){ this=false; return false; }
//           }, ok);
            if(ok){
                jsonService.addPressione(vm.misurazione, vm.populate);
            }
        };
        

        vm.init();
}]);