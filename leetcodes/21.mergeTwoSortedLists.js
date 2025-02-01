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
// var mergeTwoLists = function (list1, list2) {
//     // Return early
//     if (!list1 && !list2) {
//         return null;
//     } else if (!list1) {
//         return list2;
//     } else if (!list2) {
//         return list1;
//     }
//
//     let mergedList = new ListNode(null, null);
//
//     // Starting value
//     if (list1.val >= list2.val) {
//         mergedList.val = list2.val;
//         list2 = list2.next;
//     } else {
//         mergedList.val = list1.val;
//         list1 = list1.next;
//     }
//
//     while (list1 && list2) {
//         let node = new ListNode();
//
//         if (list1.val <= list2.val) {
//             console.log(`2 bigger than or equal to 1 so use list 1`)
//             node.val = list1.val;
//             node.next = mergedList
//             list1 = list1.next;
//         } else if (list1.val > list2.val) {
//             console.log(`1 bigger than 2 so use list2`)
//             node.val = list2.val;
//             node.next = mergedList;
//             list2 = list2.next;
//         }
//
//         mergedList = node;
//     }
//
//     // Add in remaining values
//     if (list1) {
//         while (list1) {
//             let node = new ListNode(list1.val, mergedList);
//             list1 = list1.next;
//             mergedList = node;
//         }
//     }
//
//     if (list2) {
//         while (list2) {
//             let node = new ListNode(list2.val, mergedList);
//             list2 = list2.next;
//             mergedList = node;
//
//         }
//     }
//
//     // Reverse the list
//     let orderList = null;
//     while (mergedList) {
//         let node = new ListNode(mergedList.val);
//         if (orderList !== null) {
//             node.next = orderList;
//         }
//         orderList = node;
//         mergedList = mergedList.next;
//     }
//
//     return orderList;
// };


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    // Handle edge cases
    if (!list1 && !list2) {
        return null;
    } else if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }

    // Create a list and add the starting node
    let list = null;
    if (list1?.val > list2?.val) {
        list = new ListNode(list2.val);
        list2 = list2.next;
    } else {
        list = new ListNode(list1.val);
        list1 = list1.next;
    }

    // Create a pointer to the current position of the list
    let pointer = list

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            pointer.next = new ListNode(list2.val);
            list2 = list2.next;
        }

        pointer = pointer.next;
    }

    if (list1) {
        pointer.next = list1;
    } else {
        pointer.next = list2;
    }

    return list;
};