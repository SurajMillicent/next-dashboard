"use client";
import { useEffect, useState } from "react";

function debounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
}
const testDeb = (fun: Function, delay: string) => {
  let isTimeout;
  return (...args: any) => {
    clearTimeout(isTimeout);
    isTimeout = setTimeout(() => {
      fun(args);
    }, delay);
  };
};

export default function Page() {
  //   1. Declare a variable using var, let, and const.""
  var name = "suraj";
  let sername = "Vish";
  const rollNumber = 12;
  // 2. Swap two variables without using a third.
  let x = 11,
    y = 23;
  [x, y] = [y, x];
  // console.log(x, y);
  // 3. Convert a number to a string and vice versa.
  // console.log(typeof x.toString(), typeof Number("34"));

  // 4. Find the type of various variables using typeof.
  // console.log(typeof [], typeof {}, typeof 883883838388383, typeof "&");

  // 5. Check if a variable is undefined, null, or NaN.
  // 6. Use a ternary operator for conditional logic.
  var test = "59";
  // console.log(
  //   test == undefined ? "undefined" : typeof test !== "number" ? "NaN" : test
  // );

  // 7. Create a basic if-else ladder.
  // if(4>2){
  //   console.log("universal true")
  // }else{
  //   console.log("its meth")
  // }
  // 8. Use a switch statement with multiple cases.
  // const fruit = "Mango";
  // switch (fruit) {
  //   case "Apple":
  //     console.log("Apple");
  //     break;
  //   case "Mango":
  //     console.log("Mango");
  //     break;
  //   default:
  //     console.log("no fruit selected");
  //     break;
  // }
  // 9. Write a loop that prints numbers 1 to 10.
  for (let i = 0; i <= 10; i++) {
    // console.log(i);
  }
  // 10. Sum numbers in an array using a loop.
  const allMarks = [19, 20, 18, 14, 19, 84];
  let sum = 0;
  for (let index = 0; index < allMarks.length; index++) {
    sum += allMarks[index];
  }
  // console.log(sum);
  // 11. Iterate over an array with for, forEach, and for…of.
  const allMarksTwo = [19, 20, 18, 14, 29, 24];
  for (let index = 0; index < allMarksTwo.length; index++) {
    const element = allMarksTwo[index];
    // console.log(element, index);
  }
  allMarksTwo.forEach((element, index) => {
    // console.log(element, index);
  });

  // allMarks.forEach((item) => console.log(item));
  for (let num of allMarksTwo) {
    // console.log(num);
  }

  // 12. Use a for…in loop on an object.
  for (let num in allMarksTwo) {
    // console.log(allMarksTwo[num]);
  }

  // 13. Break a loop on a condition.
  for (let index = 0; index < allMarksTwo.length; index++) {
    const element = allMarksTwo[index];
    if (element == 18) {
      // console.log("Breaking loop at index:", index);
      break; // ✅ exits the loop here
    }
    // console.log(element, index);
  }

  // 14. Continue a loop when value is skipped.
  for (let index = 0; index < allMarksTwo.length; index++) {
    const element = allMarksTwo[index];
    if (element == 18) {
      // console.log("Breaking loop at index:", index);
      continue; // ✅ exits the loop here
    }
    // console.log(element, index);/
  }

  // 15. Create a nested loop.
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      // console.log({ i, j });
    }
  }

  // 16. Reverse iterate through an array.
  const nwArray = [1, 2, 3, 4, 5];
  const updatedArray = [];
  for (let i = nwArray?.length - 1; i < nwArray?.length; i--) {
    if (i == -1) break;
    updatedArray.push(nwArray[i]);
  }
  // console.log(updatedArray);

  // 17. Flatten a nested array using a loop.
  const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8, 9, [10, 11], 12];
  const flatNestedArray = [];
  // for (let i = 0; i < nestedArray?.length; i++) {
  //   if (typeof nestedArray[i] == "object") {
  //     for (let j = 0; j < nestedArray[i]?.length; j++) {
  //       flatNestedArray.push(nestedArray[i]?.[j]);
  //     }
  //   } else {
  //     flatNestedArray.push(nestedArray[i]);
  //   }
  // }
  // function flattenArray(arr: any) {
  //   let result = [];
  //   for (let a of arr) {
  //     if (Array.isArray(a)) {
  //       result = result.concat(flattenArray(a));
  //     } else {
  //       result.push(a);
  //     }
  //   }
  //   return result;
  // }
  // let flatNestedArrayNew = flattenArray(nestedArray);
  // console.log(nestedArray, nestedArray?.flat(Infinity), flatNestedArrayNew);

  // 18. Count even/odd numbers in an array.
  // const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
  // let evenCount = 0;
  // let oddCount = 0;
  // for (let num of numbersArray) {
  //   if (num % 2 === 0) {
  //     evenCount += 1;
  //   } else {
  //     oddCount += 1;
  //   }
  // }
  // console.log(evenCount, oddCount, "num");

  // 19. Sum all keys in an object with numeric values.
  // const dataObject = {
  //   apple: 50,
  //   banana: 120,
  //   cherry: "NAN",
  //   date: "not a number", // This will be ignored
  //   elderberry: 205,
  //   fig: null, // This will be ignored
  //   grape: undefined, // This will be ignored
  // };
  // let sumForNumericValue = 0;
  // for (let num in dataObject) {
  //   // if (typeof dataObject[num] == "number") {
  //   //   sumForNumericValue += dataObject[num];
  //   // }
  //   if (Number.isFinite(dataObject[num])) {
  //     sumForNumericValue += dataObject[num];
  //   }
  // }
  // let sumForNumericValue1 = Object.values(dataObject)
  // .filter(Number.isFinite)
  // .reduce((sum, num) => sum + num, 0);
  // console.log(sumForNumericValue,sumForNumericValue1, "num");

  // 20. Loop over a string and count vowels.
  // const sentence = "Hello, this is a simple string to count the vowels.";
  // const vowels = ["a", "e", "i", "o", "u"];
  // let vowelsCount = 0;
  // for (let v in sentence) {
  //   if (vowels?.includes(sentence[v].toLocaleLowerCase())) {
  //     console.log(sentence[v], "sentence");
  //     vowelsCount++;
  //   }
  // }
  // console.log(vowelsCount, "vowelsCount");

  // 21. Add/remove items at start/end of array.
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // numbersArray.push(12);
  // numbersArray.shift();
  // console.log(numbersArray, "numbersArray");

  // 22. Use map() to square all numbers in an array.
  // const squareList = numbersArray.map((number) => number * number);
  // console.log(squareList, "squareList");

  // 23. Use filter() to extract even numbers.
  // const evenNumber = numbersArray.filter(function (n) {
  //   return n % 2 == 0;
  // });
  // console.log(evenNumber, "evenNumber");

  // 24. Use reduce() to compute total from an array.
  const reducesSum = numbersArray.reduce((a, b) => (a += b), 0);
  // 25. Check if an array contains a specific value.
  const isHas3 = numbersArray.includes(3);

  // 26. Find index of a value in array.
  // console.log(numbersArray.indexOf(3), "isHas3");

  // 27. Merge two arrays.
  const arrayOne = [1, 2, 3];
  const arrayTwo = [4, 5, 6];
  const newArray = [...arrayOne, ...arrayTwo];
  //  console.log(newArray,arrayOne.concat(arrayTwo))

  // 28. Clone an array without affecting original.
  const originalArray = [1, 2, 3, 4, 5];
  const clonedArray = [...originalArray];
  // console.log(clonedArray, originalArray);

  // 29. Remove duplicates from an array.
  const bigArray = [2, 3, 4, 5, 6, 7, 6, 5, 3, 7, 1, 11, 9, 9];
  const uniqueArray = [...new Set(bigArray)];
  // console.log(uniqueArray, "uniqueArray");

  // 30. Sort array of numbers ascending and descending.
  const ascending = bigArray.sort((a, b) => a - b);
  const descending = bigArray.sort((a, b) => b - a);
  // console.log(ascending, descending, "ascending");

  // 31. Create an object with key-value pairs.
  const person = {
    name: "Suraj",
    age: 25,
    city: "Mumbai",
  };
  const user = {};
  user.name = "Suraj";
  user.age = 25;
  user.city = "Mumbai";

  const newPerson = new Object();
  newPerson.sirname = "Suraj";
  newPerson.sirage = 25;
  newPerson.sircity = "Mumbai";
  // console.log(user, newPerson);

  // 32. Access and update object properties.
  newPerson.sirage = 28;
  user.age = 28;

  // 33. Delete a property from an object.
  // delete newPerson.age;
  // delete user["city"];
  // console.log(user, newPerson);

  // 34. Loop through object keys and values.
  // for (let key in newPerson) {
  //   console.log(key, newPerson[key], "key");
  // }
  // Object.entries(newPerson).forEach(([key, value]) => {
  //   console.log(key, value);
  // });

  // 35. Merge two objects.
  const uniqObject = { ...user, ...newPerson };

  // 36. Clone an object.
  // console.log(
  //   uniqObject,
  //   Object.assign({}, user, newPerson),
  //   { ...uniqObject },
  //   "uniqObject"
  // );

  // 37. Use computed property names.
  const key = "role";
  const employee = {
    name: "Suraj",
    [key]: "Developer",
  };
  // console.log(employee);

  // 38. Check if object is empty.
  const empty = {};
  // console.log(Object.keys(empty)?.length === 0);

  // 39. Count properties in an object.
  // console.log(Object.keys(empty)?.length);

  // 40. Convert object to array of [key, value] pairs.
  // console.log(Object.entries(employee));

  // 41. Declare a function in 3 ways (normal, expression, arrow).
  function normal() {
    console.log("first");
  }
  const expression = function () {
    console.log("expression");
  };
  const arrow = () => console.log("arrow");

  // 42. Use default parameters.
  function normalDefault(name = "Suraj") {
    // console.log("first", name);
  }
  normalDefault();

  // 43. Use rest parameters.
  function sumT(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    // console.log("Total:", total);
  }

  sumT(1, 2, 3); // Total: 6
  sumT(4, 5, 6, 7, 8);

  // 44. Return a function from a function (closure).
  const newFun = () => {
    const name = "Suraj";
    return function cos() {
      console.log("Hi " + name);
    };
  };
  const te = newFun();
  te();
  // 45. Immediately invoke a function (IIFE).
  // (function(){
  //   console.log("IIFE executed");
  // })();

  // 46. Function that returns another function (currying).
  function multiply(a: number) {
    return function (b: number) {
      return a * b;
    };
  }
  const multiplyByTwo = multiply(2);
  // console.log(multiplyByTwo(5));

  // 47. Create a debounce-like structure.
  const [input, setInput] = useState("");

  const handleDebpounce = debounce(input, 800);
  // console.log(handleDebpounce, "handleDebpounce");
  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  // Only this will print after 2 seconds

  // 48. Create a simple throttle setup.
  // function throttle(fun: Function, limit: number) {
  //   let isThrottle = false;
  //   return function (...args: any) {
  //     if (!isThrottle) {
  //       fun.apply(this, args);
  //       isThrottle = true;
  //       setTimeout(() => {
  //         isThrottle = false;
  //       }, limit);
  //     }
  //   };
  // }
  const throttle = (func: Function, limit: number) => {
    let inThrottle = false;

    return (...args: any[]) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;

        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };
  // 49. Function that memoizes results.
  const memoize = (func: Function) => {
    const cache: { [key: string]: any } = {};
    return (...args: any[]) => {
      const key = JSON.stringify(args);
      console.log(cache, key, cache[key], "cachekey");
      if (cache[key]) {
        console.log("Returning cached result");
        return cache[key];
      }
      console.log("Calculating result");
      const result = func(...args);
      cache[key] = result;
      return result;
    };
  };
  function add(a, b) {
    return a + b;
  }

  const memoizedAdd = memoize(add);

  // console.log(memoizedAdd(5, 10)); // Calculating result → 15
  // console.log(memoizedAdd(5, 10));
  // console.log(memoizedAdd(5, 15)); // Returning cached result → 15
  // console.log(memoizedAdd(5, 15));

  // 50. Use function to validate a form input.
  const validateInputField = (value: string) => {
    if (value.trim() == "") {
      return "This fields is required";
    }
    return null;
  };
  const validators = {
    name: (v: string) => (!v.trim() ? "Name is required" : null),
    email: (v: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Enter valid email",
    age: (v: string) => (Number(v) > 0 ? null : "Age should be above 0"),
  };
  const form = { name: "", email: "suraj@", age: "-1" };

  // console.log(validators.name(form.name));   // Name is required
  // console.log(validators.email(form.email)); // Enter valid email
  // console.log(validators.age(form.age));     // Age should be above 0

  // 51. Destructure an object.
  const { name: personName, age, city } = person;
  console.log(personName, age, city);

  const person2 = { a2: 1, b: 2, c: 3 };
  const { a2, ...others } = person2;
  console.log(a2); // 1
  console.log(others); // { b: 2, c: 3 }

  const employee3 = {
    id: 101,
    details3: {
      department: "Engineering",
      skill: "React",
    },
  };
  const {
    details3: { department, skill },
  } = employee3;

  // console.log(department, skill); // Engineering React

  const response = {
    status: 200,
    data: {
      token: "abc123",
      user: { name: "Suraj" },
    },
  };

  const {
    data: {
      token,
      user: { name: userName },
    },
  } = response;

  // console.log(token, userName);/

  // 52. Destructure an array.
  const numbers = [10, 20, 30, 40];
  const [a, b, c, d] = numbers;

  const [first, , third] = [1, 2, 3];
  // console.log(first, third); // 1 3

  const [head, ...rest] = [1, 2, 3, 4, 5];
  // console.log(head); // 1
  // console.log(rest); // [2, 3, 4, 5]

  const [ab, z = 100] = [50];
  // console.log(ab, z); // 50, 100

  // 53. Use spread operator to copy array/object.
  const arr1 = [1, 2, 3, 4, 5, 67];
  const arr2 = [...arr1, 8, 9, 10];
  // console.log(arr2, "arr2");

  // 54. Use rest operator in function.
  function myRestOperator(...args) {
    // console.log(args,"rest")
  }
  myRestOperator(arr2);

  // 55. Use template literals to combine strings.
  console.log(`first ${a}`);

  // 56. Use arrow functions with map() or filter().
  const mapFunction = arr2.map((num) => num ** 2);
  const filterFunction = arr2.filter((num) => num > 10);
  // console.log(mapFunction, filterFunction, arr2, "filterFunction");

  // 57. Use optional chaining.
  const mapFunction2 = arr2?.map((num) => num ** 2);

  // 58. Use nullish coalescing (??).
  const anwe = [];
  anwe[4] = 5;
  const nullish = anwe[1] ?? 2;
  // console.log(
  //   nullish,
  //   0 ?? 10,
  //   null ?? 10,
  //   undefined ?? 10,
  //   "" ?? 10,
  //   "nullish"
  // );
  // console.log(0 || 10, null || 10, undefined || 10, "" || 10, "or");

  // 59. Use let/const in block scope example.
  const blockScope = () => {
    let anwe = 10;
    const arr2 = 23;

    // console.log(anwe, arr2, "blockScope");
  };
  blockScope();
  // console.log(anwe, arr2, "function scope");

  // 60. Use Symbol() as object property.
  const id = Symbol("userId"); // Create a unique Symbol

  const user34 = {
    name: "Suraj",
    age: 25,
    [id]: 101, // Use Symbol as a property key
  };

  // console.log(user34);
  // console.log(user34[id]); // Access symbol property
  //   console.log(Object.keys(user34)); // ["name", "age"]
  // console.log(Object.getOwnPropertySymbols(user34)); // [Symbol(userId)]

  // 61. Show var vs let hoisting.
  // | `var`                                      | `let`                       | `const`                             |
  // | ------------------------------------------ | --------------------------- | ----------------------------------- |
  // | Function scoped                            | Block scoped                | Block scoped                        |
  // | Can be re-declared                         | Cannot be re-declared       | Cannot be re-declared or reassigned |
  // | Hoisted with initialization as `undefined` | Hoisted but not initialized | Hoisted but not initialized         |

  // 62. Demonstrate block scope with let.
  //ref point 59

  // 63. Closure example that remembers a value.
  const makeCounter = () => {
    let count = 0;

    return () => {
      count++;
      console.log(count, "newCount");
    };
  };
  const newCount = makeCounter();
  newCount();
  newCount();
  newCount();

  // 64. Show variable shadowing.
  // 65. Use lexical scoping to limit access.
  // 66. Global variable vs local variable behavior.
  // 67. Hoisting of function declarations.
  // 68. Show difference between function and block scope.
  // 69. Temporal dead zone example.
  // 70. Callback inside a loop (var vs let behavior).
  // 71. Get current date/time using Date().
  // 72. Format date as YYYY-MM-DD.
  // 73. Calculate time difference between two dates.
  // 74. Use Math.random() to generate OTP.
  // 75. Round numbers with Math.floor/ceil/round.
  // 76. Get substring using slice() and substr().
  // 77. Replace part of a string.
  // 78. Check if a string starts/ends with substring.
  // 79. Count characters in a string.
  // 80. Reverse a string manually.
  // 81. Difference between == and ===.
  // 82. Implicit type coercion examples.
  // 83. Convert string “123” to number.
  // 84. Compare null, undefined, and NaN.
  // 85. Short-circuit evaluation with || and &&.
  // 86. Use !! to convert to boolean.
  // 87. Convert object to string.
  // 88. Compare two objects for deep equality.
  // 89. Use typeof vs instanceof.
  // 90. Check if input is an array.
  // 91. Use Promise to simulate an async task.
  // 92. Create an async function with await.
  // 93. Use setTimeout and setInterval.
  // 94. Cancel a timer.
  // 95. Fetch data from a public API using fetch().
  // 96. Chain .then() on a promise.
  // 97. Handle error with .catch().
  // 98. Use try…catch with async/await.
  // 99. Create a generator function.
  // 100. Use class to create a basic object model.
  return (
    <p>
      Dashboard Page
      <input value={input} onChange={(e) => handleChange(e)} />
    </p>
  );
}
