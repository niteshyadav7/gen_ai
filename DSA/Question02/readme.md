# Flashcard – Rotate Array (Interview Blueprint)

❓ **Problem**  
Given an array `A` of length `n`, rotate it by `B` positions.  
- If `B > n`, use `B % n`.  
- Example: `A = [1,2,3,4,5], B = 2` → `[4,5,1,2,3]` (Right Rotation)

---

🧩 **How to Answer in Interview**

1. **Clarify the Problem**  
   - Ask: "Do we need left or right rotation?"  
   - Ask about constraints (size of `n`, can `B` be large, is in-place required?).  

2. **Brute Force Idea**  
   - Shift elements one by one, repeat `B` times.  
   - Time: O(n × B), Space: O(1).  
   - Works but inefficient for large `n` and `B`.

3. **Optimized Approach #1 (Extra Array)**  
   - Copy last `B` elements to new array, then copy first `n-B`.  
   - Time: O(n), Space: O(n).  
   - Simple but uses extra memory.

4. **Optimized Approach #2 (Reversal Algorithm – In-place)**  
   - Reverse entire array.  
   - Reverse first `B` elements.  
   - Reverse remaining `n-B`.  
   - Time: O(n), Space: O(1).  
   - Most optimal and often the expected answer.

5. **Dry Run (Small Example)**  
   - Show how `[1,2,3,4,5], B=2` → `[4,5,1,2,3]`.  
   - Helps interviewer see you understand the logic.

6. **Complexity Analysis**  
   - Brute Force: O(n × B)  
   - Extra Array: O(n) + O(n) space  
   - Reversal Algorithm: O(n), O(1) space ✅

7. **Edge Cases**  
   - `B = 0` → unchanged.  
   - `B % n = 0` → unchanged.  
   - Empty array → return empty.  

---

🎯 **Takeaway Line (to impress interviewer)**  
*"Brute force works but is inefficient. With reversal algorithm, we achieve rotation in O(n) time and O(1) extra space, which is optimal."*
