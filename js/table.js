//requests url
countryURL = () => 'https://6140ac8c357db50017b3d7f0.mockapi.io/country/';
dramaURL = (countryId) => countryURL() + countryId + "/drama";


//html elements
var $countrysMenu = $('.country-container');
var $dramaList = $('.list-table > tbody')   

//templates
countrysMenuTemplate = '<div countryId="{{id}}" class="country">{{name}}</div>';
dramaListTemplate = `
<tr>;
<td>{{id}}</td>;
<td>{{name}}</td>;
<td>{{episodes}}</td>;
<td class="stars">{{#stars}}{{rate}}{{/stars}}</td>;
</tr>;
`

$(() => {
    $.ajax({
        type: 'GET',
        url: countryURL(),
        success: (countrys) => {
            $.each(countrys, (i, country) => {
                $countrysMenu.append(Mustache.render(countrysMenuTemplate, country));
            })
        },
        error: () => $countrysMenu.append(Mustache.render(countrysMenuTemplate, {id:null,name:"No countrys"}))
    })
})

$countrysMenu.delegate('.country', 'click', function() {
    if(removeClassAndToggle($(this),'active',true)){
        $dramaList.empty();
        return
    }
    countryId = $(this).attr('countryId');
    $.ajax({
        type: 'GET',
        url: dramaURL(countryId),
        success: (dramas) => {
            
            list = '';
            if(dramas.length == 0){ $dramaList.html('<tr><td colspan="4">No drama found for this country</td></tr>'); return }
            $.each(dramas, (i, drama) => {
                drama.stars = () => {
                    return function (rate, render) {
                        let star = '';
                        for (let s = 0; s < render(rate); s++) {
                            star += "&#9733; "
                        }
                        return star;
                    }
                }
                list += Mustache.render(dramaListTemplate, drama)
            })
            $dramaList.html(list);
        },
    })
})

function removeClassAndToggle(element,className,sc = false){
    if(!element.hasClass(className)){
        $('*').removeClass(className)
        element.toggleClass(className)
    }else{
        if(sc){
            element.toggleClass(className)
        }
        return true
    }
}

$dramaList.delegate('tr','click',function(){ 
    if(removeClassAndToggle($(this),'selected',true)){
        window.open('https://mydramalist.com');
    }
    
})