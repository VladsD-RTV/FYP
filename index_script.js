/*
*******************************************************************
Function To Start JS
******************************************************************
*/
function start(){
	browserDetection();
	myTimer();
	hitCount();
	scrollBox();
}

/*
*******************************************************************
Script 1: Display of current time
******************************************************************
*/
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  document.getElementById("realtime").innerHTML = time;
}

/*
*******************************************************
Script 2: Hit Page Counter
***********************************************************
*/
function hitCount(){
	if (localStorage.pagecount){
		localStorage.pagecount=Number(localStorage.pagecount) +1;
	}
	else{
		localStorage.pagecount=1;
	}
	document.getElementById("hits").innerHTML=localStorage.pagecount;
}//end hitCount

/*
*******************************************************************
Script 3: Browser Plugin Detection
This function detects the user browser
******************************************************************
*/
function browserDetection() {
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.getElementById("browser").innerHTML="Your browser is Chrome";
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.getElementById("browser").innerHTML="Your browser is Opera";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
       document.getElementById("browser").innerHTML="Your browser is Firefox";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.getElementById("browser").innerHTML="Internet Browser";
    }
    else{
       document.getElementById("browser").innerHTML="Unknown Browser";
    }
}// end function browserDetection

/*
/*****************************************************************
Script 4:  Scrolling Text
This function is used for Scrolling Text
****************************************************************
*/
var message = "Welcome To the Website!";
i = 0;
function scrollBox() {
	i++;
	if(i > message.length) {
	    i = 1;
	}
	document.forms[0].elements[0].value = message.substring(0,i)+"_";
	setTimeout("scrollBox()",100);
}//end function scrollBox

/*****************************************************************
Script 5:  function for the filter selecction
Used for outputing the items to screan
****************************************************************
*/
filterSelection("all")
function filterSelection(c)
{
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name)
{
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
