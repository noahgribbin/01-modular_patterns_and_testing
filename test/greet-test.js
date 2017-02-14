'use strics';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function(){
  describe('#sayHi', function(){
    it('should return Hi noah.', function(){
      var result = greet.sayHi('noah');
      assert.ok(result ==='Hi noah.', 'result is not Hi noah.')
    })
  })
})
