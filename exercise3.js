let arr=[]
let size = parseInt(prompt("Enter a size of value you store"));
function creatingInput(){
    for(let i=1;i<=size;i++){
      arr[i]= parseInt(prompt("Enter a Value"))
    }
    console.log("The user input is"+ arr)
}
function SumOfArrays(){
    let variable = 0
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>0){
        variable+=arr[i]
        }
    }
    console.log("The result is"+ variable)
}
creatingInput()
SumOfArrays()