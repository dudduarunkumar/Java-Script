console.log("hello Node!");

function addition(a,b){
    setTimeout(()=>{
        console.log("Sum:",a+b)

    },3000)
}
addition(20,30)