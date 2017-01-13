$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var theirnameInput = $("input#theirname").val();
    var occasionInput = $("input#occasion").val();
    var adjectiveInput = $("input#adjective").val();
    var yournameInput = $("input#yourname").val();

    $(".theirname").text(theirnameInput);
    $(".occasion").text(occasionInput);
    $(".adjective").text(adjectiveInput);
    $(".yourname").text(yournameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
