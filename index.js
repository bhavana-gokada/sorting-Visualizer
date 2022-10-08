import bubbleSort from "./bubbleSort.js"
import selectionSort from "./selectionSort.js"
import insertionSort from "./insertionSort.js"
const sub=document.getElementById("submit")
const bubble=document.getElementById("bubble")
const insertion=document.getElementById("insertion")
const quick=document.getElementById("quick")
const merge=document.getElementById("merge")
const selection=document.getElementById("selection")
sub.addEventListener("click",AcceptArray)

// let arr,speed,
async function AcceptArray(){
    document.getElementById("bar").innerHTML="";
    document.getElementById("sortingname").innerHTML='<h3><center>Array Representation</center></h3>';
    document.getElementById("sortingname").style.color="orange"
    const arr=new Array(document.getElementById("array").value)
    const str=""+arr
    const arrOfStr=str.split(",")
    window.arrOfNum = arrOfStr.map(str => {
        return Number(str);
      });
    //console.log(arrOfNum)
    for(let a in arrOfNum){
        let x=0
        const p = document.createElement("div");
        p.innerText = arrOfNum[a]; 
        console.log(arrOfNum[a])  
        p.style.backgroundColor="white"
        p.style.margin="8px"
        p.style.padding="1px"
        p.style.fontSize="0.85em"
        x=10+arrOfNum[a]*3;
        p.style.height=x+"px"
        p.setAttribute('id','e'+a)
        // console.log("id is ",p.style.id)
        document.getElementById("bar").appendChild(p);
        //console.log(document.getElementById("bar"))
    }
    
    document.getElementById("bar").style.display="flex"
    document.getElementById("bar").style.justifyContent="center"
    selection.addEventListener("click",selectionSort)
    insertion.addEventListener("click",insertionSort)
    bubble.addEventListener("click",bubbleSort)
}