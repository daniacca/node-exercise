import { LinkedList } from "..";

describe("LinkedList Tests", function () {
  it("Insert, Search, and remove should work", () => {
    const list = new LinkedList<number>();
    list.insert(12);
    list.insert(2);
    list.insert(34);
    list.insert(0);
    list.insert(8);
    list.insertAtEnd(24);
    list.insertAtEnd(32);

    expect(list.size()).toEqual(7);

    let node = list.search((d) => d === 34);
    if (node) list.remove(node);

    expect(list.size()).toEqual(6);
    node = list.search((d) => d === 34);

    expect(node).toBeNull();
  });
});
