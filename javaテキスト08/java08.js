// 関数名あり
function triangle(p1, p2) {
    let p = p1 * p2 / 2;
    return p;
}

console.log(triangle(10, 20));

// 関数名なし
var triangle = function(p1, p2) {
    let p = p1 * p2 / 2;
    return p;
}

console.log(triangle(10, 20));