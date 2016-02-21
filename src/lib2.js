export {foo};

// Extraneous comment here.


/**
 * Foo function.
 * 
 * @returns {Number} 
 */
function foo () {
  let {a, b} = {a: 1, b: 2};
  throw new Error('SIMULATED ERROR'); // simulate unintended error
  return a;
}

