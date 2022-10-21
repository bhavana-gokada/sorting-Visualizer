import swap from "./swap.js"
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function quickSort(){
    console.log("in quick sort")
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Quick Sort<center></h3>'
    sorting.style.color="orange"
    var divno=document.getElementById("bar")
    let right=divno.getElementsByTagName('*').length
    quicksort(0,right-1)
}

async function quicksort(left, right) {
    var speed = document.getElementById("speed").value;
    console.log("in quick sort")
    console.log("in quick sort function")
    console.log("left",left)
    console.log("right",right)
    let exleft=left;
    let exright=right;
    if(left<right){
        let pivot=left
        let pivotid="e"+left;
        let leftid="e"+left;
        let rightid="e"+right;
        let l=document.getElementById(leftid)
        l.style.backgroundColor="yellow";
        let r=document.getElementById(rightid)
        r.style.backgroundColor="green"
        let p=document.getElementById(pivotid)
        p.style.backgroundColor="red"
        await resolveAfter2Seconds(speed)
        while(!(leftid===rightid)){
            console.log("!(Number(left)===Number(right))",!(leftid)===(rightid))
            while(parseInt(p.innerHTML)<parseInt(r.innerHTML)){
                right=right-1
                r.style.backgroundColor="white"
                rightid="e"+right
                r=document.getElementById(rightid)
                console.log("right",right)
                r.style.backgroundColor="green"
                await resolveAfter2Seconds(speed)
            }
                swap(pivot,right)
                p.style.backgroundColor="white"
                console.log("right after swap",right)
                pivot=right
                p=document.getElementById(rightid)
                console.log("pivot",pivot)
                console.log("right",right)
                p.style.backgroundColor="red"
                await resolveAfter2Seconds(speed)
                l=document.getElementById(leftid)
            while(parseInt(l.innerHTML)<parseInt(p.innerHTML)){
                console.log("in left and pivot loop")
                l.style.backgroundColor="white"
                left=left+1
                leftid="e"+left
                l=document.getElementById(leftid)
                console.log("left",l.innerHTML)
                l.style.backgroundColor="yellow"
                await resolveAfter2Seconds(speed)
            }
                swap(pivot,left)
                p.style.backgroundColor="white"
                p=document.getElementById(leftid)
                l.style.backgroundColor="red"
                await resolveAfter2Seconds(speed)
                pivot=left
                console.log("pivot",p.innerHTML)
                console.log("left",left)
        }
        l.style.backgroundColor="lightblue"
        console.log('left',left)
        console.log('right',right)
        console.log('pivot',pivot)
        quicksort(exleft,pivot-1);
        quicksort(pivot+1,exright);
    }
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    com.innerHTML=`<center><h5>Time Complexity :  O(nlog(n))</h5></center>`
}