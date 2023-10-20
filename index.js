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
    // const fir = DOMSelectors.first_name.value;
    // const dobby = DOMSelectors.dob.value;
    // console.log(fir, dobby);
    // return `
    // <div class="box">
    //     <div class="item">
    //       <div class="item_link">
    //         <div class="item_bg"></div>
    
    //         <div class="item_title">
    //           <p class="name_label"> First Name:</p>
    //           <p class="name_title">${fir} </p>
    //         </div>
    
    //         <div class="item_date_box">
    //           DOB:
    //           <span class="item_date"> ${dobby}
    //           </span>
    //         </div>
            
    //       </div>
    //     </div>
    //     <form action="" id="del_form" class="del_form_container">
    //             <input type="submit" value="Delete" class="delete_btn"/>
    //         </form>
    //   </div>`
    return `<div>
    <p>
    ${DOMSelectors.first_name.value}</p></div>`
}



const card = createcard();

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(DOMSelectors.first_name.value);

    DOMSelectors.container.insertAdjacentHTML(
        "afterbegin", card
    )    
  });

// DOMSelectors.delete_form.addEventListener("click", function(event){
//     event.currentTarget.parentNode.remove();
// })

// DOMSelectors.form.addEventListener("submit", function(event){
//     event.preventDefault();
//     let first_name = DOMSelectors.first_name.value;
//     let dobby = DOMSelectors.dob.value;

//     console.log(first_name, dobby);

//     const box = document.createElement("div");
//     box.classList.add("box");

//     const item = document.createElement("div");
//     item.classList.add("item");
//     box.appendChild(item);

//     const item_link = document.createElement("div");
//     item_link.classList.add("item_link");
//     item.appendChild(item_link);

//     const item_bg = document.createElement("div");
//     item_bg.classList.add("item_bg");
//     item_link.appendChild(item_bg);

//     const item_title = document.createElement("div");
//     item_title.classList.add("item_title");
//     item_link.appendChild(item_title);
    
//     const name_label = document.createElement("p");
//     name_label.textContent = "First Name:"
//     name_label.classList.add("name_label");
//     item_title.appendChild(name_label);

//     const name_title = document.createElement("p");
//     name_title.textContent = first_name;
//     name_title.classList.add("name_title");
//     item_title.appendChild(name_title);
    

//     const item_date_box = document.createElement("div");
//     item_date_box.textContent = "Date Of Birth: ";
//     item_date_box.classList.add("item_date_box");
//     item_link.appendChild(item_date_box);

//     const item_date = document.createElement("span");
//     item_date.textContent = dobby;
//     item_date.classList.add("item_date");
//     item_date_box.appendChild(item_date);

//     const delete_btn = document.createElement("button");
//     delete_btn.classList.add("delete_btn");
//     delete_btn.textContent = "Delete";
//     box.appendChild(delete_btn);

//     DOMSelectors.container.appendChild(box);

//     delete_btn.addEventListener("click", function(event){
//         event.currentTarget.parentNode.remove();
//     })
// })