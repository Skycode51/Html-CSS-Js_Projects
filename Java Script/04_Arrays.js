

//let heroes = ["ironman","Thor", "Hulk", "Shaktiman", "spiderman","antman"];

//for (let index = 0; index < heroes.length; index++) {
//    console.log(heroes[index]);
//}

//let foodItems = ["potato", "apple", "litchi", "tomato"];

//foodItems.push("Chips","burger","fries");
//console.log(foodItems);


//let foodItems = ["potato", "apple", "litchi", "tomato"];

//foodItems.pop();
//console.log(foodItems);

//let foodItems = ["potato", "apple", "litchi", "tomato"];
//console.log(foodItems);
//console.log(foodItems.toString());

// Concat(): joins multiple arrays & returns result
//let marvels_heroes = ["thor", "spiderman", "ironman"];
//let dc_heroes = ["superman", "batman"];
//let heroes=marvels_heroes.concat(dc_heroes);
//console.log(heroes);

//unshift: add to start
//let marvels_heroes = ["thor", "spiderman", "ironman"];
//marvels_heroes.unshift("antman");
//console.log(marvels_heroes);


//shift(): delete from start & return

//let marvels_heroes = ["thor", "spiderman", "ironman"];
//let val = marvels_heroes.shift();
//console.log("delete", val);

//slice(): retun a piece of the array 
//let marvels_heroes = ["thor", "spiderman","ironman", "antman", "superman"]
//console.log(marvels_heroes);
//console.log(marvels_heroes.slice(1,3));

//splice(): change original array (add, remove,replace)
let arr = [1,2,3,4,5,6,7];
//arr.splice(2,2,101,102);
//console.log(arr);

//Add Element 
//arr.splice(2,0,101);

//Delet Element 
//arr.splice(3,1);

//Replace Element 
arr.splice(3,1,101);


