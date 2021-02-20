//learning javascript
//functions:
//ex: function add() {}
// use console.log, pois alert é para user

//exemplos

let password="chicken";
if (password== "pig" || password=="chicken"){
    console.log("password correct")
}


//ou

let password="chicken";
if (password== "pig"){
    console.log("correct");
}
else if (password=="chicken"){
    console.log("correct");
}
// usar || ou && para substituir if/else

//usando arrays

let shopList = ["banana", "egg", "bread"];
shopList.push("carrot") //add carrot at the end
shopList.pop() //remove from end
shopList.shift()//remove from start
// """" .unshift()// add to start

concat
//ex
const room = ["bed, TV, wardrobe"];
const bathroom=["shower","sink"];
console.log(room.concat(bathroom));

// look for a value
includes

room.includes("bed", 1) //i can see if the element is in one exactly position); //found as true or false

room.indexOf("bed") //search for value and return the index where found it

//size of the text, arrays, etc 
room.length //ex

room.reverse() // will reverse all the list

room.join('.')// will put every thing into a same string separated by "."

room.splice(start(posição do elemento), delete, add);//add a value or delete in the middle of the array
//use


//sort
room.sort(); //turns all the elements into strings, so it gets worng when using number



