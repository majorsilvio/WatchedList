
$.ajax({
   url: "view/list-container/list-container.html",
   success: (page) => $('#list').html(page)
})