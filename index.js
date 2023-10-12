const DOMSelectors ={
    heading: document.getElementById("head1"),
    // or I could use querySelector instead of getElementById, if I wanted to select the object by its ID i would put # in front of the id, if i want to select
// an object by its class I would put a . in front of the name of the class, if i want to select all objects in the class I would use querySelectorAll
    nothing: document.querySelector(".emptydiv"),
};
console.log(DOMSelectors.heading);
console.log(DOMSelectors.nothing);

function changetext(text){
    text.textContent = "This text got changed"
    text.style.color = "blue"
};

changetext(DOMSelectors.heading)