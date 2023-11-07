// copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

// Declare and instantiate a variable to hold your name. Identify the variable as "fullName".
let fullName = "Victor J. Brun";

// Declare and instantiate a variable to hold the current year. Identify the variable as "currentYear".
let currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path (location) and file name of the image 
// that you placed in the images folder as a string. Identify the variable as "profilePicture".
let profilePicture = "images/brun_family.jpeg"

// Use the document.getElementById() method to get the HTML element with the id of name and store 
// it in a const variable named "nameElement".
const nameElement = document.getElementById("name");

//Use the document.getElementById() method to get the HTML element with the id of food and store it 
// in a const variable named "foodElement".
const foodElement = document.getElementById("food");

//Use the document.querySelector() method to get the element with the id of "year" and store it in 
//a variable named "yearElement".
let yearElement = document.querySelector("#year");

//Use any viable method to get the profile image element stored into a variable named "imageElement".
let imageElement = document.querySelector("img");

//Assign the nameElement's innerHTML property the fullName variable value.
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;

// Use the setAttribute method to set the src property of the image element and set its value to the file
// path variable set in Step 2.
imageElement.setAttribute("src", profilePicture);

// Use the setAttribute method to set the alt property of the image element and set its value to equal 
//'Profile image of [Insert Name Variable]' where the name variable comes from Step 2. Always use a 
//template literal to create the string.
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

//Declare an array variable to hold your favorite foods.
let favoriteFoods = ["Pizza", "Pasta", "Ice Cream", "Sushi", "Burrito"];

// Modify the HTML element with the id of food to display your favorite foods array. 💡Remember that 
//you set a variable named foodElement in Step 3 to reference the element with the id of food.
foodElement.innerHTML = favoriteFoods.join(", ");

// Declare and instantiate a variable to hold another single favorite food item.
let favoriteFoodItem = "Burger";

// Add the value stored in this new variable to your favorite food array.
favoriteFoods.push(favoriteFoodItem);

//Append the new array values onto the displayed content of the HTML element with the id of food 
//using a += operator and a <br> (line break character) to provide a line break as shown in Figure 2.
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

//Remove the first element in the favorite food array.
favoriteFoods.shift();

// Again, append the array output showing the modified array, using a line break as shown in step 5.5.
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

//Remove the last element in the favorite food array.
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array. Hint: Step 5.5.
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");




