class LinkedList{

    constructor(){
        this.head = new Node()
    }

    add(element){
        let newNode = new Node()
        newNode.next = this.head.next
        this.head.next = newNode
    }

    append(element){
        let newNode = new Node()
        if (this.isEmpty()){ this.head.next = newNode} else {
            let current = this.head.next
            while(current.next != null){
                current = current.next
            }
            current.next = newNode
        }
    }

    removeFirst(){
        if (this.isEmpty()){ return 'List Underflow'}

        
    }
}