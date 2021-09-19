var i=10;
var time=1;
var countdown = document.getElementById("new")
function print(){
    if(i === 0){
        document.getElementById("new").className="badge bg-success text-wrap fs-1";
        countdown.innerText="Happy Independence Day!!!!";
    }
    else{
        countdown.innerText=i;
        i--;
    }
    
}
let execute = () => new Promise((resolve,reject)=>{
    setTimeout(() => {resolve(print())}, 1000*time);
    time++;
})

execute()
.then(execute())
.then(execute())
.then(execute())
.then(execute())
.then(execute())
.then(execute())
.then(execute())
.then(execute())
.then(execute())
.then(execute())


const filterPopulation = country => country.population>200000000;

const displayData = data => console.log(data.name);


fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => data.filter(filterPopulation))
.then(data => data.map(displayData))
.catch(err => console.log(err))
