const assert = require('assert');
const distance = require('./calculateDistancePoints');

describe('distance', () => {
  describe('flying', () => {
    it('should return distance score', () => {
      const actual = distance('flying', 235.5, 200);

      const expected = 162.6;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('flying', 170, 200);

      const expected = 84;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('flying', 144, 200);

      const expected = 52.8;

      assert.equal(actual, expected);
    })

  })
  describe('large', () => {
    it('should return distance score', () => {
      const actual = distance('large', 134, 120);

      const expected = 145.2;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 110, 120);

      const expected = 102;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 0, 120);

      const expected = 0;

      assert.equal(actual, expected);
    })
  })
  describe('normal', () => {

    it('should return distance score', () => {
      const actual = distance('normal', 110, 98);

      const expected = 84;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 80, 98);

      const expected = 24;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 0, 98);

      const expected = 0;

      assert.equal(actual, expected);
    })
  })
})
