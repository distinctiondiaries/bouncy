$(function () { // wait for page to load
  $('form').submit(function() {
    var answer = $('#answer').val();
    var response = (answer == '48') ? 'Correct' : 'Incorrect';
    $("#content").html(response);
    return false; // prevent the form from submitting
  })
})
 