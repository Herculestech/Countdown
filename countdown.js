const start=()=>{
    let myMin= min.value
    let mySec = sec.value
    let myHour = hour.value
    setTime = setTimeout(start, 1000)
    if(myHour == 0 && myMin == 0 && mySec == 0){
        min.value= 00
        hour.value= 00
        sec.value= 00
    }
    else if(sec.value != 0){
        sec.value--
    }
    else if(min.value != 0 && sec.value == 0){
        sec.value = 59
        min.value -- 
    }
    else if(hour.value != 0 && min.value == 0){
        min.value = 60
        hour.value --
    }
}
const reset=()=>{
    min.value=00
    hour.value=00
    sec.value=00
    
}
const pause=()=>{
     clearTimeout(setTime)
}
 