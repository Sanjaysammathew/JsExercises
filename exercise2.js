let arr=[]
let size = parseInt(prompt("Enter a size"))
 function CreatingArrays(){
    for(let i=0;i<=size-1;i++){
        arr[i]=i
    }
 }
 function ReverseArray(){
    let revArr = ""
    for(let i=arr.length-1;i>=0;i--){
        revArr+= arr[i]
    }
    console.log(revArr)
 }
 CreatingArrays()
 ReverseArray()