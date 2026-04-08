let num = 153;

// 1. Sum of digits
let temp = num;
let sumDigits = 0;

while (temp > 0) {
    let digit = temp % 10;
    sumDigits += digit;
    temp = Math.floor(temp / 10);
}

// 2. Check Armstrong number
temp = num;
let digitsCount = num.toString().length;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += Math.pow(digit, digitsCount);
    temp = Math.floor(temp / 10);
}

let isArmstrong = (armstrongSum === num);

// 3. Check Prime number
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// 4. Find all factors
let factors = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors.push(i);
    }
}

// 5. Sum of first n numbers
let n = 10; // you can change this
let sumN = 0;

for (let i = 1; i <= n; i++) {
    sumN += i;
}

// 6. Print table of n
console.log("Multiplication Table of", n);
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

console.log("\nNumber:", num);
console.log("Sum of its digits:", sumDigits);
console.log("Is it an Armstrong number?", isArmstrong ? "Yes" : "No");
console.log("Is it a prime number?", isPrime ? "Yes" : "No");
console.log("Factors:", factors.join(", "));
console.log("Sum of first", n, "numbers:", sumN);