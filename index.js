const text=document.getElementById("input-txt");
let inputButton= document.getElementById("save-btn");
const ulEl=document.getElementById("ul-el");

inputButton.addEventListener("click", function(){
    let myLeads=[];
    myLeads.push(text.value);
    renderLead(myLeads);
    text.value="";
 })


function renderLead(myLeads){
    for(let i=0;i<myLeads.length;i++){
        ulEl.innerHTML +=
        `<li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]} 
            </a>
        </li>`;
    }
}



// let boxContent=document.getElementById("box");
// boxContent.addEventListener("click", function(){
//     console.log(boxContent.textContent);
// })