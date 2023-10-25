const DOMSelectors ={
    heading: document.getElementById("head1"),
    // or I could use querySelector instead of getElementById, if I wanted to select the object by its ID i would put # in front of the id, if i want to select
// an object by its class I would put a . in front of the name of the class, if i want to select all objects in the class I would use querySelectorAll
    form: document.querySelector("#form"),
    first_name: document.querySelector("#first_name"),
    dob: document.querySelector("#dob_input"),
    container: document.querySelector(".container"),
    delete_form: document.querySelector("#del_form")
};
console.log(DOMSelectors.form);
function createcard(){
    const fir = DOMSelectors.first_name.value;
    const dobby = DOMSelectors.dob.value;
    console.log(fir, dobby);
    return `<div class="box">
        <div class="item">
          <div class="item_link">
            <div class="item_bg"></div>
    
            <div class="item_title">
              <p class="name_label"> First Name:</p>
              <p class="name_title">${fir} </p>
            </div>
    
            <div class="item_date_box">
              DOB:
              <span class="item_date"> ${dobby}
              </span>
            </div>
            
          </div>
        </div>
            <button class="delete_btn">Delete</button>
      </div>`
    
}
function clearinput(){
    DOMSelectors.first_name.value="";
    DOMSelectors.dob.value="";
}
DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();

    DOMSelectors.container.insertAdjacentHTML(
        "afterbegin", createcard()
    )    
    clearinput();
    const delete_btn = document.querySelectorAll(".delete_btn")
    delete_btn.forEach((form)=>form.addEventListener("click", function (x){
        x.currentTarget.parentNode.remove();
}))
  });