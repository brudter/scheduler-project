
document.getElementById('currentDay').innerHTML = moment().format('llll');

let hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

for (i = 0; i < hours.length; i++) {
    document.querySelector('.container').innerHTML +=
    `
    <div class='row-3 card ' id=${hours[i]}>
    <div class='hour col-12'>
    <p>${hours[i]} <textarea class="col-12"></textarea></p>
    </div>
    </div>
    `
}


var date = new Date();
console.log(date.getHours());
var currentHour = date.getHours(); 
var workdayOver = false;
if(currentHour < 9 || currentHour > 17){
    workdayOver = true;
} else {
    var currentBlock = "";
    if(currentHour > 12 ){
        currentBlock = (currentHour - 12) + "PM";
    } else {
        currentBlock = currentHour + "AM";
    }
    document.getElementById(currentBlock).classList.add('present');
}


var loopTimeHolder = 0;
currentTime = currentHour;  
for (i = 0; i < hours.length; i++) {
    if(workdayOver){
        document.getElementById(hours[i]).classList.add('past');
    }
    else{
    loopTimeHolder = parseInt(hours[i].replace("PM", "").replace("AM", "")); 
    if(loopTimeHolder < 6){
        loopTimeHolder += 12;
    }
    if(loopTimeHolder < currentTime){
        document.getElementById(hours[i]).classList.add('past');
        console.log("we are in A");
    }
    else if(loopTimeHolder > currentTime){
        document.getElementById(hours[i]).classList.add('future');
        console.log("we are in B");
    }
}
}

var time = moment().format('LTS');;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
for (i = 0; i < 9; i++) {
    delay(1000).then(() => console.log('ran after 1 second 1 passed'));
 console.log(time)
}

function handleBackground() {
    for (i = 0 ; i < 9 ; i++) {
        if (time == i){
        document.getElementById('idOfElement').classList.add('present');
        }
        if (time < i){
        document.getElementById('idOfElement').classList.add('newClassName');
        } 
        if (time > i){
        document.getElementById('idOfElement').classList.add('newClassName');
        }
    }
}