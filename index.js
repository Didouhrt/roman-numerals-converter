let decimalnumber = document.querySelector('#number')
let romannumber = document.querySelector('#text')

function convert(){
  let romanobject={
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let roman =''
  let num = decimalnumber.value
  for(let i in romanobject){
    while (num>=romanobject[i]){
      roman+=i
      num-=romanobject[i]
    }
  }
  romannumber.value=roman

}
decimalnumber.addEventListener('input',(e)=>{
  if(e.target.value===''){
    romannumber.value=''
  }else{
    convert();
  }
})