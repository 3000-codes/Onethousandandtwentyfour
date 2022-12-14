/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList (head: ListNode | null): ListNode | null {
  let p1 = head; let p2 = null
  while (p1) {
    const tmp = p1.next// 暂存前节点
    p1.next = p2// 续接前链表
    p2 = p1// 交换值
    p1 = tmp// 交换值
  }
  return p2
};
// @lc code=end
