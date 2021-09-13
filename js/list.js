function viewList() {
    $('.country').on('click',(e) => {
        let rows = '';
        data[e.currentTarget.innerHTML].forEach((item) => {
            rows += "<tr>";
            $.each(item, function(i, value) {
                rows += `<td>${value}</td>`;
              });
            rows += "</tr>";
        })

        $('.list-table').html(rows);
    }) 

}


makeMenu(countrys);

function makeMenu(countrys){
    let menuItems = '';
    countrys.forEach(country => {
        menuItems += `<div class="country">${country}</div>`
    });
    $('.country-container').html(menuItems);
    viewList()
}