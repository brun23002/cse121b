/* W05: Programming Tasks */

/* Step 3: Declare and initialize global variables */
// Declare a const variable named templesElement that references the HTML div element
const templesElement = document.querySelector('div');

// Declare a global empty array variable to store a list of temples named templeList
let templeList = [];

/* Step 4: async displayTemples Function */
// Declare a function expression using const named displayTemples
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create an HTML <article> element
        const articleElement = document.createElement('article');

        // Create an HTML <h3> element and add the temple's templeName property to this new element
        const h3Element = document.createElement('h3');
        h3Element.textContent = temple.templeName;

        // Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute
        const imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        // Append the <h3> element and the <img> element to the <article> element as children
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        // Append the <article> element to the global templesElement variable declared in Step 2
        templesElement.appendChild(articleElement);
    });
};





/* Step 5: async getTemples Function using fetch()*/
//Create another function expression called getTemples. Make it an async anonymous, arrow function
const getTemples = async () => {
    //In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    //Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
    templeList = await response.json();
        
    //The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
    displayTemples(templeList);  
};


/* Step 6: reset Function */
//Declare a function expression named reset that clears all of the <article> elements from the templesElement.
const reset = () => {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};


/* Step 7: sortBy Function */
//Declare a function expression named sortBy.The function should accept a argument in a parameter named temples.
//In this function, first call the reset function to clear the output.

const sortBy = (temples) => {

    reset();

    //Define a variable named filter that obtains the value of the HTML element with the ID of sortBy (The pull-down menu).
    const filter = document.querySelector('#sortBy').value;

    // Use a switch statement that uses the filter value as the selector responding to four cases
    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter. Just use temples as the argument
            displayTemples(temples);
            break;
        //default:
          //  console.log('Invalid filter option');
    }
};





/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(templeList));


getTemples();