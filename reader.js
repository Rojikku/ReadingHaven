$(document).ready(function() {
  var IdX3 = "CacheX3" + $(location).attr('href');
  var BookieX3 = "";
  var RefX3 = localStorage.getItem(IdX3);
  var CoreX3 = "";

  function BmkFind() {
    var src_str = CoreX3;
    var TextX3 = BookieX3;
    TextX3 = TextX3.replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*");
    var pattern = new RegExp("("+TextX3+")", "gi");

    src_str = src_str.replace(pattern, "<mark>$1</mark>");
    src_str = src_str.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"$1</mark>$2<mark>$4");
  
    $(".x3mod").html(src_str);
  }

  document.body.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter", then sets highlighted text as bookmark.
        if (window.getSelection) {
          BookieX3 = window.getSelection().toString();
          localStorage.setItem(IdX3, BookieX3);
          BmkFind()
        }
    } else if (e.keyCode === 118) { // Checks for F7. Removes bookmarks.
      localStorage.removeItem(IdX3);
      $(".x3mod").html(CoreX3);
    }
  });

  
  
  
  $("div.postbit_content").click(function() {
    $("body").html($(this).html());
    $("body").addClass("x3mod");
    var Title = $("title").text();
    $("head").html("<title>" + Title + "</title>");
    $("a").attr('target', '_parent');
    CoreX3 = $(".x3mod").html();
    BookieX3 = RefX3;
    BmkFind();
  });
});
