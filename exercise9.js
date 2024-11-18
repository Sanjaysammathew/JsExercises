let arr = [10, 3, 5, 1, 9];
let biggest = arr[0];
let smallest = arr[0];

function Compare_Array() {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    console.log("The biggest: " + biggest);
    console.log("The smallest: " + smallest);
}

Compare_Array();
