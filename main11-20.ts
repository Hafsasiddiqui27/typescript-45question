// ****************QUESTION #11****************************
// Names: Store the names of a few of your friends in a array called names. Print each person’s name 
// by accessing each element in the list, one at a time.
// let names:string[]= ["owais", "hadi", "zoni"];
// for (let i=0; i<names.length; i++){;
// console.log(names[i])};

// // ****************QUESTION #12****************************
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each
//  person’s name, print a message to them. The text of each message should be the same,
//   but each message should be personalized with the person’s name.
// let names:string[]= ["owais", "hadi", "zoni"];
// for (let i=0; i<names.length; i++){;
// console.log(`Hi!! ${names[i]}, would you like to take some bread..`)};
// names.forEach(name => {
//     console.log(`Hi!! ${name}, would you like to take some bread..`)});
    
// // ****************QUESTION #13****************************
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements
//   about these items, such as “I would like to own a Honda motorcycle.”
// let car : string[]=["Honda", "Civic", "Toyota"];
// for(let i=0; i<car.length; i++){
//     console.log([i] +" " + "I would like to own a " + car[i]);
//     }
// ****************QUESTION #14****************************
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then use your
//   list to print a message to each person, inviting them to dinner.
// let guest_list:string[]=["Owais", "Jahanzaib", "Laiba"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(guest_list[i] + " " + ", You are invited for dinner.");
    
// }

// ****************QUESTION #15****************************
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need
//  to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program
//  stating the name of the guest who can’t make it.
 // • Modify your list, replacing the name of the guest who can’t make it with the name of the 
// new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

// let guest_list:string[]=["Owais", "Jahanzaib", "Laiba"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(guest_list[i] + " " + ", You are invited for dinner.");
//     }
//     console.log(guest_list[2] + " " + "sorry you cant come..");
//  guest_list.splice(2,1,"Hafsa")
//  console.log(guest_list);
 
//     guest_list.forEach(guest => {
//         console.log(guest + " "+ ", You are invited for dinner.");
//          })
    

// ****************QUESTION #16****************************
// More Guests: You just found a bigger dinner table, so now more space is available. Think of
//  three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. • Print a new set of 
// invitation messages, one for each person in your list.
// 
// let guest_list:string[]=["Owais", "Jahanzaib", "Laiba"];
// guest_list.splice(2,1,"Hafsa")
//  console.log(guest_list);
//  console.log("Hey friends, we got bigger table for dinner");
//  guest_list.unshift("A.Hadi");
//  guest_list.splice(2,0,"Laiba");
//  guest_list.push("Abbo");
// console.log(guest_list);
//  for(let i=0; i<guest_list.length; i++){
//     console.log(guest_list[i]+ " "+ ", You are invited for dinner.");
    //   }
 
 
// ****************QUESTION #17****************************
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let guest_list2: string[]= ['A.Hadi', 'Owais', 'Laiba', 'Jahanzaib', 'Hafsa', 'Abbo'];
// console.log("Alas!!, I can invite only 2 prsons:(");
// while(guest_list2.length>2){
//     let removeGuest= guest_list2.pop()
//     console.log(removeGuest + " " +"you are not invited for dinner");
//     }
//     console.log(guest_list2);
//     guest_list2.forEach(guest=>{
//         console.log(`${guest}, you are invited for dinner.`);
//          })
// // Remove the last two names from your list,
//     guest_list2.splice(0, guest_list2.length)
//     console.log(guest_list2);
    
    // ****************QUESTION #18****************************
//     Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// let cities : string[] = ["karachi","faislabad", "lahore", "islamabad", "multan",]
// // • Print your array in its original order.
// console.log(cities);

// // • Print your array in alphabetical order without modifying the actual list.
// console.log(cities.slice().sort());
// // • Show that your array is still in its original order by printing it.
// console.log(cities);

// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log(cities.slice().sort().reverse());
// // • Show that your array is still in its original order by printing it again.
// console.log(cities);
// // • Reverse the order of your list. Print the array to show that its order has changed.
// cities.reverse();
// console.log(cities);

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// cities.reverse();
// console.log(cities);

// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log(cities.slice().sort())
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log(cities.slice().sort().reverse());
// console.log(cities);

// ****************QUESTION #19****************************

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
// indicating the number of people you are inviting to dinner.

// let guest_list2: string[]= ['A.Hadi', 'Owais', 'Laiba', 'Jahanzaib', 'Hafsa', 'Abbo'];
// let guestLength:number= guest_list2.length;
// console.log(`We are inviting ${guestLength} guest to the dinner.`);

// ****************QUESTION #20****************************
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities,
//  languages, or anything else you’d like. Write a program that creates a list containing these items.
// let cities : string[] = ["karachi","faislabad", "lahore", "islamabad", "multan",];
// cities.forEach(city => {
//     console.log(`\n ${city}`);
//     })
