import swap from "./swap.js"
// const s= require("./swap.js")
function resolveAfter2Seconds(speed) {
    return new Promise(resolve => {
      setTimeout(() =>resolve(), speed);//delay(3)
    });
}
export default async function quickSort(){
    let com=document.getElementById("timeComplexity");
    com.style.color="white"
    com.innerHTML=""
    var sorting=document.getElementById("sortingname");
    sorting.innerHTML='<h3><center>Quick Sort<center></h3>'
    sorting.style.color="orange"
    var speed = document.getElementById("speed").value;
    var divno=document.getElementById("bar")
    // const n=divno.getElementsByTagName('*').length
}


function partition(i,j) {//left right
  var pivot   = Math.floor((i+j) / 2) //middle element
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(i, j); //sawpping two elements
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(left, right) {
  var index;
  let left=0
  let right=divno.getElementsByTagName('*').length;
  if (items.length > 1) {
      index = partition(left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(index, right);
      }
  }
}
// first call to quick sort
//quickSort(items, 0, items.length - 1);
