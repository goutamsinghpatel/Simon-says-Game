let gamesq=[];
let usersq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let body=document.querySelector("body");

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){

if(started==false){

   started=true;
   levelup();

}   



})
function btnflash(btn){
    btn.classList.add("flash");
setTimeout(function(){


    btn.classList.remove("flash")
    
    },80)


}


function levelup(){
usersq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randam=Math.floor(Math.random()*3)
    let randcolor=btns[randam]; 
    let randbtn=document.querySelector(`.${randcolor}`)
gamesq.push(randcolor)
    btnflash(randbtn);

}
function checklevel(idx1){
   
    if(usersq[idx1]==gamesq[idx1]){
       if(usersq.length==gamesq.length){
        setTimeout(levelup,800)
       }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#bcab43";
   
        },150)
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start `;
      reset();
    }
}


function btnpress(){
    let btn=this;

  btnflash(btn);


 let usercolor =btn.getAttribute("id")
 
 usersq.push(usercolor);
 checklevel(usersq.length-1);
}
let allbtn=document.querySelectorAll(".btn")

for(btn of allbtn){

btn.addEventListener("click",btnpress)

}
function reset(){
    started=false;
    gamesq=[];
    usersq=[];
    level= 0;
}







