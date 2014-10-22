var Apartment = require('./../lib/apartment.js').Apartment;
var assert = require('assert');

describe('Apartment', function() {
  describe('#addTenant', function() {
    it('should add a tenant if below capacity', function() {
      var mapleHills = new Apartment('Maple Hills', '520 S. Malebird Hills', 100);
      assert.equal(mapleHills.numTenants, 0);
      assert.equal(mapleHills.addTenant('Abby'), 1);
    })

    it('should not add a tenant if at capacity', function() {
      var tinyHills = new Apartment('Tiny Hills', 'Under that one bridge', 1);
      tinyHills.addTenant('John');
      assert.equal(tinyHills.addTenant('Abby'), 'No more room');
      assert.equal(tinyHills.numTenants, 1);
    })

    it('should add a tenant with a name to the list of tenants', function() {
      var biggerHills = new Apartment('Bigger Hills', 'over here', 2);
      biggerHills.addTenant('John');
      assert.deepEqual(biggerHills.tenants, ['John']);
      biggerHills.addTenant('Abby');
      assert.deepEqual(biggerHills.tenants, ['John', 'Abby'])
    })
  })

  describe('#removeTenant', function() {
    it('should remove a tenant by name', function() {
      var biggerHills = new Apartment('Bigger Hills', 'over here', 2);
      biggerHills.addTenant('John');
      biggerHills.addTenant('Abby');
      biggerHills.removeTenant('Abby');
      assert.deepEqual(biggerHills.tenants, ['John']);
      biggerHills.removeTenant('John');
      assert.deepEqual(biggerHills.tenants, []);
    })

    it('should not remove a tenant if tenant not found', function() {
      var biggerHills = new Apartment('Bigger Hills', 'over here', 2);
      biggerHills.addTenant('John');
      biggerHills.addTenant('Abby');
      assert.equal(biggerHills.removeTenant('Cynthia'),
        'Tenant was never there to begin with');
      assert.deepEqual(biggerHills.tenants, ['John', 'Abby']);
    })
  })

  describe('#toString', function() {
    it('should provide a properly formatted string', function() {
      var biggerHills = new Apartment('Bigger Hills', 'over here', 2);
      biggerHills.addTenant('John');
      biggerHills.addTenant('Abby');
      assert.equal(biggerHills.toString(),
        "name: Bigger Hills" + "\n" + "address: over here" + "\n" +
        "capacity: 2" + "\n" + "numTenants: 2" + "\n" +
        "tenants: John,Abby" + "\n");
    })
  })
})
