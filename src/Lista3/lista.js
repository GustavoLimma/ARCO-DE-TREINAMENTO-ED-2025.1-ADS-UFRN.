import No from "./No";

class Lista {
    constructor() {
        this.head = new No();
    }

    add(elemento) {
        let novoNo = new No(elemento);
        novoNo.proximo = this.head.proximo;
        this.head.proximo = novoNo;
    }
    append(elemento) { }
    removeLast() {
        if (!this.isEmpty()) {
            let node_a = this.head;
            let node_b = this.head.proximo;
            while (node_b.proximo !== null) {
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = null;
        }
    }
    removeFirst() {
        if (!this.isEmpty()) {
            let aux;
            aux = this.head.proximo;
            this.head.proximo = aux.proximo;
        }
    }
    isEmpty() {
        return this.head.proximo === null;
    }
    length() {
        let result = 0;
        let node_b = this.head.proximo;
        while (node_b !== null) {
            result++;
            node_b = node_b.proximo;
        }
        return result;
    }
    addAt(elemento, pos) { }
    removeAt(pos) { }
    search(key) { }
    toString() {
        let result = '';
        let node_b = this.head.proximo;
        while (node_b !== null) {
            result += node_b.dado;
            node_b = node_b.proximo;
        }
        return result;
    }
}

export default Lista;