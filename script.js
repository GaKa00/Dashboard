function displayTimeDate(){
    let timeDate= new Date();
    let hour = timeDate.getHours()
    let min  =timeDate.getMinutes()
    let date = timeDate.getDate()
    
    document.getElementById('clock').innerHTML = hour + ":"+ min 
    
}



setInterval(displayTimeDate,1000);