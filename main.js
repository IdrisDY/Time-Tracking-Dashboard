

const container = document.createElement('div')
const timeContent = document.createElement('div')
const workTime  = document.createElement('div')
const previousTime = document.createElement('div')
const times =  document.createElement('span')
const work =  document.createElement('span')
 const dots =   document.createElement('span')
 const prevs = document.createElement('span')
const dayBtn =  document.querySelector('.dailybtn')
const weekBtn =  document.querySelector('.weeklybtn')
const monthBtn =  document.querySelector('.monthlybtn')
const cards = document.querySelector('.cards')
let timeClicked= 'daily'


const maindata =  fetch('data.json')
var tasks
maindata.then(response=>response.json())  
.then(resp=> 
   {
   tasks = resp
console.log(tasks);
weekBtn.onclick = ()=> 
{
  const newArray = tasks.map( task=>{
    const {title,timeframes} = task
    const { daily,monthly,weekly} = timeframes
 return(
    `  <div class='cardContainer'>
    <div class='card-coin'>
      <div class='cardtitle'>
        <span> ${title}</span>
        <span> ${weekly.current}hrs</span>
      </div>
      <div>
        <span></span>
        <span>Last Week -${weekly.previous}hrs</span>
      </div>
    </div>
  </div>
 `
 )
 
   
 }
 )
 cards.innerHTML = newArray;
}
dayBtn.onclick = ()=> 
{
  const newArray = tasks.map( task=>{
    const {title,timeframes} = task
    const { daily} = timeframes
 return(
    `  <div class='cardContainer'>
    <div class='card-coin'>
      <div>
        <span> ${title}</span>
        <span> ${daily.current}hrs</span>
      </div>
      <div>
        <span></span>
        <span>Yesterday -${daily.previous}hrs</span>
      </div>
    </div>
  </div>
 `
 )
   
 }
 )
 cards.innerHTML = newArray;
 
}
const newp  = document.createElement('p')
monthBtn.onclick = ()=>
 {
  const newArray = tasks.map( task=>{
    const {title,timeframes} = task
    const { daily,monthly,weekly} = timeframes
 return(
    `  <div class='cardContainer'>
    <div class='card-coin'>
      <div>
     
        <span> ${title}</span>
        <span> ${monthly.current}hrs</span>
      </div>
      <div>
        <span></span>
        <span>Last Month -${monthly.previous}hrs</span>
      </div>
    </div>
  </div>
 `
 )
 
   
 }
 )
 cards.innerHTML = newArray;

 }

console.log(timeClicked);

const newArray = tasks.map( task=>{

   const {title,timeframes} = task
   const { daily,monthly,weekly} = timeframes
return(
     `<div class='cardContainer'>
   <div class='card-coin'>
     <div>
       <span> ${title}</span>
       <span> ${daily.current}hrs</span>
     </div>
     <div>
       <span></span>
       <span>Yesterday-${daily.previous}hrs</span>
     </div>
   </div>
 </div>
`
)

  
}
)
cards.innerHTML = newArray;
}
)