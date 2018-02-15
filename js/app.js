$(document).ready(function () {

    $('.container-box').html('');
    let URI = `https://swapi.co/api/people`;
    // let URI = `https://swapi.co/api/people/?page=`;
    // let $page = {};
    // $page.length = 1;

    let getSWCharacters = (data) => {
        // $page = parseInt(data.count/data.results.length) + 1;
        data.results.map((ev) => {
            $('.container-box').append(`<div class='col-4 card'  data-toggle="modal" data-target="#modalChrtr">${ev.name}</div>`);
            let name = ev.name;
            $('#nameSWC').text(name);
        });
        // $('#nameSWC').text(`${ev.name}`);
        console.log(data);
    }

    
    $.ajax({
        url: URI,
        success: getSWCharacters
    })

   
    // $('#searchInput').submit(function () {
    //     e.preventDefault();

    // })


})