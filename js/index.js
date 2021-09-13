let data;
let countrys;

$.get("js/data/data.json", function (json) {
    data = json;
    countrys = Object.keys(data);
});

$(document).ready(function()
{
  $.get("view/list-container/list-container.html", function(html_string)
   {
      $('#list').html(html_string);
   });
});

