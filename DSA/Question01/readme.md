# 🃏 Flashcard – Second Largest Element in Array

---

### ❓ Problem

Find the **second largest element** in an array of integers.  
If it doesn’t exist (array too small or all equal) → return `"Second largest does not exist"`.

---

### 💡 Approaches

- **Brute Force:** Sort → pick second last → **O(n log n)**
- **Optimized:** Track two variables (`largest`, `secondLargest`) → **O(n)**, **O(1)**

---

### ⚙️ Algorithm

1. Initialize → `largest = -∞`, `secondLargest = -∞`.
2. Traverse array:
   - If `x > largest`: update → `secondLargest = largest`, `largest = x`.
   - Else if `x < largest && x > secondLargest`: update → `secondLargest = x`.
3. After loop → check if `secondLargest` is still `-∞`.

---

### 🧪 Examples

- `[10, 5, 20, 8, 15]` → Largest = 20, Second = 15
- `[7, 7, 7]` → `"Second largest does not exist"`
- `[5]` → `"Second largest does not exist"`
- `[-5, -9, -1]` → Largest = -1, Second = -5

---

### ⏱️ Complexity

- Time → **O(n)**
- Space → **O(1)**

---

### ⚡ Interview Tip

When asked, explain in this order →  
👉 Brute force idea → why it’s not optimal → optimized O(n) approach → dry run → complexity.
