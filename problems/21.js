/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // solution 1
    // if(!list1||!list2){
    //     return list1 || list2
    // }
    // let val1=list1.val
    // let val2=list2.val
    // let head=val1<=val2?list1:list2
    // let current=head
    // let next1=val1<=val2?list1.next:list1
    // let next2=val1<=val2?list2:list2.next
    // while(next1&&next2){
    //     if(next1.val<=next2.val){
    //         current.next=next1
    //         current=next1
    //         next1=next1.next
    //     } else{
    //         current.next=next2
    //         current=next2
    //         next2=next2.next
    //     }
    // }
    // if(!next1){
    //     current.next=next2
    // }
    // if(!next2){
    //     current.next=next1
    // }
    // return head

    // solution 2
    if (!list1)return list2
    if (!list2)return list1

    if (list1.val<=list2.val){
        list1.next=mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next=mergeTwoLists(list1, list2.next)
        return list2
    }
};
