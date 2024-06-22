let btns = document.querySelectorAll("button");
let input = document.querySelector("input");

let string = "";
const operators ="+-*/%";

btns.forEach(button => {
    button.addEventListener("click",(btn)=>{
        const btnText = btn.target.innerText;
        if(btnText == "="){
            console.log(string)
            string = eval(string);
            input.value = string;
        }
        else if(btnText == "AC"){
            string = "";
            input.value = string;
        }
        else if (btnText == "DEL"){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            if(operators.includes(string.slice(-1))&& operators.includes(btnText)){
                string = string.slice(0,-1) + btnText;
            }else{
                string += btnText;
            }
            input.value = string;
        }
    })
});

