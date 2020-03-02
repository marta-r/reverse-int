module.exports = function reverse (n) {
    let arr = String(n).split('');
    arr.reverse();
    while (arr[0] == 0) {
        arr.shift();
    }
    while (arr[arr.length-1]=='-'){
        arr.pop();
    }
    return +arr.join('');
}
