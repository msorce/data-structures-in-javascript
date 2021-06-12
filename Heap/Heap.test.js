import Heap from "./Heap";

test('returns the heap', () => {
    const  heap = new Heap();
    expect(heap.heap).toEqual([]);
});

test('checks if the heap is empty', () => {
    const  heap = new Heap();
    expect(heap.isEmpty()).toBe(true);
});

test('checks if the size of the heap is correct', () => {
    const  heap = new Heap();
    expect(heap.size()).toEqual(0);
});

test('checks if the heap is inserting elements', () => {
    const  heap = new Heap();
    heap.insert(1);
    expect(heap.size()).toEqual(1);
});
