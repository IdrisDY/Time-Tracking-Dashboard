

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
let timeClicked= 'monthly'


const maindata =  fetch('data.json')
var tasks
maindata.then(response=>response.json())  
.then(resp=> 
   {
   tasks = resp
console.log(tasks);

tasks.map((task,index)=>{
const {title,timeframes}  = task
   const {daily,monthly,weekly} = timeframes
   workTime.append(work,times)
   previousTime.append(dots,prevs)
   timeContent.append(workTime,previousTime)

   container.appendChild(timeContent)
   console.log('tired of work');
   return   (
      cards.append(container)
   )

})

}
)