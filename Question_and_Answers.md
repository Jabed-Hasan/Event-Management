<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>B: ReferenceError: greetign is not defined

Explanation:
In the code, you intended to create an empty object and assign it to the variable greeting. However, there is a typo in your code. You wrote greetign instead of greeting, which means the variable greeting is not defined, leading to a ReferenceError when you try to log it to the console.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: c

<i>C: "12"

Explanation:
In JavaScript, when you use the + operator with two operands, and at least one of them is a string, JavaScript will perform string concatenation. In this case, you are adding the number 1 and the string "2". JavaScript will convert the number to a string and then concatenate the two strings together, resulting in "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>A: ['🍕', '🍫', '🥑', '🍔']

Explanation:
In this code, you initially create an array food with four emoji elements. Then, you create an object info with a property favoriteFood that is assigned the value of the first element of the food array, which is "🍕". Later, you change the value of info.favoriteFood to "🍝". However, this change does not affect the original food array. Therefore, when you log the food array, it remains ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: b

<i>B: Hi there, undefined

Explanation:
In the code provided, the sayHi function expects a parameter name, which is used to create the greeting. However, when you call sayHi() without passing any arguments, the name parameter remains undefined. Therefore, the function returns a string with "Hi there, " followed by the value of name, which is undefined. The result is "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 3

<i>In the code provided, the count variable is initialized to 0, and there is an array nums containing [0, 1, 2, 3]. The forEach method is used to iterate over the elements of the nums array, and for each element (num), it checks if num is truthy (not equal to 0). If num is truthy, it increments the count variable by 1.

Here's what happens step by step:

The loop starts with num equal to 0. Since 0 is falsy, it does not increment count.

Next, num is equal to 1. 1 is truthy, so it increments count to 1.

Then, num is equal to 2. 2 is truthy, so it increments count to 2.

Finally, num is equal to 3. 3 is truthy, so it increments count to 3.

</i>

</p>
</details>