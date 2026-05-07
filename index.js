const text=document.getElementById("input-txt");
let inputButton= document.getElementById("save-btn");
const ulEl=document.getElementById("ul-el");
let myLeads=[];

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLead(myLeads);
}
inputButton.addEventListener("click", function(){
        myLeads.push(text.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLead(myLeads);
        text.value="";
 }
)


function renderLead(myLeads){
    let listItems = "";
    for(let i=0;i<myLeads.length;i++){
        listItems +=
        `<li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]} 
            </a>
        </li>`;
    }
    ulEl.innerHTML =listItems
}



// let boxContent=document.getElementById("box");
// boxContent.addEventListener("click", function(){
//     console.log(boxContent.textContent);
// })