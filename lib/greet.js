'use strict';

module.exports;

exports.sayHi = function(name){
  if(arguments.length === 0) throw new Error('no name given')
  return `Hi ${name}.`;
};
