/******** Node Class Constructor *********/

class Node {
  constructor(value) {
    this.value = value;
    // we always begin with next = null
    this.next = null;
  }
}

/******** Linked List Class Constructor *********/

class LinkedList {
  constructor(headValue) {
    // create a new node with the headValue
    const node = new Node (headValue);
    // set head and tail at your new node
    this.head = node;
    this.tail = node;
  }

  /******** Add a new node to the head of the list  *********/
  addToHead(value) {
    // create a new node
    const newNode = new Node(value);
    // update the new node's "next" to the current head
    newNode.next = this.head;
    // update the head pointer to the newNode
    this.head = newNode;
  }

  /******** Add a new node to the tail of the list  *********/
  addToTail(value) {
    // create a new node with the value
    const newNode = new Node(value);
    // update tail's "next" pointer to the newNode
    this.tail.next = newNode;
    // update tail
    this.tail = newNode;
  }

    /******** Traverse the list, & print node values in a readable way  *********/
    printValues() {
      // create an array to store the node values
      let values = [];
      // traverse the list: create a "cursor" to track the current node, and point it at the head
      let current = this.head;
      // while there's a node
      while (current) {
          // push that node's value to the array
          values.push(current.value)
          // advance the cursor to the next node
          current = current.next;
      }
      // after the loop completes, print all values
      console.log(values);
    }
    
  /******** Return true if list contains X value  *********/
  /* OR, false, if it doesn't contain the value */
  contains(value) {
    // traverse the list: 
    // create a "cursor" to track the current node, and point it at the head
    let current = this.head;
    // while there's a node
    while (current) {
      // return true if you find the value
      if (current.value === value) {
        return true;
      }
      // advance to the next node
      current = current.next;
    }

    // if the loop completes and you didn't find the value, it's not there: return false
    return false;
  }

  /******** Insert a node BEFORE the node with X value  *********/
  insertBefore(newValue, findValue){
    // edge case: if the node with findValue is not in the list:
    if (!this.contains(findValue)) {
      // return error message
      console.log(`node with value ${findValue} not found`);
      return;
    }
      
      
    // traverse the list: 
    // create a "cursor" to track the current node, and point it at the head
    let current = this.head;
    // create another cursor to track the node BEFORE current node, and initialize as null;
    let before = null;
    // while there's a node
    while (current) {
        // if we find the findValue:
        if (current.value === findValue) {
            // break the loop
            break;
        }
        // advance "before" to the next node
        before = current;
        // advance "current" to the next node
        current = current.next;
    }

    // create new node
    const newNode = new Node(newValue);
    // by now: we've checked that the findValue exists, and we've found it in the list. so:
      // current = the node we're looking for
      // behind = the node before it
    
    // insert the new node BEFORE the node with your foundValue:
    // check: if there is no "previous" node (the "found" node is the head of the list):
    if (!before) {
        // point your new node's "next" to your "found" node
        // newNode.next = current;
        // make your new node the head of the list
        // this.head = newNode;
        this.addToHead(newNode);
    } else {
    // else:
        // new node points to "found" node
        newNode.next = current;
        // "before" node points to new node
        before.next = newNode;

    }
  } 
}





/******** Basic Tests (no Jest) *********/

/*** Node constructor ***/ 
const testNode = new Node(1);
// console.log(testNode) 
// Node {value: 1, next: null}

/*** Linked List constructor ***/ 
const testList = new LinkedList(1);
// console.log(testList) 
// LinkedList { head: {value: 1, next: null}, tail: {value: 1, next: null} }

/*** addToHead method ***/ 
// testList.addToHead(2);
// testList.addToHead(3);
// console.log(testList);
// LinkedList values: 3, 2, 1

/*** addToTail method ***/ 
testList.addToTail(2);
testList.addToTail(3);
// console.log(testList); 
/* 
LinkedList 
{ 
  head: { value: 1, next: 
          { value: 2, next: 
            { value: 3, next: null }
          }
        }, 
  tail: { value: 3, next: null }
} */

/*** printValues method ***/ 
// testList.printValues(); 
// [1, 2, 3]

/*** contains method ***/ 
// console.log(testList.contains(3)); // true
// console.log(testList.contains(5)); // false

/*** insertBefore method ***/ 
// insertBefore(newValue, findValue)
testList.insertBefore(5, 3);
testList.printValues() // [1, 2, 5, 3]
testList.insertBefore(4, 10) // "node with value 10 not found"