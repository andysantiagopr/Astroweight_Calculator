
    var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];
    
    const selectEl = document.getElementById("planets"); //Best practice to keep this variable outside the loop. 

    planets.forEach(planet => { //.forEach will loop through each of the elements in planet. This case it would call the array inside the array. 
        const name = planet[0]; //This makes sure the planet's name is used [0].
        const optionEl = document.createElement("option"); //Creates an element for the HTML file, in this case an option which would go under the select using the .appendChild later. 
        optionEl.value = name; //This is what JS receives.
        optionEl.textContent = name; //This is what the user sees. 
        selectEl.appendChild(optionEl); //Makes the option fall under select in HTML.
    });


    function calculateWeight(weight, planetName) { 
        for (let planet of planets) {
            if (planet[0] === planetName) {
                return planet[1] * weight;
            } else {
                return "Planet not found in our system!"
            }
        }
    } 

    function handleClickEvent(e) {
        let userWeight = Number(document.getElementById("user-weight").value);
        let planetName = document.getElementById("planets").value; 
        let result = calculateWeight(userWeight, planetName); 
        document.getElementById("output").textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
    } 
        document.getElementById("calculate-button").onclick = handleClickEvent;

        
        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 


        // Bonus Challenges 
        // 8. Reverse the drop down order so that the sun is first.