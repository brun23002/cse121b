/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Victor J. Brun",
    photo:"images/brun_family.jpeg",
    favoriteFoods: [
        "Pizza", "Burger", "Pasta"
    ],
    hobbies:[
        "Reading", "Hiking", "Gardening"
    ],
    placesLived: [

    ],

}
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "New York", length: "5 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Los Angeles", length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Chicago", length: "2 years"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
let fElement = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(function(food){
    let liElement = document.createElement("li");
    liElement.textContent = food;
    fElement.appendChild(liElement);
});

/* Hobbies List */
let hobbyElement = document.querySelector("#hobbies");
myProfile.hobbies.forEach(function(hobby){
    let liElement = document.createElement("li");
    liElement.textContent = hobby;
    hobbyElement.appendChild(liElement);
});

/* Places Lived DataList */
let dlElement = document.querySelector("#places-lived");
myProfile.placesLived.forEach(function(place) {
    let dtElement = document.createElement("dt");
    dtElement.textContent = place.place;
    dlElement.appendChild(dtElement);

    let ddElement = document.createElement("dd");
    ddElement.textContent = place.length;
    dlElement.appendChild(ddElement);
});

