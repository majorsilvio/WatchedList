$(document).ready(() => {
    actual = -1;
    rollTo = '';
    rollDown();
});

$('.page-up').on('click',() => rollUp());
$('.page-down').on('click',() => rollDown());

function rollDown() {
    actual++;
    rollTo = $('.container').children()[actual]?.id
    rollTo ? roll() : (actual = 1 ,rollUp());
}

function rollUp() {
    actual--
    rollTo = $('.container').children()[actual] ? $('.container').children()[actual].id : actual = 0;
    rollTo ? roll() : actual = 0;

}

function roll() {
    actual <= 0 ? $('.page-up').addClass('hidden') : $('.page-up').removeClass('hidden');
    actual == ($('.container').children().length - 1) ? $('.page-down').addClass('hidden') : $('.page-down').removeClass('hidden');
    if (rollTo) {
        $('html, .container').animate({
            scrollTop: $(`#${rollTo}`)?.offset()?.top
        }, 'slow');
    }

}

$('html,body').bind('mousewheel', function (e) {
    e.stopImmediatePropagation()
    e.stopPropagation();
    if (e.originalEvent.wheelDelta / 120 > 0) {
        rollUp();
    } else {
        rollDown();
    }
})

$('html,body').bind('keyup', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (e.keyCode == '38') {
        rollUp();
    } else if (e.keyCode == '40') {
        rollDown();
    }
})
