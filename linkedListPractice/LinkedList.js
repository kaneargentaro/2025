const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;

    }

    unshift(val) {
        const newNode = new Node(val);

        if (this.head) {
            newNode.next = this.head
        }

        this.head = newNode;
        this.length++;

        if (this.length === 1) {
            this.tail = this.head;
        }

        return this.head;
    }

    get(index) {
        if (index < 0 || this.length <= index) {
            return null;
        }

        let node = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return node;
            }
            node = node.next;
        }

        return null;
    }

    set(val, index) {
        const node = this.get(index);
        if (!node) {
            return false;
        }
        node.val = val;
        return true;
    }

    insert(val, index) {
        if (index < 0 || this.length >= index) {
            return false;
        }

        if (this.length - 1 === index) {
            return !!this.push(val);
        }

        if (this.length === 0) {
            return !!this.unshift(val);
        }

        const thisNode = new Node(val);
        let previousNode = this.get(index - 1);
        thisNode.next = previousNode.next;
        previousNode.next = thisNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = previousNode.next.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        // const reversedList = new LinkedList();
        // let current = this.head;
        // while (current) {
        //     reversedList.unshift(current.val);
        //     current = current.next;
        // }
        // return reversedList;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

module.exports = LinkedList;