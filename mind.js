console.log("JavaScript is Connected");
let timeDate = document.getElementById('timeDate');
let inputText = document.getElementById('inputtext');

function printText(){

    if(!inputText.value){
        alert("Field is empty");
    }
    else{
        let task_el = document.createElement('div');
        task_el.classList.add('add-text-box-container');
        let content = document.createElement('span');
        content.innerHTML = inputText.value;
        task_el.appendChild(content);
        document.getElementById('add-text-main-container').appendChild(task_el);
        inputText.value = "";
    }
}
setInterval(function(){                                         
    let myDate = new Date();
    let hour = myDate.getHours();
    let min = myDate.getMinutes();
    let sec = myDate.getSeconds();
    let zone = "AM";
    
    if(hour < 12){
        zone = "AM";
    }
    else if(hour > 12){
        zone = "PM";
    }
    let FullTime = hour + " : " + min + " : " + sec + " " + zone;
    timeDate.innerHTML = FullTime;
},1000)