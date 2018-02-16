$(document).ready(function() {
  $('.container-box').html('');
  let URI = `https://swapi.co/api/people`;

  let getSWCharacters = (data) => {
    let count = 1;
    let sWC = data.results;
    $.each(sWC, (i, char) => {
      let card = `<div class="card card-body"><p>${char.name}</p> <img class="card-img-top" src="https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${count}.jpg" alt=""> <a href="#" class='seeMore card-link' data-toggle="modal" data-target="#modalChrtr" data-link= "${char.url}">See more</a></div>`;
      $('.container-box').append(card);
      count++;
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
    };

    $.ajax({
      url: url,
      success: getSWInfo
    });
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
      console.log(data);
      let count = sWC.url.slice(28, -1);
      $('.container-box').append(`<div class='card card-body'><p>${sWC.name}</p> <img class="card-img-top" src="https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${count}.jpg" alt=""> <a href="#" class='seeMore card-link' data-toggle="modal" data-target="#modalChrtr" data-link= "${sWC.url}">See more</a></div>       
            `);
      $('.seeMore').click(swInfo);
    };

    $.ajax({
      url: URI + '/?search=' + $searchSWC,
      success: getSWCharacter
    });
  }); 
});
