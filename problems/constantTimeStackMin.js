/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  class Stack {
    constructor() {
      this.storage = {};
      this.lowest = Math.random() * 1000000;
    }

  // add an item to the top of the stack
    push(value) {
      var top = this.size();
      if (this.lowest > value) {
        this.lowest = value;
        this.storage[top] = value;
      } else {
      this.storage[top] = value;
      }
    };

  // remove an item from the top of the stack
    pop() {
      var top = this.size() - 1;
      delete this.storage[top];
    };

  // return the number of items in the stack
    size() {
      return Object.keys(this.storage).length;
    };
  
  // return the minimum value in the stack
    min() {
      return this.lowest;
    };

  };

  var example = new Stack();
  example.push(4);
  example.push(3);
  console.log(example.min() === 3);
  example.push(3);
  example.push(2);
  example.push(2);
  console.log(example.min() === 2);