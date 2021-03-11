class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class linkedList {
    constructor(head) {
        this.head = head;
    }

    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mbondhon = new LinkedList(head);
mBondhon.add(13);
mBondhon.add(27);
mBondhon.add(68);

console.log(JSON.stringify(mBondhon));
