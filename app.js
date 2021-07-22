var cP=document.querySelector("#costPrice");
var q=document.querySelector("#quantity");
var curP=document.querySelector("#currentPrice");

var profitloss=document.querySelector("#pro");


var  cost;
var curr;
var quan;

function checkPL(){
    
    var cost=cP.value;
    var curr=curP.value;
    var quan=q.value;
    if(cost<0||curr<0||quan<0||cost==null||curr==null||quan==null){
        alert("Enter Positive values Only");
    }
    else{
    var diff=curr-cost;
    var pl=diff*quan;
    var per=diff*100/cost;

    if(diff>0){
        profitloss.innerHTML="You Gained : "+per.toFixed(2)+"%. Your total profit is : "+ pl+".";
    }
    if(diff<0){
        profitloss.innerHTML="You Lost : "+Math.abs(per.toFixed(2))+"%. Your total loss is : "+ Math.abs(pl)+".";
    }
    if(diff==0){
        profitloss.innerHTML="No Profit , No Loss.";
    }
}

}
