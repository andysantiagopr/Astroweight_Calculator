
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
    
    const selectEl = document.getElementById("planets"); //Best to keep outside the loop if I want to add other functionality later on.

    //Dropdown menu// 
    planets.forEach(planet => { //.forEach will loop through each of the elements in planet. This case it would call the array inside the array. 
        const name = planet[0]; //This makes sure the planet's name is used [0].
        const optionEl = document.createElement("option"); //Creates an element for the HTML file, in this case an option which would go under the select using the .appendChild later. 
        optionEl.value = name; //This is the value you are giving JS internally.
        optionEl.textContent = name; //This is what the user sees. 
        selectEl.appendChild(optionEl); //Makes the option fall under select in HTML.
    });


    //Calculator Function//
    function calculateWeight(weight, planetName) { 
            for (let planet of planets) {
                if (planet[0] === planetName) {
                    return planet[1] * weight;
                }
        } } 

    function handleClickEvent(e) {
        let userWeight = Number(document.getElementById("user-weight").value);
        let planetName = document.getElementById("planets").value; 
        let result = calculateWeight(userWeight, planetName); 

        if (!isNaN(userWeight)) {
        document.getElementById("output").textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;}
        else {
        document.getElementById("output").textContent = 'Invalid input';
        }
    } 
        document.getElementById("calculate-button").onclick = handleClickEvent;
