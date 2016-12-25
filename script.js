$(document).ready(function() {
  $('#btn').click(function() {
    var searchTerms = $('#term').val();
    var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+term+"&format=json&callback=?";

    $.ajax({
      type: 'GET',
      url: apiURL,
      dataType: 'json',
      success: function(data) {}
    });
  });
});
