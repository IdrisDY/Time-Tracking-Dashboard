const maindata =  fetch('data.json')

maindata.then(response=>response.json())  
.then(resp=>console.log(resp))

