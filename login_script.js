/*
/*********************************************************************
Script 1: JQuery Transition
This function is used to transition between the sign up and sign in
**********************************************************************
*/
document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

/*
/*****************************************************************
Script 2: Text Rollover 
This function is used for a text rollover
****************************************************************
*/
function mouseOver() {
    document.getElementById("me").style.color = "#9a00fa";
}// end function

function mouseOut() {
    document.getElementById("me").style.color = "black";
}// end function