// ****************QUESTION #21****************************
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// interface student{
//     myName: string,
//     age: number,
//     education: string
// }
// let student = {
//     myName: "Hafsa",
//     age: 27,
//     education: "DPT"
// }
// console.log(student);
export {};
// ****************QUESTION #22****************************
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let cities : string[] = ["karachi","faislabad", "lahore", "islamabad", "multan",];
// console.log(cities[6],);//intentional error
// console.log(cities[3]);
// ****************QUESTION #23****************************
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// *************************test1
// let place = "karachi";
// console.log("place == 'karachi'? I predict True.")
// console.log(place ==  "karachi");
// // *************************test2
// console.log("place == 'Karachi'? I predict True.")
// console.log( place.replace(/\b\w/g, c=>c.toUpperCase()) == "Karachi");
// // **************************test3
// console.log("place == 'KARACHI'? I predict True.")
// console.log(place.toUpperCase() === "KARACHI");
// // **************************test4
// console.log("place includes (h) I predict True.")
// console.log(place.includes("h"));
// // **************************test5
// console.log("place.length > 6? I predict True.")
// console.log(place.length > 6);
// // *************************test6
// console.log("place == 'Karachi'? I predict False.")
// console.log(place ==  "Karachi");
// // *************************test7
// console.log("place == 'Karachi'? I predict False.")
// console.log( place.toLowerCase() == "Karachi");
// // **************************test8
// console.log("place == 'KARACHI'? I predict False.")
// console.log(place.toUpperCase() === "Karachi");
// // **************************test9
// console.log("place includes (z) I predict False.")
// console.log(place.includes("z"));
// // **************************test10
// console.log("place.length > 8? I predict False.")
// console.log(place.length > 8);
// ****************QUESTION #24****************************
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// let mobile = "iphone";
// console.log("mobile = iphone");
// console.log(mobile === "iphone");
// console.log("mobile = android");
// console.log(mobile === "android");
// console.log("mobile != iphone");
// console.log(mobile !== "iphone");
// • Tests using the lower case function
// let fruit = "APPLE";
// console.log(`lowercase: ${fruit.toLowerCase()}`);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num1= 5;
// let num2= 9;
// console.log("num1 = num2: False");
// console.log(num1 == num2);
// console.log("num1 !== num2 : True");
// console.log(num1 != num2);
// console.log("num1 > num2 : False");
// console.log(num1 > num2);
// console.log("num1 < num2 : True");
// console.log(num1 < num2);
// console.log("num1 <= num2 : True");
// console.log(num1 <= num2);
// console.log("num1 >= num2 : False");
// console.log(num1 >= num2);
// • Tests using "and" and "or" operators
// let num1:number=5;
// let num2:number=8;
// // ***************AND OPERATOR
// console.log("5 < 8 && 8 > 5");
// console.log(num1 < num2 && num2 > num1);
// console.log("5 < 8 && 8 < 5");
// console.log(num1 < num2 && num2 < num1);l
// // **************OR OPERATOR
// console.log("5 < 8 || 8 > 5");
// console.log(num1 < num2 || num2 > num1);
// console.log("5 < 8 || 8 < 5");
// console.log(num1 < num2 || num2 < num1);
// • Test whether an item is in a array
// let cities : string[] = ["karachi","faislabad", "lahore", "islamabad", "multan",];
// console.log("Is Karachi lies in an array");
// console.log(cities.includes("karachi"))
// let foundCity= cities.find(findKarachi)
// function findKarachi(x:any){
//     return x == "karachi";
// }
// console.log("city found");
// console.log(foundCity);
// • Test whether an item is not in a array
// let cities : string[] = ["karachi","faislabad", "lahore", "islamabad", "multan",];
// console.log("Is Karachi not lies in an array?");
// console.log(!cities.includes("karachi"));
// ****************QUESTION #25****************************
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// let alien_color: string = "Green";
// if (alien_color=== "Green"){
// console.log("you just earned 5 points")
//      } else{
//         console.log("fail");
//      }
//
// ****************QUESTION #26****************************
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let alien_color: string = "Green";
// if (alien_color=== "Green"){
// console.log("you just earned 5 points for shooting the alien")
//      } else{
//         console.log("you just earned 10 points for shooting the alien");
//      }
//      alien_color = "Red";
// if (alien_color=== "Green"){
// console.log("you just earned 5 points for shooting the alien")
//      } else{
//         console.log("you just earned 10 points for shooting the alien");
//      }
// ****************QUESTION #27****************************
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color: string = "Green";
// // VERSION--01
// if (alien_color === "Green") {
//   console.log("you just earned 5 points for shooting the alien");
// } else if (alien_color === "Yellow") {
//   console.log("you just earned 10 points for shooting the alien");
// } else if (alien_color === "Red") {
//   console.log("you just earned 15 points for shooting the alien");
// }else{console.log("choose right color");
// }
// // VERSION--02
// alien_color = "Yellow";
// if (alien_color === "Green") {
//     console.log("you just earned 5 points for shooting the alien");
//   } else if (alien_color === "Yellow") {
//     console.log("you just earned 10 points for shooting the alien");
//   } else if (alien_color === "Red") {
//     console.log("you just earned 15 points for shooting the alien");
//   }else{console.log("choose right color");
//   }
//   // VERSION--03
//   alien_color = "Red";
//   if (alien_color === "Green") {
//     console.log("you just earned 5 points for shooting the alien");
//   } else if (alien_color === "Yellow") {
//     console.log("you just earned 10 points for shooting the alien");
//   } else if (alien_color === "Red") {
//     console.log("you just earned 15 points for shooting the alien");
//   }else{console.log("choose right color");
//   }
// ****************QUESTION #28****************************
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age: number = 22;
// if (age < 2) {
//   console.log("its a baby");
// } else if (age >= 2 && age < 4) {
//   console.log("its a toddler");
// } else if (age >= 4 && age < 13) {
//   console.log("its a kid");
// } else if (age >= 13 && age < 20) {
//   console.log("its a teenager");
// } else if (age >= 20 && age < 65) {
//   console.log("its a adult");
// }
// else if(age>65){
//     console.log("its elder");}
// ****************QUESTION #29****************************
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits: string[] = ["apple", "mango", "banana"];
// if (favorite_fruits.includes("apple")) {
//   console.log("You really like apple!");
// }
// if (favorite_fruits.includes("mango")) {
//   console.log("You really like mango!");
// }
// if (favorite_fruits.includes("banana")) {
//   console.log("You really like banana!");
// }
// if (favorite_fruits.includes("kiwi")) {
//   console.log("You really like kiwi!");
// }
// if (favorite_fruits.includes("orange")) {
//   console.log("You really like orange!");
//  }
// ****************QUESTION #30****************************
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let userName: string[] = ["owais", "jahanzaib", "rayan", "admin", "a.rafay"];
// for (let i = 0; i < userName.length; i++) {
//   if (userName[i] == "admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${userName[i]}, thank you for logging in again.`);
//   }
// }
