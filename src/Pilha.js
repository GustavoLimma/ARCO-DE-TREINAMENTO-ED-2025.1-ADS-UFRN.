class Pilha {

    constructor(size = 5) {
        this.dados = [];
        this.size = size;
        this.topo = 0;
    }

    push(elemento) {
        if (this.isFull()) {
            throw new Error("Stack Overflow");
        }
        this.dados[this.topo] = elemento;
        this.topo++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        this.topo--;
        return this.dados[this.topo];
    }

    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1];
        }
    }

    isEmpty() {
        return this.length() === 0;
    }

    isFull() {
        return this.length() === this.size;
    }

    toString() {
        return this.dados.slice(0, this.topo).join(", ");
    }

    clear() {
        this.topo = 0;
    }

    length() {
        return this.topo;
    }
}

export default Pilha;
