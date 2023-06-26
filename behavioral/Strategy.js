// The Strategy Pattern is a behavioral design pattern that turns a set of behaviors into objects and makes them interchangeable inside the original context object. It lets the algorithm vary independently from the clients that use it.

class ShippingStrategy {
  calculate(_pkg) {
    // this method will be overriden by concrete strategies
    throw new Error('method not implemented');
  }
}

// Fedex strategy
class FedexStrategy extends ShippingStrategy {
  calculate(pkg) {
    // now we implement the strategy for Fedex
    // the ratio for Fedex is 3.00
    return pkg.weight * 3.0;
  }
}

// UPS strategy
class UPSStrategy extends ShippingStrategy {
  calculate(pkg) {
    // in here we implement the strategy for UPS
    // let's assume that the ratio for UPS is 2.33
    return pkg.weight * 2.33;
  }
}

// Now we wrap strategies into a single class
// that calculates the cost based on the strategy used
class ShippingCostCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  calculate(pkg) {
    return this.strategy.calculate(pkg);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
}

// Let's try it out
const pkg = { name: 'PlayStation 5', weight: 4.5, unit: 'kg' };

let calculator = new ShippingCostCalculator(new FedexStrategy());
console.log('Fedex shipping cost:', calculator.calculate(pkg));

// Now, we change the strategy and try again
calculator.setStrategy(new UPSStrategy());
console.log('UPS shipping cost:', calculator.calculate(pkg));
