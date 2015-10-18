'use strict';

describe('myApp.aboutme module', function() {

  beforeEach(module('myApp.aboutme'));

  describe('aboutme controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var aboutmeCtrl = $controller('aboutmeCtrl');
      expect(aboutmeCtrl).toBeDefined();
    }));

  });
});