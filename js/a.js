var arr = [2, 4, 5, 8, 7, 3, 1, 5, 5, 5];
var newArr = [];
function one (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(one(arr));