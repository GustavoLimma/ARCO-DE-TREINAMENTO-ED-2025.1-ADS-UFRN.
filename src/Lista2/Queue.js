class Queue{
    
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items = []
    }

    enqueue(element){
        this.items[this.count] = element
        this.count++
    }

    dequeue(){
        if (this.isEmpty()) {return undefined}
        returned = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return returned
    }

    front(){
        return this.isEmpty() ? 'Queue Empty' : this.items[this.lowestCount]
    }

    isEmpty(){
        return this.count - this.lowestCount === 0
    }

    size(){
        return this.count - this.lowestCount
    }

    clear(){
        this.count = 0
        this.lowestCount = 0
        this.items = []
    }

    toString() {
        if (this.isEmpty()) {
        return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
        

}