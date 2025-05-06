class Stack {

    constructor(size = 5){
        this.count = 0
        this.items = []
        this.size = size
    }

    push(element){
        if(this.count === this.size){
            throw new Error('Stack Overflow')
        }
        this.items[this.count] = element;
        this.count++;
    }
    
    pop(){
        if(this.count === 0){
            throw new Error('Stack Underflow')
        }
        this.count--;
        let result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek(){
        return this.isEmpty() ? 'Stack empty' : this.items[this.count-1]
    }
    
    isEmpty(){
        return this.count === 0
    }

    clear(){
        this.items = []
        this.count = 0
    }

    size(){
        return this.count
    }

    toString() {
        if (this.isEmpty()) {
        return '';
        }
        let objString = `${this.items[0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
        objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
    }
        
}

export default Stack