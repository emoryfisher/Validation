var contentEle = document.body.querySelector(".content");
var inputBox = document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var call = document.body.querySelector(".call");

function makeLogin(){
   document.body.querySelector(".submit").addEventListener("click", function(){
  

     if(inputBox.value == "coolStudent123"){
   
       call.makeHome();
    call.makeabout();
  call.makeinteract();
  
     }else{  
    messageBox.innerHTML="Incorrect";
  }
    
  }
);


}

  
function makeHome(){
  contentEle.innerHTML="Home Page"
  
 var homebutt=document.createElement("button");
   homebutt.classList.add("homebutt");

document.body.querySelector(".homebutt").addEventListener("click", function(){
  makeHome();
});
}


function makeAbout(){
  var aboutbutt=document.createElement("button");
  aboutbutt.classList.add("aboutbutt");
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  
  var head2Ele = document.createElement("h3");
  head2Ele.innerHTML="Emory"
  contentEle.appendChild(headEle);
 contentEle.appendChild(head2Ele);
  document.createElement("aboutButt")

  document.body.querySelector(".aboutButt").addEventListener("click", function(){
  makeAbout();
});

}

function makeinteract(){
 var interactbutt=document.createElement("button");
  interactbutt.classList.add("interactbutt");
  
  
  var buttonint = document.createElement("button");
  buttonint.innerHTML= "button";
  document.body.appendChild(buttonint);

  var counter = 0
buttonint.addEventListener("click", function(){
  buttonint=counter+1 
  
  var displaycounter = document.createElement("hl");
  displaycounter.innerHTML="counter"
  document.CreateElement("button")
});
document.body.querySelector(".interactButt").addEventListener("click", function(){
  makeinteract();
});
}







makeLogin();