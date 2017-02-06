$(document).ready(function() {

  var NUM_RESULTS = 10;
  var RANDOM_WIKI_URL = "https://en.wikipedia.org/wiki/Special:Random";
  //var WIKI_URL =

  function resultTemplate (url, heading, content, id) {
    var res = "<div class='res-box container-fluid' id='res" + id + "'>" +
                "<a href='" + url + "' target='_blank'>" +
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

  function clearSearchResults () {
    $(".search-results").html("");
  }

  function clearSearchQuery () {
    $(".form-control").val("");
  }

  function makeRequestAndPopulateSearchresults(_url, searchQuery) {
    $.ajax({

    });
  }

  $(".button-random").click(function() {
    window.open(RANDOM_WIKI_URL, "_blank");
  });

  $(".clear-search").click(function () {
    clearSearchQuery();
    clearSearchResults();
  });

  $(".search-icon").click(function() {
    var searchQuery = $(".form-control").val();

    // Do anything/something only if search query is non-empty
    if (searchQuery != null && searchQuery !== "") {
      // clear the existing search results before populating the new ones.
      clearSearchResults();

      makeRequestAndPopulateSearchresults(url, searchQuery);
    }
  });

  populateResults();

});
