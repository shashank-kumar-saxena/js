var a = [1, 2, 3, 4];
var b, n = 0;
for (var i = 4 - 1; i >= 0; i--) {
    b.push(a[n]);
    n++;
}
console.log(b);