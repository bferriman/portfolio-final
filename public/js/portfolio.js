$(document).ready(function() {
  $("#portfolio-item").attr("class", (i, origValue) => {
    return origValue + " active";
  });
  $("portfolio-link").html( (i, origText) => {
    return `${origText} <span class="sr-only">(current)</span>`;
  });
});