$(document).ready(function() {
  $('.container-box').html('');
  let URI = `https://swapi.co/api/people`;

  let getSWCharacters = (data) => {
    let sWC = data.results;
    $.each(sWC, (i, char) => {
      $('.container-box').append(`<div class="card col-4"><p>${char.name}</p> <a href="#" class='seeMore' data-toggle="modal" data-target="#modalChrtr" data-link= "${char.url}">See more</a></div>       
            `);
    });
    $('.seeMore').click(swInfo);
  };

  let swInfo = function() {
    ;
    let url = this.dataset.link;

    let getSWInfo = (data) => {
      $('#nameSWC').text(data.name);
      $('.modal-body').html(`<p><b>Birth year: </b>${data.birth_year}</p>
            <p><b>Height: </b>${data.height}cm</p>
            <p><b>Mass: </b>${data.mass}lb</p>
            <p><b>Hair color: </b>${data.hair_color}</p>
            <p><b>Skin color: </b>${data.skin_color}</p>`);
      console.log(data)
    }

    $.ajax({
      url: url,
      success: getSWInfo
    })
  };

  $.ajax({
    url: URI,
    success: getSWCharacters
  })

  $('#form').submit(function(ev) {
    ev.preventDefault();
    $('.container-box').html('');
    let $searchSWC = $('#searchInput').val();

    let getSWCharacter = (data) => {
      let sWC = data.results[0];
      $('.container-box').append(`<div class='col-4 card'><p>${sWC.name}</p> <a href="#" class='seeMore' data-toggle="modal" data-target="#modalChrtr" data-link= "${sWC.url}">See more</a></div>       
            `);
      $('.seeMore').click(swInfo);
    }

    $.ajax({
      url: URI + '/?search=' + $searchSWC,
      success: getSWCharacter
    });
  });
});
