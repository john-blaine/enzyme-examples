const expect = require('chai').expect;

function add(x, y){
  return x + y;
}

describe('add', () => {
  it('should add positive numbers', () => {
    expect(add(1,2)).to.equal(3);
  });
});
