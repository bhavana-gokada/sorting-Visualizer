import swap from "./swap.js"
// const s= require("./swap.js")
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
    // console.log(n);
    var i,j
    let a1="e"+0
    let ini=document.getElementById(a1)
    // console.log(ini)
    ini.style.backgroundColor="green"
    for (i = 1; i < n; i++) {  
        let id="e"+i
        let first = document.getElementById(id)
        // console.log("first: ",first)
        first.style.backgroundColor="yellow"
        j = i - 1;
        let tmpid="e"+j
        let temp = document.getElementById(tmpid)
        temp.style.backgroundColor="yellow"
        while(j>=0 && parseInt(first.innerHTML)<= parseInt(temp.innerHTML))  /* Move the elements greater than temp to one position ahead from their current position*/  
        {    
            let id2="e"+(j+1)
            let ele2 = document.getElementById(id2)
            ele2.style.backgroundcolor="yellow"
            swap(j+1,j)  
            await resolveAfter2Seconds(speed)
            ele2.style.backgroundColor="white"
            j = j-1;
            if(j>-1){
                let tmpid="e"+j
                let temp = document.getElementById(tmpid)
                temp.style.backgroundColor="yellow"
            }
            console.log("j greater than 0",j>=0)
            console.log("numbers checking",parseInt(first.innerHTML)<= parseInt(temp.innerHTML))
            console.log("first",parseInt(first.innerHTML))
            console.log("temp",parseInt(temp.innerHTML))
        }
        tmpid="e"+(i-1)
        temp = document.getElementById(tmpid)
        temp.style.backgroundColor="green"
        first.style.backgroundColor="green"
    }  
}  