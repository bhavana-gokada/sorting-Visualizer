export default function swap(j,k){
    const id1="e"+j
    const id2="e"+k
    // console.log(id1)
    const ele=document.getElementById(id1)
    const ele2=document.getElementById(id2)
    // console.log(ele,ele2)
    const style1=window.getComputedStyle(ele)
    const style2=window.getComputedStyle(ele2)
    let h1=style2.height;
    let h2=style1.height;
    ele.style.height=h1;
    ele2.style.height=h2;
    // let i2=ele.id
    // let i1=ele2.id
    // ele.setAttribute('id',i1);
    // ele2.setAttribute('id',i2);
    let in1=ele2.innerHTML;
    let in2=ele.innerHTML;
    ele.innerHTML=in1;
    ele2.innerHTML=in2;
}
