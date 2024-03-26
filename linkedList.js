#!/usr/bin/env node

class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Append a new node containing the value to the end of the list
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
            
        }
        this.size++;
    }
    // Prepend: add a new node to the beginning of the list
    prepend(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    getSize(){
        return this.size;
    }    
    // Return the first node
    getHead(){
        return this.head;
    }
    // Return the last node
    getTail(){
        return this.tail;
    }
    // Return the node at the given index
    at(index){
        if(index < 0 || index > this.size ) return null;
        let currentNode = this.head;
        for(let i=0; i< index; i++){
            currentNode =  currentNode.nextNode;
        }
        return currentNode;
    }
    // pop: remove the last element of the list
    pop(){
        if(!this.head) return null;
        let currentNode  = this.head;
        let previousNode = null;
        while(currentNode.nextNode){ // while the currentNode is not tail( tail's next node is null)
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if(previousNode){
            previousNode.nextNode = null;
            this.tail = previousNode;

        }else{
            this.head = null;
            this.tail = null;
        }
        this.size--;
        return currentNode.value;
    }

    contains(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value ===  value){
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    // Return the index of the node containing the value, or null if not found
    find(value){
        let currentNode = this.head;
        let index = 0;
        while(currentNode){
            if(currentNode.value === value){
                return index;
            }
            index++;
            currentNode = currentNode.nextNode;
        }
        return null;
    }
    //  Represent LinkedList objects as strings in the specified format
    toString(){
        let result = '';
        let currentNode = this.head;
        while(currentNode){
            result += `(${currentNode.value}) => `;
            currentNode = currentNode.nextNode;
        }
        result  += "null";
        return result;
    }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.toString()); // Output: (1) -> (2) -> (3) -> null
list.prepend(0);
console.log(list.toString()); // Output: (0) -> (1) -> (2) -> (3) -> null
console.log(list.getSize()); // Output: 4
console.log(list.getHead().value); // Output: 0
console.log(list.getTail().value); // Output: 3
console.log(list.at(2).value); // Output: 2
console.log(list.pop()); // Output: 3
console.log(list.toString()); // Output: (0) -> (1) -> (2) -> null
console.log(list.contains(2)); // Output: true
console.log(list.contains(5)); // Output: false
console.log(list.find(1)); // Output: 1
console.log(list.find(5)); // Output: null