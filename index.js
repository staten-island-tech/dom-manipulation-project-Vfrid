const DOMSelectors ={
    heading: document.getElementById("head1"),
    // or I could use querySelector instead of getElementById, if I wanted to select the object by its ID i would put # in front of the id, if i want to select
// an object by its class I would put a . in front of the name of the class, if i want to select all objects in the class I would use querySelectorAll
    form: document.querySelector("#form"),
    first_name: document.querySelector(".first_name"),
    first: document.querySelector(".ag-courses-item_title"),
};
console.log(DOMSelectors.heading);

function changetext(text){
    text.textContent = "This text got changed"
    text.style.color = "blue"
};
console.log(DOMSelectors.form);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.first_name.value);
    function(first){
        first.textContent = DOMSelectors.first_name.value
    }
});