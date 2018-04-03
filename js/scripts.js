//biz
//firstChoice = function (enterHouse, runAway) {
//  this.enterHouse = enterHouse;
//  this.runAway = runAway;
//var btn1 = document.getElementById('btn1'),
//    btn2 = document.getElementById('btn2');
//btn1.addEventListener('click', show_me, false); // i am not IE friendly
//btn2.addEventListener('click', show_me, false); // you can replace show_me with any function you would like.
//function show_me() {
//    alert(this.value + ' was clicked');

//if (firstChoice === "enterHouse") {
//  ("#main-floor").show;
//} else {
//  ("#wuss").show;
//}


//ui
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var heronameInput = $("input#heroName").val();
  $("#firstChoice form").submit(function(event) {
  }
});
  //  var firstChoice = $(enterHouse, runAway).val();


    $(".heroName").text(heronameInput);

    $("#story").show();
    $("#blanks").hide();

    event.preventDefault();
  });
});


$(document).ready(function(){

        $(".sit_1, .sit_2, .sit_3a, .sit_3b, .sit_4a").hide();
        $(".choice_1, .choice_2a, .choice_2b, .choice_3a, .choice_3b, .choice_4a, .choice_4b").hide();
        $(".sit_1").fadeIn(2000);
        $(".choice_1").fadeIn(4000);


        $(".choice_1").click(function(){
        	$(".sit_1").hide();
        	$(".choice_1").hide();
        	$(".sit_2").fadeIn(4000);
        	$(".choice_2a").fadeIn(8000);
        	$(".choice_2b").fadeIn(8000);


        	});


        $(".choice_2a").click(function(){
        	$(".sit_2").hide();
        	$(".choice_2a").hide();
        	$(".choice_2b").hide();
        	$(".sit_3a").fadeIn(4000);




        	});


        $(".choice_2b").click(function(){
        	$(".sit_2").hide();
        	$(".choice_2a").hide();
        	$(".choice_2b").hide();
        	$(".sit_3b").fadeIn(4000);
        	$(".choice_3a").fadeIn(4000);
        	$(".choice_3b").fadeIn(4000);



        	});


        $(".choice_3a").click(function(){
        	$(".sit_3b").hide();
        	$(".choice_3a").hide();
        	$(".choice_3b").hide();
        	$(".sit_4a").fadeIn(3000);
        	$(".choice_4a").fadeIn(4000);
        	$(".choice_4b").fadeIn(4000);



        	});


        });
    <html>
