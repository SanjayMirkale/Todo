const input=document.getElementById("input");
const addbtn=document.getElementById("btn");
const parent=document.querySelector(".parent");

let userinput;

const todo=()=>{
    userinput=input.value;
    const creation=()=>{

        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        const para=document.createElement("p");
        const delbtn=document.createElement("button");
        para.className="paragraph";
        delbtn.className="delbtn";

        const insertion=()=>{
        checkbox.type="checkbox";
        para.innerText=userinput;
        delbtn.innerText="✖";
        }

        checkbox.addEventListener("change", () => {
            if(checkbox.checked) {
                para.style.textDecoration="line-through";
            }else{
                para.style.textDecoration="none";
            }
        });

        const appending=()=>{
            parent.append(li);
            li.append(checkbox);
            li.append(para);
            li.append(delbtn);
            input.value="";
        }
        
        //deleting li
        delbtn.addEventListener("click",()=>{
            li.remove();
        })

        insertion();
        appending();
    }
    creation();
}
addbtn.addEventListener("click",todo);

