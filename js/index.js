$(document).ready(function()
{
  $.get("view/list-container/list-container.html", function(html_string)
   {
      $('#list').html(html_string);
   });
});

