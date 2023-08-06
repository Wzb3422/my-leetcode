export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let pointer1 = list1;
    let pointer2 = list2;
    let result: ListNode | null = null;
    let current: ListNode;
    function append(value: number): void {
        if (!result) {
            result = new ListNode(value);
            current = result;
        } else {
            current.next = new ListNode(value);
            current = current.next;
        }
    }

    // if both of these are null
    if (!(pointer1 || pointer2)) {
        return null
    }
    // if one of these is null
    if (!(pointer1 && pointer2)) {
        // return the truthy one
        return pointer1 || pointer2;
    }

    // if both of these are ListNode
    while (pointer1 && pointer2) {
        if (pointer1.val === pointer2.val) {
            // add both into the result list
            append(pointer1.val);
            append(pointer2.val);
            // both move forward
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        } else if (pointer1.val < pointer2.val) {
            append(pointer1.val);
            pointer1 = pointer1.next;
        } else if (pointer1.val > pointer2.val) {
            append(pointer2.val);
            pointer2 = pointer2.next;
        }
    }

    if (pointer1 || pointer2) {
        current!.next = (pointer1 || pointer2);
    }

    return result;
};