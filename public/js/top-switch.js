$(function () {
  $('#top-switch-icon-blinger').mouseover(function() {
    $('#info-blinger-switch').show();
  });
  $('#top-switch-icon-blinger').mouseout(function() {
    $('#info-blinger-switch').hide();
  });
  $('#top-switch-icon-credit').mouseover(function() {
    $('#info-credit-switch').show();
  });
  $('#top-switch-icon-credit').mouseout(function() {
    $('#info-credit-switch').hide();
  });
  $('#top-switch-icon-deposit').mouseover(function() {
    $('#info-deposit-switch').show();
  });
  $('#top-switch-icon-deposit').mouseout(function() {
    $('#info-deposit-switch').hide();
  });
  $('#top-switch-icon-links').mouseover(function() {
    $('#info-links-switch').show();
  });
  $('#top-switch-icon-links').mouseout(function() {
    $('#info-links-switch').hide();
  });
  $('#top-switch-icon-officesdevices').mouseover(function() {
    $('#info-officesdevices-switch').show();
  });
  $('#top-switch-icon-officesdevices').mouseout(function() {
    $('#info-officesdevices-switch').hide();
  });
  $('#top-switch-icon-rates').mouseover(function() {
    $('#info-rates-switch').show();
  });
  $('#top-switch-icon-rates').mouseout(function() {
    $('#info-rates-switch').hide();
  });
  $('#top-switch-icon-cashmanagement').mouseover(function() {
    $('#info-cashmanagement-switch').show();
  });
  $('#top-switch-icon-cashmanagement').mouseout(function() {
    $('#info-cashmanagement-switch').hide();
  });
  $('#top-switch-icon-phonenumber').mouseover(function() {
    $('#info-phonenumber-switch').show();
  });
  $('#top-switch-icon-phonenumber').mouseout(function() {
    $('#info-phonenumber-switch').hide();
  });
  $('#top-switch-icon-blingertxt').mouseover(function() {
    $('#info-blingertxt-switch').show();
  });
  $('#top-switch-icon-blingertxt').mouseout(function() {
    $('#info-blingertxt-switch').hide();
  });
  $('#top-switch-icon-news').mouseover(function() {
    $('#info-news-switch').show();
  });
  $('#top-switch-icon-news').mouseout(function() {
    $('#info-news-switch').hide();
  });


});


$(function () {
  $('#top-switch-icon-blinger').click(function () {
    $('#credit').hide();
    $('#cash-management-reload').hide();
  	$('#deposity').hide();
    $('#links').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
    $('#blinger').show();
  });
  $('#top-switch-icon-credit').click(function () {
    $('#blinger').hide();
    $('#cash-management-reload').hide();
    $('#deposity').hide();
    $('#links').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
  	$('#credit').show();
  });
  $('#top-switch-icon-deposit').click(function () {
    $('#blinger').hide();
    $('#cash-management-reload').hide();
    $('#credit').hide();
    $('#links').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
  	$('#deposity').show();
  });
  $('#top-switch-icon-links').click(function () {
    $('#blinger').hide();
    $('#cash-management-reload').hide();
    $('#credit').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
  	$('#deposity').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
    $('#links').show();
  });
  $('#top-switch-icon-officesdevices').click(function () {
    $('#blinger').hide();
    $('#cash-management-reload').hide();
    $('#credit').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
  	$('#deposity').hide();
    $('#links').hide();
    $('#news').hide();
    $('.rates').hide();
    $('#office-and-devices').show();
  });
  $('#top-switch-icon-rates').click(function () {
    $('.rates').html('<iframe id="rates" src="' + urltarifi + '"></iframe>');
    $('#blinger').hide();
    $('#cash-management-reload').hide();
    $('#credit').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
  	$('#deposity').hide();
    $('#links').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').show();
  });
  $('#top-switch-icon-cashmanagement').click(function () {
    $('#blinger').hide();
    $('#credit').hide();
    $('#blingertxt').hide();
    $('#phonenumber').hide();
    $('#deposity').hide();
    $('#links').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
    $('#cash-management-reload').show();
  });
  $('#top-switch-icon-phonenumber').click(function () {
    $('#blinger').hide();
    $('#credit').hide();
    $('#blingertxt').hide();
    $('#cash-management-reload').hide();
    $('#deposity').hide();
    $('#links').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
    $('#phonenumber').show();
  });
  $('#top-switch-icon-blingertxt').click(function () {
    $('#blinger').hide();
    $('#credit').hide();
    $('#cash-management-reload').hide();
    $('#phonenumber').hide();
    $('#deposity').hide();
    $('#links').hide();
    $('#office-and-devices').hide();
    $('#news').hide();
    $('.rates').hide();
    $('#blingertxt').show();
  });
  $('#top-switch-icon-news').click(function () {
    $('#blinger').hide();
    $('#credit').hide();
    $('#cash-management-reload').hide();
    $('#phonenumber').hide();
    $('#deposity').hide();
    $('#links').hide();
    $('#office-and-devices').hide();
    $('#blingertxt').hide();
    $('.rates').hide();
    $('#news').show();
  });
});

$(function () {
  $('#translate-icon').click(function () {
    $('.translator').show();
    $('#translate-close-icon').show();
    $('#translate-icon').hide();
  });
  $('#translate-close-icon').click(function () {
    $('.translator').hide();
    $('#translate-close-icon').hide();
    $('#translate-icon').show();
  });
});
