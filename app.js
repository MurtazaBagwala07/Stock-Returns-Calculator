var cP=document.querySelector("#costPrice");
var q=document.querySelector("#quantity");
var curP=document.querySelector("#currentPrice");
var bg=document.querySelector(".wrapper");

var profitloss=document.querySelector("#pro");


var  cost;
var curr;
var quan;

function checkPL(){
    
    var cost=cP.value;
    var curr=curP.value;
    var quan=q.value;
    if(cost<0||curr<0||quan<0){
        alert("Enter Positive values Only");
    }
    else if(cost==""||curr==""||quan==""){
        alert("Fill all the input fields");
    }
    else{
    var diff=curr-cost;
    var pl=diff*quan;
    var per=diff*100/cost;

    if(diff>0){
        profitloss.innerHTML="You Gained : "+per.toFixed(2)+"%. Your total profit is : ₹"+ pl+".";
        profitloss.style.color="green";
        profitloss.style.backgroundColor="white";
    }
    if(diff<0){
        profitloss.innerHTML="You Lost : "+Math.abs(per.toFixed(2))+"%. Your total loss is : ₹"+ Math.abs(pl)+".";
        profitloss.style.color="red";
        profitloss.style.backgroundColor="white";
    }
    if(diff==0){
        profitloss.innerHTML="No Profit , No Loss.";
        profitloss.style.color="black";
        profitloss.style.backgroundColor="white";
    }
    
    if(per<50&&per>-50){
        bg.style.backgroundImage = "url('img/bg-img.jpg')";
    }

    if(per>=50){
        bg.style.backgroundImage = "url('img/confetti.gif')";
    }
    else if(per<=-50){
        bg.style.backgroundImage = "url('img/loss.gif')";
    }
    
}

}
