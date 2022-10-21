import swap from "./swap.js"
// const s= require("./swap.js")
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function bubbleSort(){
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Bubble Sort<center></h3>'
    sorting.style.color="orange"
    var speed = document.getElementById("speed").value;
    var divno=document.getElementById("bar")
    const n=divno.getElementsByTagName('*').length;
    var i,j
    for (i = 0; i <n; i++)
    {
        for (j = 0; j < n-i-1; j++)
        {   
            let id="e"+j
            let id2="e"+(j+1)
            let x=document.getElementById(id)
            let y=document.getElementById(id2)
            x.style.backgroundColor="yellow"
            y.style.backgroundColor="yellow"
            // x.style.animationDuration="0.5s"
            // y.style.animationDuration="0.5s"
            // console.log(x.style.height,y.style.height)
            // if (x.style.height>y.style.height)
            if(parseFloat(x.innerHTML)> parseFloat(y.innerHTML))
            {
                swap(j,j+1);
                
            }
            await resolveAfter2Seconds(speed)
            x.style.backgroundColor="white"
            y.style.backgroundColor="white"
        }
      
    }
    
    com.innerHTML=`<center><h5>Time Complexity :  O(n2)</h5></center>`
}