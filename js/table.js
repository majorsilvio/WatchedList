function viewList() {
    $('.country').on('click', (e) => {
        countryId = e.currentTarget.attributes.countryId.value;
        data = getDataOf(countryId);
       
    })

    
}

function getDataOf(country) {
    $.get(`https://6140ac8c357db50017b3d7f0.mockapi.io/country/${country}/drama`, function (json) {
        buildTable(json)
    });
}

function buildTable(data){
     let rows = '';
        $.each(data,(i,item) => {
            rows += "<tr>";
            rows += `<td>${item.id}</td>`;
            rows += `<td>${item.name}</td>`;
            rows += `<td>${item.episodes}</td>`;
            rows += `<td class="stars">${stars(item.rate)}</td>`;
            rows += "</tr>";
        })

        $('.list-table > tbody').html(rows);
}

function stars(number) {
    let star = '';
    for (let s = 0; s < number; s++) {
        star += "&#9733; "
    }
    return star;
}

makeMenu();

function makeMenu() {

    console.log(getCountrys())

}

function getCountrys() {
    $.get("https://6140ac8c357db50017b3d7f0.mockapi.io/country", function (countrys) {
        let menuItems = '';
        countrys.forEach(country => {
            menuItems += `<div countryId="${country.id}" class="country">${country.name}</div>`
        });
        $('.country-container').html(menuItems);
        viewList()
    });
}