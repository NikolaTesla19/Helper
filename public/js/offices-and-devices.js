"use strict"





$(function () {
  $('#infokiosk-switch').click(function() {
    $('.office-and-devices-switch').css('background-color', 'white');
    $('#infokiosk-switch').css('background-color', '#C9C9C9');
    $('#office').hide();
    $('#infokiosk').show();
  })
  $('#office-switch').click(function() {
    $('.office-and-devices-switch').css('background-color', 'white');
    $('#office-switch').css('background-color', '#C9C9C9');
    $('#infokiosk').hide();
    $('#office').show();
  })





  $('#office-all').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-all').css('background-color', '#C9C9C9');
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#office-minsk-details').hide();
    $('#map-office').hide();
    $('.office-mode-all').show();
  });

  $('#office-minsk').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-minsk').css('background-color', '#C9C9C9');
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').hide();
    $('#office-minsk-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-minsk').show();
    $('.office-minsk-switch').css('background-color', 'white');
    $('#office-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-details-all').click(function() {
    $('.office-minsk-switch').css('background-color', 'white');
    $('#office-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-minsk').show();
  });
  $('#office-details-saturday').click(function() {
    $('.office-minsk-switch').css('background-color', 'white');
    $('#office-details-saturday').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-saturday').show();
  });
  $('#office-details-sunday').click(function() {
    $('.office-minsk-switch').css('background-color', 'white');
    $('#office-details-sunday').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-sunday').show();
  });

  $('#office-minsk-region').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-minsk-region').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').hide();
    $('#office-minsk-region-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-minsk-region').show();
    $('.office-minsk-region-switch').css('background-color', 'white');
    $('#office-minsk-region-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-minsk-region-details-all').click(function() {
    $('.office-minsk-region-switch').css('background-color', 'white');
    $('#office-minsk-region-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-minsk-region').show();
  });
  $('#office-minsk-region-details-molodechno').click(function() {
    $('.office-minsk-region-switch').css('background-color', 'white');
    $('#office-minsk-region-details-molodechno').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-velikigostinec143b').show();
  });
  $('#office-minsk-region-details-borisov').click(function() {
    $('.office-minsk-region-switch').css('background-color', 'white');
    $('#office-minsk-region-details-borisov').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-gagarina46a').show();
  });
  $('#office-minsk-region-details-soligorsk').click(function() {
    $('.office-minsk-region-switch').css('background-color', 'white');
    $('#office-minsk-region-details-soligorsk').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-zheleznodorozhnaya21a').show();
  });
  $('#office-minsk-region-details-zhodino').click(function() {
    $('.office-minsk-region-switch').css('background-color', 'white');
    $('#office-minsk-region-details-zhodino').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-lenina212').show();
  });

  $('#office-brest-region').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-brest-region').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-minsk-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').hide();
    $('#office-brest-region-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-brest-region').show();
    $('.office-brest-region-switch').css('background-color', 'white');
    $('#office-brest-region-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-brest-region-details-all').click(function() {
    $('.office-brest-region-switch').css('background-color', 'white');
    $('#office-brest-region-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-brest-region').show();
  });
  $('#office-brest-region-details-brest').click(function() {
    $('.office-brest-region-switch').css('background-color', 'white');
    $('#office-brest-region-details-brest').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-lenina42').show();
  });
  $('#office-brest-region-details-baranovichi').click(function() {
    $('.office-brest-region-switch').css('background-color', 'white');
    $('#office-brest-region-details-baranovichi').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-sovetskaya82').show();
  });
  $('#office-brest-region-details-kobrin').click(function() {
    $('.office-brest-region-switch').css('background-color', 'white');
    $('#office-brest-region-details-kobrin').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-dzerzhinskogo61').show();
  });
  $('#office-brest-region-details-pinsk').click(function() {
    $('.office-brest-region-switch').css('background-color', 'white');
    $('#office-brest-region-details-pinsk').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-pervomayskaya40').show();
  });

  $('#office-vitebsk-region').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').hide();
    $('#office-vitebsk-region-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-vitebsk-region').show();
    $('.office-vitebsk-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-vitebsk-region-details-all').click(function() {
    $('.office-vitebsk-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-vitebsk-region').show();
  });
  $('#office-vitebsk-region-details-vitebsk').click(function() {
    $('.office-vitebsk-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region-details-vitebsk').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-kirova637').show();
  });
  $('#office-vitebsk-region-details-polock').click(function() {
    $('.office-vitebsk-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region-details-polock').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-skorini23').show();
  });
  $('#office-vitebsk-region-details-novopolock').click(function() {
    $('.office-vitebsk-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region-details-novopolock').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-molodezhnaya10397').show();
  });
  $('#office-vitebsk-region-details-orsha').click(function() {
    $('.office-vitebsk-region-switch').css('background-color', 'white');
    $('#office-vitebsk-region-details-orsha').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-mira411').show();
  });

  $('#office-gomel-region').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-gomel-region').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').hide();
    $('#office-gomel-region-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-gomel-region').show();
    $('.office-gomel-region-switch').css('background-color', 'white');
    $('#office-gomel-region-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-gomel-region-details-all').click(function() {
    $('.office-gomel-region-switch').css('background-color', 'white');
    $('#office-gomel-region-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-gomel-region').show();
  });
  $('#office-gomel-region-details-gomel').click(function() {
    $('.office-gomel-region-switch').css('background-color', 'white');
    $('#office-gomel-region-details-gomel').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-sovetskaya71').show();
  });
  $('#office-gomel-region-details-mozir').click(function() {
    $('.office-gomel-region-switch').css('background-color', 'white');
    $('#office-gomel-region-details-mozir').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-saeta4').show();
  });
  $('#office-gomel-region-details-rechica').click(function() {
    $('.office-gomel-region-switch').css('background-color', 'white');
    $('#office-gomel-region-details-rechica').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-sovetskaya93').show();
  });
  $('#office-gomel-region-details-zhlobin').click(function() {
    $('.office-gomel-region-switch').css('background-color', 'white');
    $('#office-gomel-region-details-zhlobin').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-pervomayskaya52').show();
  });

  $('#office-grodno-region').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-grodno-region').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').hide();
    $('#office-grodno-region-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-grodno-region').show();
    $('.office-grodno-region-switch').css('background-color', 'white');
    $('#office-grodno-region-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-grodno-region-details-all').click(function() {
    $('.office-grodno-region-switch').css('background-color', 'white');
    $('#office-grodno-region-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-grodno-region').show();
  });
  $('#office-grodno-region-details-grodno').click(function() {
    $('.office-grodno-region-switch').css('background-color', 'white');
    $('#office-grodno-region-details-grodno').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-kaluchinskaya21').show();
  });
  $('#office-grodno-region-details-ostrovec').click(function() {
    $('.office-grodno-region-switch').css('background-color', 'white');
    $('#office-grodno-region-details-ostrovec').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-volodarskogo59a').show();
  });
  $('#office-grodno-region-details-lida').click(function() {
    $('.office-grodno-region-switch').css('background-color', 'white');
    $('#office-grodno-region-details-lida').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-kirova8').show();
  });

  $('#office-mogilev-region').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-mogilev-region').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#map-office').hide();
    $('#office-mogilev-region-details').show();
    $('.office-mode-all').hide();
    $('.office-mode-mogilev-region').show();
    $('.office-mogilev-region-switch').css('background-color', 'white');
    $('#office-mogilev-region-details-all').css('background-color', '#C9C9C9');
  });
  $('#office-mogilev-region-details-all').click(function() {
    $('.office-mogilev-region-switch').css('background-color', 'white');
    $('#office-mogilev-region-details-all').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('.office-mode-mogilev-region').show();
  });
  $('#office-mogilev-region-details-mogilev').click(function() {
    $('.office-mogilev-region-switch').css('background-color', 'white');
    $('#office-mogilev-region-details-mogilev').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-dzerzhinskogo7a').show();
  });
  $('#office-mogilev-region-details-bobryisk').click(function() {
    $('.office-mogilev-region-switch').css('background-color', 'white');
    $('#office-mogilev-region-details-bobryisk').css('background-color', '#C9C9C9');
    $('.office-mode-all').hide();
    $('#office-container-socialisticheskaya12353').show();
  });

  $('#office-map').click(function() {
    $('.office-region-switch').css('background-color', 'white');
    $('#office-map').css('background-color', '#C9C9C9');
    $('#office-minsk-details').hide();
    $('#office-minsk-region-details').hide();
    $('#office-brest-region-details').hide();
    $('#office-vitebsk-region-details').hide();
    $('#office-gomel-region-details').hide();
    $('#office-grodno-region-details').hide();
    $('#office-mogilev-region-details').hide();
    $('#map-office').show();
    $('.office-mode-all').hide();
  });
  $('#rates').load(function(){
    $('#office-myasnikova32').html(myasnikova32);
  });
  $('#rates').load(function(){
    $('#office-moskovskaya13').html(moskovskaya13);
  });
  $('#rates').load(function(){
    $('#office-zaslavskaya10').html(zaslavskaya10);
  });

















  $('#infokiosk-switch-all').click(function() {
    $('.infokiosk-switch').css('background-color', 'white');
    $('#infokiosk-switch-all').css('background-color', '#C9C9C9');
    $('#map-infokiosk').hide();
    $('.infokiosk-address-all').show();
  });
  $('#infokiosk-switch-24').click(function() {
    $('.infokiosk-switch').css('background-color', 'white');
    $('#infokiosk-switch-24').css('background-color', '#C9C9C9');
    $('.infokiosk-address-all, #map-infokiosk').hide();
    $('.infokiosk-address-24').show();
  });
  $('#infokiosk-switch-minsk').click(function() {
    $('.infokiosk-switch').css('background-color', 'white');
    $('#infokiosk-switch-minsk').css('background-color', '#C9C9C9');
    $('.infokiosk-address-all, #map-infokiosk').hide();
    $('.infokiosk-address-minsk').show();
  });
  $('#infokiosk-switch-map').click(function() {
    $('.infokiosk-switch').css('background-color', 'white');
    $('#infokiosk-switch-map').css('background-color', '#C9C9C9');
    $('.infokiosk-address-all').hide();
    $('#map-infokiosk').show();
  });
});
