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
    size(){
        return this.size;
    }    
    // Return the first node
    head(){
        return this.head;
    }
    // Return the last node
    tail(){
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
    
}