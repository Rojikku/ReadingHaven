$(document).ready(function() {
  $("div.portlet-body").click(function() {
    var Title = $("title").text();
    $("span").css("font", "");
    $("span").css("color", "");
    $("p").removeAttr("style");
    $("font").removeAttr("size");
    $("a").attr('target', '_parent');
    var Want = $(this).html();
    $("html").html("<head><title>"+Title+"</title></head><body>test</body>");
    $("body").attr("class", "x3mod");
    $("body").html(Want);
  }); 
});
