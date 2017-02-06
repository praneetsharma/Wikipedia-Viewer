$(document).ready(function() {

  var NUM_RESULTS = 10;
  var RANDOM_WIKI_URL = "https://en.wikipedia.org/wiki/Special:Random";

  function resultTemplate (url, heading, content, id) {
    var res = "<div class='res-box container-fluid' id='res" + id + "'>" +
                "<a href='" + url + "'>" +
                  "<h3>" + heading + "</h3>" +
                  "<h4>" + content + "</h4>" +
                "</a>" +
              "</div>";
    return res;
  }

  function populateResults () {
    var res = resultTemplate("urlbox.com", "HEADING", "content", 1);
    $(".search-results").append(res);
    var res = resultTemplate("urlbox.com", "HEADING", "content", 1);
    $(".search-results").append(res);
  }


  $(".button-random").click(function() {
    window.open(RANDOM_WIKI_URL, "_blank");
  });


  populateResults();

});
