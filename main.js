

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
let dailyClicked= false
let weeklyClicked= false
let monthlyClicked= false
console.log(dailyClicked);


const maindata =  fetch('data.json')
var tasks
maindata.then(response=>response.json())  
.then(resp=> 
   {
   tasks = resp
console.log(tasks);
dayBtn.onclick = ()=>{
   dailyClicked = true
   weeklyClicked = false
   monthlyClicked = false
   console.log('deak');

}
weekBtn.onclick = ()=>{
   weeklyClicked = true
   dailyClicked = false
   monthlyClicked = false
console.log('weak');
}
monthBtn.onclick = ()=>{
   monthlyClicked = true
   weeklyClicked = false
   dailyClicked = false
   console.log('meak');

}


tasks.map((task,index)=>{
const {title,timeframes}  = task
   const {daily,monthly,weekly} = timeframes

   work.innerHTML = title
   if(dailyClicked === true){
      times.innerHTML= daily.current
      console.log(times.innerHTML);

   }
   if(monthlyClicked === true){
      times.innerHTML= monthly.current
      console.log(times.innerHTML);

   }
   if(weeklyClicked === true){
     times.innerHTML = weekly.current
     console.log(times.innerHTML);

   }
     workTime.append(work,times)
     previousTime.append(dots,prevs)
     timeContent.append(workTime,previousTime)
     container.appendChild(timeContent)

     console.log(times.innerHTML);


})

}
)