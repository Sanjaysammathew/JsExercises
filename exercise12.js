let size = parseInt(prompt("Enter a Number"))
let arr =[]
function storing_value(){
    for(let i=0;i<size;i++){
        let value = parseInt(prompt("Enter a value"))
        arr.push(value)
    }
    //console.log(arr)
}
storing_value()
function adding(){
    let total = arr[0]
    for(let i=1;i<size;i++){
        total+=arr[i]
    }
    console.log(total)
}
adding()