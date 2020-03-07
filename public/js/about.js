$(document).ready(function() {
  $("#about-me-item").attr("class", (i, origValue) => {
    return origValue + " active";
  });
  $("about-me-link").html( (i, origText) => {
    return `${origText} <span class="sr-only">(current)</span>`;
  });
});