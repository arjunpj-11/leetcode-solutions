/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return head;
    
    let temp = head;
    
    while (temp !== null) {
        
        if (!temp.child) {
            temp = temp.next;
            continue;
        }
        
        let childTail = temp.child;
        while (childTail.next !== null) {
            childTail = childTail.next;
        }
        
     
        childTail.next = temp.next;
        if (temp.next !== null) {
            temp.next.prev = childTail;
        }
        
        temp.next = temp.child;
        temp.child.prev = temp;
        
        temp.child = null;
        
        temp = temp.next;
    }
    
    return head;
};