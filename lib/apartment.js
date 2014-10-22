(function(exports) {
  function Apartment(name, address, capacity) {
    this.name = name;
    this.address = address;
    this.capacity = capacity;
    this.numTenants = 0;
    this.tenants = [];
  }


  Apartment.prototype.addTenant = function(name) {
    if (this.numTenants < this.capacity) {
      this.numTenants++;
      this.tenants.push(name);
      return this.numTenants;
    } else {
      return 'No more room';
    }
  };

  Apartment.prototype.removeTenant = function(name) {
    var index = this.tenants.indexOf(name);
    if (index > -1) {
      this.tenants.splice(index, 1);
      return name + ' has been evicted'
    } else {
      return 'Tenant was never there to begin with';
    }
  };

  Apartment.prototype.toString = function() {
    var result = '';
    var props = Object.getOwnPropertyNames(this);
    var that = this;
    props.forEach( function(element, index, array) {
      result += element + ": " + that[element].toString() + "\n";
    });
    return result;
  };

  module.exports = {
    Apartment: Apartment
  }

})(this);
