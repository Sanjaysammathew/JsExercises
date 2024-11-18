let arr = []
let size = parseInt(prompt("Enter a Number"))
function creating_arrays(){
    for(let i=0;i<size;i++){
        arr[i] = parseInt(prompt("Enter a Number"))  
    }
    let num = arr[0]
    for(let i=1;i<arr.length;i++){
        num+=arr[i]
    }
    let average = num/size
    console.log(average)
}
creating_arrays()