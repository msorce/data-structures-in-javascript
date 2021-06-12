// Heaps are usually implemented with arrays
// in the array the first index contains the root element
// the next two indices of the array contains the roots children
// the next four indices contain the children of the
// roots two child nodes and so on

class Heap {
    constructor() {
        this.heap = [];
    }
    insert(node) {
        this.heap.push(node);
    }
    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}

export default Heap;
