$(document).ready(function() {
  $('#searchButton').click(function() {
    var searchTerms = $('#searchTerms').val();
    var apiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerms + "&format=json&callback=?";

    $.ajax({
      type: 'GET',
      url: apiURL,
      dataType: 'json',
      success: function(data) {
        $('#results').html('');
        for (i = 0; i < data[1].length; i++) {
          $('#results').append("<li><a href=" + data[3][i] + "target='_blank'>" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
        }
      }
    });
  });
});
