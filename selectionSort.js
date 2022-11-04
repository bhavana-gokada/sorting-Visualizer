import swap from "./swap.js"
// const s= require("./swap.js")
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function selectionSort(){
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Selection Sort<center></h3>'
    sorting.style.color="orange"
    var speed = document.getElementById("speed").value;
    var divno=document.getElementById("bar")
    const n=divno.getElementsByTagName('*').length;
    
    var scale=document.getElementById("scale");
    document.getElementById("scale").innerHTML="";
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p3.style.backgroundColor="yellow"
    p3.style.margin="8px"
    p3.style.padding="1px"
    p3.style.height="10px";
    p3.style.width="10px";
    p.style.backgroundColor="red"
    p.style.margin="8px"
    p.style.padding="1px"
    p.style.height="10px";
    p.style.width="10px";
    p2.innerHTML=`Elements compared`
    p2.style.color="white"
    p4.innerHTML=`Minimum element`
    p4.style.color="white"
    scale.appendChild(p);
    scale.appendChild(p4);
    scale.appendChild(p3);
    scale.appendChild(p2);
    scale.style.display="flex"
    scale.style.justifyContent="center"


    var i,j
    for (i = 0; i < n-1; i++)
    {
        let id="e"+i;
        let x=document.getElementById(id)
        let min_idx=i;
        x.style.backgroundColor="yellow"
        for (j = i + 1; j < n; j++){
            let tempid="e"+j
            let tempele=document.getElementById(tempid);
            tempele.style.backgroundColor="yellow"
            await resolveAfter2Seconds(speed)
            let temp="e"+min_idx
            let tmp=document.getElementById(temp)
            console.log(parseInt(tempele.innerHTML),parseInt(tmp.innerHTML))
            if(parseInt(tempele.innerHTML)<parseInt(tmp.innerHTML)){
                if(min_idx!=i)    
                    tmp.style.backgroundColor="white";
                min_idx=j
                tempele.style.backgroundColor="red"
                // console.log(x.style.height,y.style.height)
            }
            else{
                tempele.style.backgroundColor="white"
            }
            await resolveAfter2Seconds(speed)
        }
        swap(min_idx,i);
        await resolveAfter2Seconds(speed)
        let id2="e"+min_idx            
        let y=document.getElementById(id2)
        y.style.backgroundColor="white"
        x.style.backgroundColor="white"
    }
    com.innerHTML=`<center><h5>Best Time Complexity :  O(n^2)<br>Average Time Complexity :  O(n^2)<br>worst Time Complexity :  O(n^2)<br></h5></center>`
}