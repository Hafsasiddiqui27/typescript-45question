// // ****************QUESTION #31****************************
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let userName: string[] = ["owais", "jahanzaib", "rayan", "admin", "a.rafay"];
// if (userName.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   userName = [];
//   console.log("All username have been removed ," + userName.length);
// }
// // ****************QUESTION #32****************************
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users: string[] = ["alice", "robert", "joHn", "mice", "michale"];
// let new_users: string[] = ["Robert", "fahad", "John", "mr.k", "hamza"];
// new_users.forEach((new_user) => {
//   let lowerCase: string = new_user.toLowerCase();
//   if (current_users.map((c_user) => c_user.toLowerCase())
//     .includes(lowerCase)) {
//     console.log(` ${new_user}, you will need to enter a new username`);
//   } else {
//     console.log(` ${new_user} is available.`);
//   }
// });
// // ****************QUESTION #33****************************
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let num of numbers) {
//   let ordinalNumber: string;
//   if (num === 1) {
//     ordinalNumber = "st";
//   } else if (num === 2) {
//     ordinalNumber = "nd";
//   } else if (num === 3) {
//     ordinalNumber = "rd";
//   } else {
//     ordinalNumber = "th";
//   }
//   console.log(`${num}${ordinalNumber}`);
// }
// // ****************QUESTION #34****************************
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let pizza:string[]=["BBQ", "Tikka", "Fajita"];
// for (let flavours of pizza){
//     console.log("I like " + flavours + " " +"flavoured pizza.");
// }
// console.log("I really love pizza!");
// ****************QUESTION #35****************************
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animals = ["cow", "goat", "sheep"];
// for(let i=0; i<animals.length; i++){
//     console.log("A " + animals[i]+ " is herbivores animal.");
// }
// console.log("These all are herbivores animals!");
// ****************QUESTION #36****************************
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string,text:string){
// console.log(`A ${size} size shirt, ${text} print on it`);
// }
// make_shirt("Medium","I LOVE PAKISTAN")
// // ****************QUESTION #37****************************
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(
//   size: string = "Large",
//   text: string = "I love Typescript"
// ) {
//   console.log(`A ${size} size shirt, ${text} print on it.`);
// }
// make_shirt();
// make_shirt("Medium");
// make_shirt("XXL", "I LOVE PAKISTAN");
// // ****************QUESTION #38****************************
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city: string, country: string = "Default") {
//   console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi", "Pakistan");
// describe_city("Jeddah", "Saudia");
// describe_city("Chain");
// // ****************QUESTION #39****************************
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city: string, country: string):string{
//     return `${city}, ${country}`;
// }
// console.log(city_country("KARACHI", "PAKISTAN"));
// console.log(city_country("TOKYO", "JAPAN"));
// console.log(city_country("MAKKAH", "SAUDIA"));
// // ****************QUESTION #40****************************
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two
//  pieces of information. Use the function to make three dictionaries representing different albums. Print each return 
//  value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() 
//  that allows you to store the number of tracks on an album. If the calling line includes a value for the number of 
//  tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks
//   on an album.
// function make_album(artist:string, title:string, tracks?:number){
//     let musicAlbum:{artist:string, title:string, tracks?:number}={
//         artist:artist,
//         title:title
//     }
//     if(tracks){
//     musicAlbum.tracks=tracks;}
//     return musicAlbum
// }
// console.log(make_album("artist1", "album title1"));
// console.log(make_album("artist2", "album title2"));
// console.log(make_album("artist3", "album title3", 20));
// ****************QUESTION #41****************************
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let mag_Name:string[]=["alis","bunion","devil","lion"]
// function show_magicians(magician:string[]){
//     magician.forEach(element => {
//         console.log(element);
//          });
// }
// show_magicians(mag_Name)
// // ****************QUESTION #42****************************
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let mag_Name:string[]=["alis","bunion","devil","lion"]
// function make_great(magicianArray:string[]){
//     for(let i=0; i<magicianArray.length; i++){
//         mag_Name[i]="The Great " + magicianArray[i]
//     }
// }
// function show_magicians(magician:string[]){
//     magician.forEach(element => {
//         console.log(element);
//          });
// }
// make_great(mag_Name)
// show_magicians(mag_Name)
// // ****************QUESTION #43****************************
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// let mag_Name:string[]=["alis","bunion","devil","lion"]
// function copyArray(arr:string[]){
//     return[...arr]
// }
// function make_great(magicianArray:string[]){
//     for(let i=0; i<magicianArray.length; i++){
//         magicianArray[i]="The Great " + magicianArray[i]
//     }
// }
// function show_magicians(magician:string[]){
//     magician.forEach(element => {
//         console.log(element);
//          });
// }
// const copiedArray=copyArray(mag_Name)
// make_great(copiedArray)
// console.log("this is original array");
// show_magicians(mag_Name)
// console.log("\n\n\nthis is modified copy array");
// show_magicians(copiedArray)
// // ****************QUESTION #44****************************
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(item) {
    console.log("Making your sandwich with:");
    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your meal!");
}
;
makeSandwich(["ham", "cheese", "lettuce"]);
makeSandwich(["kebab", "onion"]);
makeSandwich(["jelly", "butter"]);
// // ****************QUESTION #45****************************
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
let answer = storeCarInfo("honda", "98643", { color: "black" }, { features: ["navigation", "power window"] });
console.log(answer);
export {};
