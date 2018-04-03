//biz
firstChoice = function (enterHouse, runAway) {
  this.enterHouse = enterHouse;
  this.runAway = runAway;

}


if (firstChoice === "enterHouse") {
  ("#main-floor").show;
} else {
  ("#wuss").show;
}


//ui
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var heronameInput = $("input#heroName").val();

    var firstChoice = $(enterHouse, runAway).val();


    $(".heroName").text(heronameInput);

    $("#story").show();

    event.preventDefault();
  });
});
