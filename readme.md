# Description

A practice interface for managing object-oriented programming in Javascript.
I used Mocha with the assertion library in order to do test-driven development
for my modeling of an apartment complex which can add and remove tenants.

```
// Constructor function
apartment = new Apartment('Maple Hills', '503 Mocha Avenue', 100);

// Adds a new tenant if under capacity
apartment.addTenant('Mike');

// Searches for the first tenant with name 'Mike' and summarily evicts him.
apartment.removeTenant('Mike')

// Cannot evict tenants which do not live there
biggerHills.removeTenant('Cynthia'); =># 'Tenant was never there to begin with';
```

Additionally, the toString function iterates through all properties and prints
them out. This does not include the functions of Apartment, since those
functions are all declared on the Apartment's prototype, not as one of the
Apartment's properties.
