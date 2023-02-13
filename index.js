let fifth=document.getElementById("fifth");
let fourth= document.getElementById("fourth");
let third= document.getElementById("third");
let second= document.getElementById("second");
let first= document.getElementById("first");
let val;
let input= document.getElementById("input");
let button = document.getElementsByTagName("button");
button[0].addEventListener("click",getVal);



function getVal(){
val= document.getElementById("input").value;
if(val>99999||val<0){alert("Enter Value Between 0 to 99999");
}
console.log(val);
Timer();

}

function Timer(){

    for (let i=0; i<=val; i++) {
        task(i);
     }
}

function task(i) {
    setTimeout(function() {
        if(first.innerText==9){
            // return;
        }
        if(second.innerText==9){
            first.innerText++;
            second.innerText=0;
        }
        if(third.innerText==9){
            second.innerText++;
            third.innerText=0;
        }
        if(fourth.innerText==9){
            third.innerText++;
            fourth.innerText=0;
        }
        if(fifth.innerText==9){
            fourth.innerText++;
            fifth.innerText=0;
        }
        // fourth.innerText=
        
        fifth.innerText=i%10;
        fourth.innerText=Math.floor((i/10))%10;
        third.innerText=Math.floor((i/100))%10;
        second.innerText=Math.floor((i/1000))%10;
        first.innerText=Math.floor((i/10000))%10;
        
    }, 1000 * i);
  }





