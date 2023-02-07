var searchFormEL = $('#search-form');
var cityListEl = $("#city-list");
var cities = [];


$(document).ready(function () {

    //     var today = dayjs();
    //     $('#currentDay').text(today.format('MM/dd/yyyy'));

    $('.searchBtn').on('click', function () {
        var saveInput = $(this).siblings('.cityName').val();
        var searchBar = $(this).parent().attr('id');
        localStorage.setItem(searchBar, JSON.stringify(saveInput));
    })
    $('.cityName').each(function () {

    })

    function handleFormSubmit(event) {
        event.preventDefault();

        var cityEL = $("#city-input");
        var nameEl = $('input[name="city-input"]').val();
        var nameEl = cityEL.val();

        if (!nameEl) {
            console.log('No cities entered in search field');
            return;
        }
        var cityLi = $('<ul>')
        cityLi.text(nameEl)
        cityListEl.append('<ul>' + nameEl + '</ul>');

        cityEL.val('');
    }

    searchFormEL.on('submit', handleFormSubmit);

    for(let i=0; i<saveInput.length; i++){
        $('#${i} input').val(JSON.parse(localStorage.getItem('${i}')))
    }

});
