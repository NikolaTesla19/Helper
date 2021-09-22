"use strict";

var mapvariable = 1;
var dohodkreditopolychatelya, limitpokreditnimkartam, limitpohalve, platezipokreditam, kolichestvoizdivencev, neobhodimayasumma, srokkreditovaniya, sovokypniydohod;
var kategoriyaklienta, chistiydohod, chistiydohodnedvizimost, porog40, raschetnayasumma, raschetnayasummanedvizimost, chistiydohod240, raschetnayasumma240;
var dohkred, kredcard, halva, platkred, izdiv, sumneed, srok, srok, klassik, prestiz, premium, vip, sovdoh;
var x11, x12, xs12, x8x, x8y, x12z1y1, x12z2y1, x13z1y1, x13z2y1;
var x5y1, x5y2, x5y3, x5y6, x5y7, x5y8, x5y9;
var x1y1, x1y2, x1y6, x1y7, x1y9, x1y10;
var x2y1, x2y2, x2y6, x2y7, x2y9, x2y10;
var x3y1, x3y2, x3y3, x3y6, x3y7, x3y8, x3y9, x3y10;
var x4y1, x4y2, x4y3, x4y4, x4y6, x4y7, x4y8, x4y9, x4y10;
var x6y1, x6y2, x6y3, x6y4, x6y6, x6y7, x6y8, x6y9, x6y10;
var x7y1, x7y2, x7y3, x7y4, x7y6, x7y7, x7y9, x7y10;
var x8y1, x8y2, x8y3, x8y6, x8y7, x8y8, x8y9, x8y10;
var x9y1, x9y2, x9y3, x9y6, x9y7, x9y8, x9y9, x9y10;
var x10y1, x10y2, x10y3, x10y6, x10y7, x10y8, x10y9, x10y10;
var x11y1, x11y2, x11y3, x11y6, x11y7, x11y8, x11y9, x11y10;
var x12y1, x12y2, x12y3, x12y5, x12y6, x12y7, x12y8, x12y9, x12y10;
var x13y1, x13y2, x13y3, x13y5, x13y6, x13y7, x13y8, x13y9, x13y10;
var x14y1, x14y2, x14y3, x14y5, x14y6, x14y7, x14y8, x14y9, x14y10;
var x15y1, x15y2, x15y4, x15y7, x15y10;
function resul() {
      dohkred = document.getElementById("dohod-kreditopolychatelya"),
      kredcard = document.getElementById("limit-po-kreditnim-kartam"),
      halva = document.getElementById("limit-po-halve"),
      platkred = document.getElementById("platezi-po-kreditam"),
      izdiv = document.getElementById("kolichestvo-izdivencev"),
      sumneed = document.getElementById("neobhodimaya-summa"),
      srok = document.getElementById("srok-kreditovaniya"),
      klassik = document.getElementById("id_klassik"),
      prestiz = document.getElementById("id_prestiz"),
      premium = document.getElementById("id_premium"),
      vip = document.getElementById("id_vip"),
      sovdoh = document.getElementById("sovokypniy-dohod-kolichestvo");

  if (dohkred.value === undefined) {
    alert('Введите доход кредитополучателя!')
    dohodkreditopolychatelya = bpm;
  } else {
      if (dohkred.value == 0) {
        alert('Введите доход кредитополучателя!');
        dohodkreditopolychatelya = bpm;
      } else {
        dohodkreditopolychatelya = dohkred.value;
      };
  };
  limitpokreditnimkartam = kredcard.value;
  limitpohalve = halva.value;
  platezipokreditam = platkred.value;
  kolichestvoizdivencev = izdiv.value;
  neobhodimayasumma = sumneed.value;
  srokkreditovaniya = srok.value;
  sovokypniydohod = sovdoh.value;
  chistiydohodf();
  chistiydohodnedvizimostf();
  porog40f();
  porog40nedvizimostf();
  chistiydohod240f();
  porog40240f();
  check();
  $('#chistiy-dohod').html('<p>' + chistiydohodnedvizimost + '</p>');
  $('#id_ylas').html( itogylas() );
  $('#id_drysh').html( itogdrysh() );
  $('#id_ydali').html( itogydali() );
  $('#id_hutki').html( itoghutki() );
  $('#id_klikni').html( itogklikni() );
  $('#id_lagodni').html( itoglagodni() );
  $('#id_sprintar').html( itogsprintar() );
  $('#id_dabrabit').html( itogdabrabit() );
  $('#id_svoechas').html( itogsvoechas() );
  $('#id_spray').html( itogspray() );
  $('#id_parada').html( itogparada() );
  $('#id_overdr').html( itogoverdr() );
  $('#id_overdron').html( itogoverdron() );
  $('#id_ykas').html( itogykas() );
  ylasras1();
  dryshras1();
  lagodniras1();
  dabrabitras1();
  ydaliras1();
  hutkiras1();
  klikniras1();
  sprintarras1();
  svoechasras1();
  sprayras1();
  paradaras1();
  paradarasism();
  overdrras1();
  overdronras1();


  blingerylas();
  blingerdrysh();

};

function check() {
  kategoriyaklienta = $('input[name="kat"]:checked').val();
  return kategoriyaklienta;
};

function chistiydohodf() {
  chistiydohod = dohodkreditopolychatelya - limitpokreditnimkartam / 12 - limitpohalve / 6 - platezipokreditam - kolichestvoizdivencev * bpm * 0.5 - bpm;
  if (chistiydohod < 0) {
    alert( 'Чистый доход отрицательный, кредитование недоступно!' );
	  chistiydohod = chistiydohod.toFixed(2);
  } else {
    chistiydohod = chistiydohod.toFixed(2);
  };
  return chistiydohod;
};

function chistiydohodnedvizimostf(){
  if (sovdoh.value < 2) {
    sovokypniydohod = 1;
  } else {
	   if (sovdoh.value > 4) {
		   sovokypniydohod = 4;
       alert ('Количество лиц, учавствующих в совокупном доходе, не может превышать 4, применённое значение 4!');
	   } else {
       sovokypniydohod = sovdoh.value;
     };
  };
  chistiydohodnedvizimost = dohodkreditopolychatelya - limitpokreditnimkartam / 12 - limitpohalve / 6 - platezipokreditam - kolichestvoizdivencev * bpm * 0.5 - bpm * sovokypniydohod;
  if (chistiydohod < 0) {
	  chistiydohodnedvizimost = chistiydohodnedvizimost.toFixed(2);
  } else {
    chistiydohodnedvizimost = chistiydohodnedvizimost.toFixed(2);
  };
  return chistiydohodnedvizimost;
};

function porog40f() {
  porog40 = 0.4 * dohodkreditopolychatelya - limitpokreditnimkartam / 12 - limitpohalve / 6 - platezipokreditam;
  if (porog40 < 0) {
    alert('Кредитная нагрузка свыше 40%, кредитование недоступно!');
    raschetnayasumma = 0;
  } else {
	  if  (porog40 > chistiydohod) {
  	  raschetnayasumma = chistiydohod;
    } else {
  	  raschetnayasumma = porog40;
    };
  };
	return raschetnayasumma;
};

function porog40nedvizimostf() {
  if (porog40 < 0) {
    raschetnayasummanedvizimost = 0;
  } else {
	if  (porog40 > chistiydohodnedvizimost) {
	  raschetnayasummanedvizimost = chistiydohodnedvizimost;
	} else {
	  raschetnayasummanedvizimost = porog40;
  };
};
	return raschetnayasummanedvizimost;
};

function chistiydohod240f() {
  if (kolichestvoizdivencev == 0) {
    chistiydohod240 = dohodkreditopolychatelya - limitpokreditnimkartam / 12 - limitpohalve / 6 - platezipokreditam - bpm * sovokypniydohod;
  } else {
    chistiydohod240 = dohodkreditopolychatelya - limitpokreditnimkartam / 12 - limitpohalve / 6 - platezipokreditam - bpm * sovokypniydohod - kolichestvoizdivencev * 0.4;
  };
  return chistiydohod240;
};
function porog40240f() {
	if  (porog40 > chistiydohod240) {
	  raschetnayasumma240 = chistiydohod240;
	} else {
	  raschetnayasumma240 = porog40;
        };
	return raschetnayasumma240;
};
