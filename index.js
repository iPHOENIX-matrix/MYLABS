var Search-Box=document.getElementById("Search-Box");
var Search-Icon=document.getElementById("Search-Icon");

Search-Icon.oneclick=function(){
  Search-Box.classList.toggle("active");
}






$(document).ready(function(){



  $(window).scroll(function(){
    if($(this).scrollTop() >40){
      $('#TopBtn').fadeIn();
    } else{
      $('#TopBtn').fadeOut();
    }
  });

  $("#TopBtn").click(function(){

    $('html,body').animate({scrollTop : 0},800);


  });
});
