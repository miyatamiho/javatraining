let a = new Array(100);
for (let i = 0; i < a.length; i++) {
    a[i] = i + 1;
}

let b3 = a.filter((num) => {
    return num % 3 === 0;
});

console.log(b3);


let b5 = a.filter((num) => {
    return num % 5 === 0;
});

console.log(b5);