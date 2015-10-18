'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope) {
	$scope.operaciones = [];
	$scope.tiposOperacion = ObtenerTipos();


	$scope.agregarOperacion = function(){
		$scope.operaciones.push(new Operacion());
	};


	$scope.EliminarOperacion = function(operacion){
		var index = $scope.operaciones.indexOf(operacion);
        $scope.operaciones.splice(index, 1); 

	};


});



function Operacion(){
	var self = this;
	self.guid = guid();
	self.tipo = undefined;
	self.descripcion = "";
	self.monto = 0;
	self.fechaHora = new Date();
	self.presupuestado = false;
	self.incurridos = [];

	self.agregarIncurrido = function (){
		self.incurridos.push(new Incurrido());
	};

	self.eliminarIncurrido = function(incurrido){
		var index = self.incurridos.indexOf(incurrido);
        self.incurridos.splice(index, 1); 		
	};

	self.sumarTotal = function () {
		var total = 0;
		for (var i = self.incurridos.length - 1; i >= 0; i--) {
			total += parseFloat(self.incurridos[i].valor);

		};

		return total;
	}

};


function Incurrido(descripcion, valor){
	var self = this;
	self.guid = guid();
	self.fechaHora = new Date();

	self.descripcion = descripcion || "";
	self.valor = valor || 0;
};

function TipoOperacion(clave, descripcion, intervaloRepeticion){
	var self = this;

	self.clave = clave;
	self.descripcion = descripcion;
	self.intervaloRepeticion = intervaloRepeticion || 0;

}

function ObtenerTipos(){
	return [
		new TipoOperacion("UNICA","Única",0),
		new TipoOperacion("MENSUAL","Mensual",1),
		new TipoOperacion("BIMESTRAL","Bimestras",2)
	];
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}