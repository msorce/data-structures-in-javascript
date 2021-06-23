// Heaps are usually implemented with arrays
// in the array the first index contains the root element
// the next two indices of the array contains the roots children
// the next four indices contain the children of the
// roots two child nodes and so on

/* 
Operations:

Basic:
- findMax
- insert
- extractMax
- deleteMax
- replace

Creation:
- createHeap
- heapify
- merge 
- meld

Inspection: 
- insert
- extractMax
- deleteMax
- replace 

Internal:
- increaseKey
- delete
- siftUp
- siftDown

*/

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

    heapify(arr, length, i) {
        // at this point largest is assumed to be the parent 
        let largest = i;
        let left = i * 2 + 1;
        let right = left + 1;

        // Check to see if parent is larger than the left child
        if (left < length && arr[left] > arr[largest]) {
            // if parent is not larger
            // we are going to assign largest to left child
            largest = left;
            // at this point largest is either the parent or the left child
        }


        // Check to see if right child is larger than the largest (either parent or left child)
        if (right < length && arr[right] > arr[largest]) {
            // if the right child is larger 
            // we are going to assign largest to the right child
            largest = right;

        }

        // Check to see if the parent is still the largest element
        if (i != largest) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapify(arr, length, largest);
        }

        return arr;
    }

    heapSort(arr) {
        let length = arr.length;
        let i = Math.floor(length / 2 - 1);
        let k = length - 1;
        while (i >= 0) {
            this.heapify(arr, length, i);
            i--;
        }
    }

}

export default Heap;
