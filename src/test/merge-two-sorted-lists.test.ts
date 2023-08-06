import { mergeTwoLists, ListNode } from '../merge-two-sorted-lists'

describe('Merge Two Sorted Lists', () => {

  const getListStr = (head: ListNode | null) => {
    let current: ListNode | null = head;
    let str = '';
    while (current) {
        str = `${str}${current.val}`;
        current = current.next;
    }
    return str;
  }

  test('Input: list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4]', () => {
    const list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);

    const list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);

    expect(getListStr(mergeTwoLists(list1, list2))).toBe('112344');
  })
  test('Input: list1 = [], list2 = [] Output: []', () => {
    const list1 = null;
    const list2 = null;
    expect(mergeTwoLists(list1, list2)).toBe(null);
  })

  test('Input: list1 = [], list2 = [0] Output: [0]', () => {
    const list1 = null;
    const list2 = new ListNode(0);
    const head = mergeTwoLists(list1, list2);

    expect(getListStr(head)).toBe('0');
  })

  test('Input: list1 = [5], list2 = [1,2,4] Output: [1,2,4,5]', () => {
    const list1 = new ListNode(5);
    const list2 = new ListNode(1);
    list2.next = new ListNode(2);
    list2.next.next = new ListNode(4);

    expect(getListStr(mergeTwoLists(list1, list2))).toBe('1245');
  })
})
