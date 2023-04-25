var modal = document.querySelector('div');
var ShowMore = document.querySelector('button');
var backdrop = document.querySelector('img');
var body = document.querySelector('body');

var text = 'Spending time in nature provides numerous benefits for families, presenting both bonding opportunities and the chance to instill a lifelong love for the outdoors. The Discover the Forest campaign, a public service campaign created by the Ad Council in partnership with the U.S. Forest Service, encourages parents of tweens to experience the outdoors with their family to strengthen their connection with nature and each other. By exploring local parks and forests, parents and caregivers make the forest part of their family story, and introduce their children to an environment where imagination thrives and memories are made.';

body.addEventListener("click",function(event){
    if(event.target.nodeName === "BUTTON"){
        modal.style.display = "flex";
        modal.setAttribute("class","onClick-div");
        modal.innerText = text;
        backdrop.setAttribute("id","brightness-img");
    }
    else{
        if( event.target.nodeName == "IMG"){
            modal.style.display = "none";
        }
    }    
});


