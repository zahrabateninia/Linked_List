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

}