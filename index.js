let myLeads=[];
const text=document.getElementById("input-txt");
const inputButton= document.getElementById("save-btn");
const ulEl=document.getElementById("ul-el");
const tabBtn=document.getElementById("tab-btn");
const deleteBtn=document.getElementById("delete-btn");

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";
    for(let i=0;i<leads.length;i++){
        listItems +=
        `<li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]} 
            </a>
        </li>`;
    }
    ulEl.innerHTML =listItems
}

inputButton.addEventListener("click", function(){
        myLeads.push(text.value);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        text.value="";
 }
)

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tab){
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

deleteBtn.addEventListener("click",function(){
    localStorage.clear();
    myLeads=[];
    ulEl.innerHTML="";
})




// let boxContent=document.getElementById("box");
// boxContent.addEventListener("click", function(){
//     console.log(boxContent.textContent);
// })