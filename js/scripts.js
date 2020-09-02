// alert("JS Loaded"); // Check if file is loading.

const catFact = document.getElementById('cat-fact'); // Defining HTML Element
const userSubmit = document.getElementById('user-submit'); // Defining HTML Element
//console.log(catFact); // grabbing correct Element
//console.log(userSubmit); // grabbing correct Element

const giveCatFact = () => {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => {return response.json();})
    .then (data => {
        console.log(data); // Ensuring the correct data is coming through
        const aFact = data.all[Math.floor(Math.random() * data.all.length)];
        console.log(aFact);
        const catFactDisplay = aFact.text;
        const userSubmittedFN = aFact.user.name.first;
        const userSubmittedLN = aFact.user.name.last;
        const spaceDivider = " ";
        const firstName = userSubmittedFN.concat(spaceDivider);
        catFact.textContent = catFactDisplay;
        userSubmit.textContent = firstName.concat(userSubmittedLN);
    })
    .catch(error => {console.log(error); });
}

giveCatFact();
setInterval(giveCatFact, 5000)