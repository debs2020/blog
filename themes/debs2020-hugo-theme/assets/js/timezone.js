timezone = [{"value": "Samoa Standard Time",
             "abbr": "SST",
             "offset": -5,
             "isdst": false,
             "text": "EST - Eastern Standard Time (North America)"},
             {"value": "Samoa Standard Time",
              "abbr": "SST",
              "offset": 1,
              "isdst": false,
              "text": "CET - Central European Time"}]

var ele = document.getElementById('sel');
for (var i = 0; i < timezone.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.
    ele.innerHTML = ele.innerHTML +
        '<option value="' + timezone[i]['offset'] + '">' + timezone[i]['text'] + '</option>';
}


function show(ele) {
var date = "July 13, 2020 09:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg1 = document.getElementById('time1');
offsetTimeString = offsetTime.substr(15,6);
msg1.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 10:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg2 = document.getElementById('time2');
offsetTimeString = offsetTime.substr(15,6);
msg2.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 11:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg3 = document.getElementById('time3');
offsetTimeString = offsetTime.substr(15,6);
msg3.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 11:15:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg4 = document.getElementById('time4');
offsetTimeString = offsetTime.substr(15,6);
msg4.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 11:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg5 = document.getElementById('time5');
offsetTimeString = offsetTime.substr(15,6);
msg5.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 11:45:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg6 = document.getElementById('time6');
offsetTimeString = offsetTime.substr(15,6);
msg6.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 12:40:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg7 = document.getElementById('time7');
offsetTimeString = offsetTime.substr(15,6);
msg7.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 14:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg8 = document.getElementById('time8');
offsetTimeString = offsetTime.substr(15,6);
msg8.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 15:10:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg9 = document.getElementById('time9');
offsetTimeString = offsetTime.substr(15,6);
msg9.innerHTML = offsetTimeString;
////////////////////////////////////////////////////////
var date = "July 13, 2020 15:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg10 = document.getElementById('time10');
offsetTimeString = offsetTime.substr(15,6);
msg10.innerHTML = offsetTimeString;
///////////////////////////////////////////////////////
var date = "July 13, 2020 10:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 13, 2020 11:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg11 = document.getElementById('time11');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg11.innerHTML = 'Tutorial #1a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg11.innerHTML = 'Tutorial #1a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}
//////////////////////////////////////////////////////
var date = "July 13, 2020 11:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 13, 2020 11:30:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg12 = document.getElementById('time12');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg12.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg12.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}
//////////////////////////////////////////////////////
var date = "July 13, 2020 11:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 13, 2020 12:40:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg13 = document.getElementById('time13');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg13.innerHTML = 'Tutorial #1b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg13.innerHTML = 'Tutorial #1b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 13, 2020 9:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 14, 2020 11:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg14 = document.getElementById('time14');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg14.innerHTML = 'Doctoral Symposium <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg14.innerHTML = 'Doctoral Symposium <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 14, 2020 11:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 14, 2020 11:30:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg15 = document.getElementById('time15');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg15.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg15.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 14, 2020 11:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 14, 2020 12:40:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg16 = document.getElementById('time16');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg16.innerHTML = 'Tutorial #2a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg16.innerHTML = 'Tutorial #2a <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 14, 2020 12:40:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 14, 2020 14:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg17 = document.getElementById('time17');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg17.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg17.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 14, 2020 14:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 14, 2020 15:10:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg18 = document.getElementById('time18');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg18.innerHTML = 'Tutorial #2b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg18.innerHTML = 'Tutorial #2b <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 15, 2020 10:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 15, 2020 11:15:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg19 = document.getElementById('time19');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg19.innerHTML = '<a href="/keynote-speakers">Opening Speech and Keynote #1</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg19.innerHTML = '<a href="/keynote-speakers">Opening Speech and Keynote #1</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 15, 2020 11:15:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 15, 2020 11:45:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg20 = document.getElementById('time20');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg20.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg20.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 15, 2020 11:45:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 15, 2020 12:40:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg21 = document.getElementById('time21');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg21.innerHTML = 'Research #1: Events <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg21.innerHTML = 'Research #1: Events <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 15, 2020 12:40:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 15, 2020 14:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg22 = document.getElementById('time22');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg22.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg22.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 15, 2020 14:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 15, 2020 15:10:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg23 = document.getElementById('time23');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg23.innerHTML = 'Research #2: Dependability <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg23.innerHTML = 'Research #2: Dependability <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 16, 2020 10:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 16, 2020 11:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg24 = document.getElementById('time24');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg24.innerHTML = '<a href="/keynote-speakers">Keynote #2</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg24.innerHTML = '<a href="/keynote-speakers">Keynote #2</a> <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 16, 2020 11:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 16, 2020 11:30:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg25 = document.getElementById('time25');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg25.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg25.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 16, 2020 11:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 16, 2020 12:40:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg26 = document.getElementById('time26');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg26.innerHTML = 'Industry <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg26.innerHTML = 'Industry <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 16, 2020 12:40:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 16, 2020 14:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg27 = document.getElementById('time27');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg27.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg27.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 16, 2020 14:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 16, 2020 15:30:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg28 = document.getElementById('time28');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg28.innerHTML = 'Grand Challenge <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg28.innerHTML = 'Grand Challenge <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 17, 2020 10:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 17, 2020 10:20:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg29 = document.getElementById('time29');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg29.innerHTML = 'Test of Time <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg29.innerHTML = 'Test of Time <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 17, 2020 10:24:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 17, 2020 11:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg30 = document.getElementById('time30');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg30.innerHTML = 'Research #3: Serverless <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg30.innerHTML = 'Research #3: Serverless <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 17, 2020 11:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 17, 2020 11:30:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg31 = document.getElementById('time31');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg31.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg31.innerHTML = 'Discussion Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 17, 2020 11:30:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 17, 2020 12:40:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg32 = document.getElementById('time32');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg32.innerHTML = 'Research #4: Streams and IoT <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg32.innerHTML = 'Research #4: Streams and IoT <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 17, 2020 12:40:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 17, 2020 14:00:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg33 = document.getElementById('time33');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg33.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg33.innerHTML = 'Lunch Break <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
var date = "July 17, 2020 14:00:00";
var targetTime = new Date(date);
var timeZoneFromDB = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference = timeZoneFromDB * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000).toString();
//var zoneTime = offsetTime.

var date1 = "July 17, 2020 15:10:00";
var targetTime1 = new Date(date1);
var timeZoneFromDB1 = parseFloat(ele.options[ele.selectedIndex].value); //time zone value from database
//get the timezone offset from local time in minutes
var tzDifference1 = timeZoneFromDB1 * 60 + targetTime.getTimezoneOffset();
//convert the offset to milliseconds, add to targetTime, and make a new Date
var offsetTime1 = new Date(targetTime1.getTime() + tzDifference1 * 60 * 1000).toString();
//var zoneTime = offsetTime.

var msg34 = document.getElementById('time34');
offsetTimeString = offsetTime.substr(15,6);
offsetTimeString1 = offsetTime1.substr(15,6);
if(ele.options[ele.selectedIndex].value == -5){
  msg34.innerHTML = 'Business Meeting and Closing Remarks <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' EST )</p>';
}
else if(ele.options[ele.selectedIndex].value == 1){
  msg34.innerHTML = 'Business Meeting and Closing Remarks <p>('+ offsetTimeString+' &ndash;'+offsetTimeString1+' CET )</p>';
}

//////////////////////////////////////////////////////
}
