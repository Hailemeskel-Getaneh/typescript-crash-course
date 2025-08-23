
In **TypeScript**, **generics** solve the problem of **reusability with type safety**.

Without generics, you have two bad choices when writing reusable functions or classes:

1. **Use `any`** → You lose type safety.

   ```ts
   function identity(arg: any): any {
     return arg;
   }

   let a = identity(10);   // a: any ❌ (we lost "number")
   let b = identity("hi"); // b: any ❌ (we lost "string")
   ```

2. **Write the same function multiple times** for different types → Not reusable.

   ```ts
   function identityNumber(arg: number): number { return arg; }
   function identityString(arg: string): string { return arg; }
   // ❌ Too much duplication
   ```

---

### ✅ Solution: Generics

Generics let you write **one reusable function** that adapts to different types while keeping **strong typing**.

```ts
function identity<T>(arg: T): T {
  return arg;
}

let num = identity<number>(10);   // num: number ✅
let str = identity<string>("hi"); // str: string ✅
```

Now TypeScript **remembers the type** automatically:

```ts
let n = identity(42);     // inferred as number
let s = identity("hello"); // inferred as string
```

---

### 🚀 What Problems Generics Solve

1. **Avoids code duplication** → one function/class works for all types.
2. **Preserves type information** → unlike `any`, you don’t lose type safety.
3. **Enables flexible data structures** → like generic arrays, stacks, queues, linked lists, etc.

   ```ts
   class Box<T> {
     content: T;
     constructor(value: T) {
       this.content = value;
     }
   }

   let numberBox = new Box<number>(123);   // content: number
   let stringBox = new Box<string>("abc"); // content: string
   ```

---

👉 In short: **Generics solve the problem of making reusable, flexible, and type-safe code in TypeScript**.

