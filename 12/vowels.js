// 12.
// You are given a string str, and your task is to find the number of vowels and non-vowels in the string
// Sample Input-1:
// Hello
// Sample Output-1:
// Vowels: 2
// Non-Vowels: 3

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

rl.question('Enter a string : ', (input) => {
    const len = input.length;
    const count = countVowels(input);
    console.log(`Vowels: ${count}\nNon-Vowels: ${len - count}`);
    rl.close();
});