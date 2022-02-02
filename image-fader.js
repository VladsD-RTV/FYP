//This is the place all nessassary functions are implemented
//-------------------------------------------------------------------------------------
//This function allows the banner image to change
//-------------------------------------------------------------------------------------
$(document).ready(function()
{
    var count = 0;
    var images = ["images/backgroundFP1.jpg","images/bg1.jpg","images/bg2.jpg","images/bg3.jpg"];
    var image = $(".banner-image")

    image.css("background","url("+images[count]+")");

    setInterval(function(){
      image.fadeOut(500, function(){
        image.css("background","url("+images[count++]+")");
        image.fadeIn(500);
      });
      if(count == images.length)
      {
        count = 0;
      }
    },5000);
});
//This function allows the filter section on the search bar to disappear after 15 seconds
//-------------------------------------------------------------------------------------
function Displayfilter()
{
   var Display = $("#myUL li a");

   Display.css("display","block");
   setInterval(function(){
     Display.css("display","none");
   }
  ,15000)
}

//This function allows the filtering of the inputs of the search bar allowing them to be filtered
//By the array premise and allow for the search filter to discard filters that don't have a letter
//or that word in it
//-------------------------------------------------------------------------------------
function filterFunction()
{
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
}
