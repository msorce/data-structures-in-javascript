import Heap from "./Heap";

test('returns the heap', () => {
    const heap = new Heap();
    expect(heap.heap).toEqual([]);
});

test('checks if the heap isEmpty method is working correctly', () => {
    const heap = new Heap();
    expect(heap.isEmpty()).toBe(true);
});

test('checks if the size method is working correctly', () => {
    const heap = new Heap();
    expect(heap.size()).toEqual(0);
});

test('checks if insert method is working correctly', () => {
    const heap = new Heap();
    heap.insert(1);
    expect(heap.size()).toEqual(1);
});

test('tests the heapify method', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);

    heap.heapify(heap.heap, heap.size(), 0);
    expect(heap.heap).toEqual([3, 2, 1]);

});

test('tests the heapSort method', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(3);
    heap.insert(21);
    heap.insert(20);
    heap.insert(0);
    heap.insert(6);

    heap.heapSort(heap.heap);
    expect(heap.heap).toEqual([21, 20, 6, 2, 1, 0, 3]);

});