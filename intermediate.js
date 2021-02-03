//objects
//store data into an object instead of an array, objects can be more organized when have more info to give

const fitBitData = {
    steps : 308727,
    miles : 211.7,
    calories: 5755,
    workout: '5 of 7',
    avgSleep: '2:13'
};

//if i wanna access some data inside the const value
//ex:
fitBitData.miles //just access
//keys are stored as strings
//but i can use []
//ex:
const number = {
    100: "one hundred",
    16: "sixteen"
};

//console: number[100] = "one hundred"

//functions
//block scope - i can't use some variables outside the function, but i can reuse the for loop result // 
function doubleArr(arr){
const result= [];
for(let num of arr){
   let double = num* 2;
   result.push(double);
}
return result;
}

instead of using function, if there is a single value to use, use : ex
const double = ex.map(n => n*2);

////////////////////////////////
function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("teste");
} //callThreeTime(cry) ->  it will call "teste three times"

//spread ...
const nums = [9, 3 ,2 ,1]
Math.max(... nums);

//separate 


///////////////dom manipulation
getAttribute()
setAttribute()
appendChild()
append()
prepend()
removeChild()
remove()
createElement
   
