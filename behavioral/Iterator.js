// The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  first() {
    this.reset();
    return this.next();
  }

  reset() {
    this.index = 0;
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.index <= this.items.length;
  }

  current() {
    return this.items[this.index];
  }
}

// Usage:
const items = ['Item 1', 'Item 2', 'Item 3'];
const iter = new Iterator(items);

while (iter.hasNext()) {
  console.log(iter.next());
}
