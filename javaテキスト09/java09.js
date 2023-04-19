let loop_count = 100;
for (let i = 0; i < loop_count; i++) {
    a[i] = i + 1;
}

let b3 = loop_count.filter((num) => {
    return num % 3 === 0;
});

console.log(b3);


let b5 = loop_count.filter((num) => {
    return num % 5 === 0;
});

console.log(b5);