function FizzBuzz(){
    for(let i=0; i<= 50; i++ ){
        if(i%10===0){
            console.log("FIZZBUZZ")
        }else if(i%5===0){
            console.log("FIZZ")
        }else if(i%2===0){
            console.log("BUZZ")
        }else{
            console.log(i)
        }
    }
}
console.log(FizzBuzz())