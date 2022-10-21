import swap from "./swap.js"
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function insertionSort(){
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Insertion Sort<center></h3>'
    sorting.style.color="orange"
    var speed = document.getElementById("speed").value;
    var divno=document.getElementById("bar")
    const n=divno.getElementsByTagName('*').length;
    // console.log("length of bars",n)
    // console.log(n);
    var i,j
    // let x=document.createElement("div");
    // x.innerText="Selection sort"
    // x.style.color="white"
    // document.getElementById("bar").appendChild(x);
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
    com.innerHTML=`<center><h5>Time Complexity :  O(n2)</h5></center>`
}