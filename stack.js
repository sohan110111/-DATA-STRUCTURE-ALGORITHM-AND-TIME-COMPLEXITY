const friends  = []
friends.push(45)
friends.push(85)
friends.push(123)

console.log(friends) // [ 45, 85, 123 ]

const getOne = friends.pop()
console.log(getOne) // 123

console.log(friends) // [ 45, 85 ]

// Stack with class
class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if(this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Rahman");
guest.add("Zaman");
guest.add("Kaman");
guest.add("Kamran");

console.log(guest.stack); // [ 'Rahman', 'Zaman', 'Kamran' ]

const speaker = guest.remove(); // [ 'Rahman', 'Zaman', 'Kaman', 'Kamran' ]
console.log(speaker); // Kamran
console.log(guest.stack); // [ 'Rahman', 'Zaman', 'Kaman' ]


// [LIFO = LAST IN FIRST OUT] example : code editor undo system is one kind stack