
const  startbtn = document.querySelector(".start")
const stopbtn = document.querySelector(".stop")


const clock= document.querySelector(".clock")



let second= 0,
min=0,
hour= 0,
stop

const StopWatch=()=>{
   
    
   stop=setInterval(() => {
      
       if(second<59){
        second++
       }else if(min>=59){
        min=0
        hour++
       }else{
        second=0
          min++
       }
        const h= hour.toString().padStart(2,"0")
        const m= min.toString().padStart(2,"0" )
        const s = second.toString().padStart(2,"0")
        clock.innerText=(`${h}:${m}:${s}`);
       
    }, 1000);

   startbtn.style.display="none"
}

const stopb=()=>{
    clearInterval(stop)
    startbtn.style.display="inline"
}
