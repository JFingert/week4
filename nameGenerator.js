firstName = ["Doobie", "Cardinal", "Marbles", "Captain", "Mr.", "Fantasy", "Liza", "Mad", "Honey", "Douglas"];
secondName = ["Master", "Wonder", "Mallow", "Wilter", "Absolute", "Wanderer", "Biscuit", "Fizzle", "Baby", "Special"];
counterOne = 0;
counterTwo = 0;

counterOne = Math.floor((Math.random() * 9) + 1);
counterTwo = Math.floor((Math.random() * 9) + 1);

console.log(firstName[counterOne] + " " + secondName[counterTwo]);