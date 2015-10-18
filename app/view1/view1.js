'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
    $scope.panels = new Array();
    
    $scope.AddMap = function(mapType){
        var panelNumber = $scope.panels.length + 1;
        var panel = new mapPanel(panelNumber, "panelMap" + panelNumber );
        panel.width = 200;
        panel.height = 200;
        panel.actualizarStyle = function () {
            panel.style = { 'width': panel.width.toString() + 'px', 'height':  panel.height.toString() + 'px' };
        };
        panel.actualizarStyle();
        
        
        if (mapType == 'gmap')
            panel.initializeMapGmap();
        else if (mapType == 'osm')
            panel.initializeMapOStreetMap();
        
        $scope.panels.push(panel);
    }
    
    $scope.IncrementarTam = function(tam) {
        angular.forEach($scope.panels, function(value, key) {
                value.width += tam;
                value.height += tam;
                value.actualizarStyle();
            });  
    };

    $scope.EliminarPanel = function(panel){
        var index = $scope.panels.indexOf(panelq);
        $scope.panels.splice(index, 1); 
    }
    
    $scope.ClearMaps = function(){
        $scope.panels = new Array();
    }
    
});


function mapPanel(id, mapDivId){
    var self = this; 
    
    self.number = id;
    self.mapDivId = mapDivId;
    
    self.initializeMapGmap = function() {
    
        setTimeout(function() {
        
            var mapOptions = {
                center: new google.maps.LatLng(0, 0),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById(self.mapDivId),
        mapOptions);
            self.map = map;
            
        },500);
    };

    self.initializeMapOStreetMap = function() {
        setTimeout(function() {
            self.map = new ol.Map({
                target: self.mapDivId,
                layers: [
                  new ol.layer.Tile({
                    source: new ol.source.OSM()
                  })
                ],
                view: new ol.View({
                  center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
                  zoom: 4
                })
            });
        },500);
    };
    
}