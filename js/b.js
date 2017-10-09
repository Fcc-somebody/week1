var arr = [2, 4, 5, 8, 7, 3, 1, 5, 5, 5];
function two (arr) {
    var newArr2 = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        var flag = false;
        for (var j = 0; j < newArr2.length; j++) {
            if (arr[i] === newArr2[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            newArr2.push(arr[i]);
        }
    }
    return newArr2;
}
console.log(two(arr));