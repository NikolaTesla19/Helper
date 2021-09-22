"use strict"




$(function () {
  $('#id_ylasdiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_ylasdivshow').show();
  });
  $('#id_dryshdiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_dryshdivshow').show();
  });

  $('#id_ydalidiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_ydalidivshow').show();
  });
  $('#id_backydali').click(function() {
	  $('.terms').hide();
	  $('.credit-calc-output-conteiner').show();
  });

  $('#id_hutkidiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_hutkidivshow').show();
  });
  $('#id_backhutki').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_kliknidiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
  	$('#id_kliknidivshow').show();
   });
  $('#id_backklikni').click(function() {
	  $('.terms').hide();
	  $('.credit-calc-output-conteiner').show();
  });

  $('#id_lagodnidiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_lagodnidivshow').show();
  });
  $('#id_backlagodni').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_sprintardiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_sprintardivshow').show();
  });
  $('#id_backsprintar').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_dabrabitdiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_dabrabitdivshow').show();
  });
  $('#id_backdabrabit').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_svoechasdiv').click(function() {
  	$('.credit-calc-output-conteiner').hide();
  	$('#id_svoechasdivshow').show();
  });
  $('#id_backsvoechas').click(function() {
  	$('.terms').hide();
  	$('.credit-calc-output-conteiner').show();
  });

  $('#id_spraydiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_spraydivshow').show();
  });
  $('#id_backspray').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_paradadiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_paradadivshow').show();
  });
  $('#id_backparada').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_overdrdiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_overdrdivshow').show();
  });
  $('#id_backoverdr').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });

  $('#id_overdrondiv').click(function() {
    $('.credit-calc-output-conteiner').hide();
    $('#id_overdrondivshow').show();
  });
  $('#id_backoverdron').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });
  $('.back').click(function() {
    $('.terms').hide();
    $('.credit-calc-output-conteiner').show();
  });
});
$(function (){
  $('#help-neobhodimaya-summa').mouseover(function() {
    $('#info-neobhodimaya-summa').show();
  });
  $('#help-neobhodimaya-summa').mouseout(function() {
    $('#info-neobhodimaya-summa').hide();
  });
  $('#help-srock-creditovaniya').mouseover(function() {
    $('#info-srock-creditovaniya').show();
  });
  $('#help-srock-creditovaniya').mouseout(function() {
    $('#info-srock-creditovaniya').hide();
  });
  $('#help-izdevenci').mouseover(function() {
    $('#info-izdevenci').show();
  });
  $('#help-izdevenci').mouseout(function() {
    $('#info-izdevenci').hide();
  });
})
var ylasras = new Array(242);
var  ylasrasmas, ylaszad, ylaspl, ylaspr, ylasosn, ylasosnprov, ylasmes, ylasosnmes, summylaspr, summylasosn, summylaspl, ylasgrafispper;

function ylasras1() {
  $('#ylasgraf').empty();
	$('#ylasgraf').html('<table class="table" id="tableylasras"><tbody id="id_tableylasrasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summylaspr = 0;
	summylasosn = 0;
	summylaspl = 0;
	ylasosn = (neobhodimayasumma == 0) ? x1y2:
		  (neobhodimayasumma >= x1y2) ? x1y2: neobhodimayasumma;
	ylaszad = ylasosn;
	for (var i = 1; i < ylasras.length; i++) {
		function ylasras2() {
			ylasmes = i;
			ylasosnmes = ylasosn / 241;
			ylaspr = ylaszad * (procentnayastavka / 1200);
			ylaspl = ylaspr + ylasosnmes;
			ylasrasmas = '<tr><td>' + ylasmes + '</td><td>' + Math.round(ylaszad) + '</td><td>' + Math.round(ylasosnmes) + '</td><td>' +  Math.round(ylaspr) + '</td><td>' +  Math.round(ylaspl) +'</td></tr>';
			ylaszad = ylaszad - ylasosnmes;
			ylasras[i] = ylasrasmas;
			return ylasras[i];
				};
		$('#id_tableylasrasjs, #id_tableylasrasjsref').append(ylasras2());
		summylaspr += ylaspr;
		summylasosn += ylasosnmes;
		summylaspl += ylaspl;
	};
	$('#id_tableylasrasjs, #id_tableylasrasjsref').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summylasosn) + '</td><td>' + Math.round(summylaspr) + '</td><td>' + Math.round(summylaspl) + '</td></tr>');
};


$(function () {
  $('#id_ylasmenuobesp').click(function () {
    $('.terms-ylas').hide();
    $('#id_ylasysl1').show();
  });
  $('#id_ylasmenuobespref').click(function () {
    $('.terms-ylas').hide();
    $('#id_ylasysl2').show();
  });
  $('#id_ylasmenugraf').click(function () {
    $('.terms-ylas').hide();
    $('#ylasgraf').show();
  });
  $('#id_ylasmenuyslza').click(function () {
    $('.terms-ylas').hide();
    $('#ylasyslzayavitel').show();
    });
  $('#id_ylasmenuyslp').click(function () {
    $('.terms-ylas').hide();
    $('#ylasyslporychitel').show();
  });
  $('#id_ylasmenudocza').click(function () {
    $('.terms-ylas').hide();
    $('#ylasdoczayavitel').show();
  });
  $('#id_ylasmenudocp').click(function () {
    $('.terms-ylas').hide();
    $('#ylasdocporychitel').show();
  });
  $('#id_ylasmenudop').click(function () {
    $('.terms-ylas').hide();
    $('#ylasysldop').show();
  });
  $('#id_ylasmenublinger').click(function () {
    $('.terms-ylas').hide();
    $('#blingerylastext').show();
  });
});

var dryshras = new Array(301);
var  dryshrasmas, dryshzad, dryshpl, dryshpr, dryshosn, dryshosnprov, dryshmes, dryshosnmes, summdryshpr, summdryshosn, summdryshpl, dryshgrafispper;

function dryshras1() {
  $('#dryshgraf').empty();
	$('#dryshgraf').html('<table class="table" id="tabledryshras"><tbody id="id_tabledryshrasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summdryshpr = 0;
	summdryshosn = 0;
	summdryshpl = 0;
	dryshosn = (neobhodimayasumma == 0) ? summdrysh():
		  (neobhodimayasumma >= summdrysh()) ? summdrysh(): neobhodimayasumma;
	dryshzad = dryshosn;
	for (var i = 1; i < dryshras.length; i++) {
		function dryshras2() {
			dryshmes = i;
			dryshosnmes = dryshosn / 300;
			dryshpr = dryshzad * (procentnayastavka / 1200);
			dryshpl = dryshpr + dryshosnmes;
			dryshrasmas = '<tr><td>' + dryshmes + '</td><td>' + Math.round(dryshzad) + '</td><td>' + Math.round(dryshosnmes) + '</td><td>' +  Math.round(dryshpr) + '</td><td>' +  Math.round(dryshpl) +'</td></tr>';
			dryshzad = dryshzad - dryshosnmes;
			dryshras[i] = dryshrasmas;
			return dryshras[i];
				};
		$('#id_tabledryshrasjs').append(dryshras2());
		summdryshpr += dryshpr;
		summdryshosn += dryshosnmes;
		summdryshpl += dryshpl;
	};
	$('#id_tabledryshrasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summdryshosn) + '</td><td>' + Math.round(summdryshpr) + '</td><td>' + Math.round(summdryshpl) + '</td></tr>');
};


$(function () {
  $('#id_dryshmenuobesp').click(function () {
    $('.terms-drysh').hide();
    $('#id_dryshysl1').show();
  });
  $('#id_dryshmenugraf').click(function () {
    $('.terms-drysh').hide();
    $('#dryshgraf').show();
  });
  $('#id_dryshmenuyslza').click(function () {
    $('.terms-drysh').hide();
    $('#dryshyslzayavitel').show();
  });
  $('#id_dryshmenuyslp').click(function () {
    $('.terms-drysh').hide();
    $('#dryshyslporychitel').show();
  });
  $('#id_dryshmenudocza').click(function () {
    $('.terms-drysh').hide();
    $('#dryshdoczayavitel').show();
  });
  $('#id_dryshmenudocp').click(function () {
    $('.terms-drysh').hide();
    $('#dryshdocporychitel').show();
  });
  $('#id_dryshmenudop').click(function () {
    $('.terms-drysh').hide();
    $('#dryshysldop').show();
  });
  $('#id_dryshmenublinger').click(function () {
    $('.terms-drysh').hide();
    $('#blingerdryshtext').show();
  });
});

var ydaliras = new Array();
var summydalipr, summydaliosn, summydalipl, ydaliosn, ydalizad, ydalimes, ydaliosnmes, ydalipr, ydalipl, ydalirasmas;

function ydaliras1() {
  $('#ydaligraf').empty();
	$('#ydaligraf').html('<table class="table" id="tableydaliras"><tbody id="id_tableydalirasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summydalipr = 0;
	summydaliosn = 0;
	summydalipl = 0;
	ydaliosn = (neobhodimayasumma == 0) ? x3y2:
		  (neobhodimayasumma >= x3y2) ? x3y2: neobhodimayasumma;
	ydalizad = ydaliosn;
	for (var i = 0; i < x3y3; i++) {
		function ydaliras2() {
			ydalimes = i + 1;
			ydaliosnmes = ydaliosn / x3y3;
			ydalipr = ydalizad * (procentnayastavka / 1200);
			ydalipl = ydalipr + ydaliosnmes;
			ydalirasmas = '<tr><td>' + ydalimes + '</td><td>' + Math.round(ydalizad) + '</td><td>' + Math.round(ydaliosnmes) + '</td><td>' +  Math.round(ydalipr) + '</td><td>' +  Math.round(ydalipl) + '</td></tr>';
			ydalizad = ydalizad - ydaliosnmes;
			ydaliras[i] = ydalirasmas;
			return ydaliras[i];
				};
		$('#id_tableydalirasjs').append(ydaliras2());
		summydalipr += ydalipr;
		summydaliosn += ydaliosnmes;
		summydalipl += ydalipl;
	};
	$('#id_tableydalirasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summydaliosn) + '</td><td>' + Math.round(summydalipr) + '</td><td>' + Math.round(summydalipl) + '</td></tr>');
};

$(function () {
  $('#id_ydaliyslobespkategkl').click(function () {
    $('#id_ydaliyslobesp2vip').hide();
    $('#id_ydaliyslobesp2premiym').hide();
    $('#id_ydaliyslobesp2klassik').show();
  });
  $('#id_ydaliyslobespkategpr').click(function () {
    $('#id_ydaliyslobesp2vip').hide();
    $('#id_ydaliyslobesp2klassik').hide();
    $('#id_ydaliyslobesp2premiym').show();
  });
  $('#id_ydaliyslobespkategvip').click(function () {
    $('#id_ydaliyslobesp2klassik').hide();
    $('#id_ydaliyslobesp2premiym').hide();
    $('#id_ydaliyslobesp2vip').show();
  });
});

$(function () {
  $('#id_ydalimenuobesp').click(function () {
    $('.terms-ydali').hide();
    $('#id_ydaliyslobesp').show();
  });
  $('#id_ydalimenugraf').click(function () {
    $('.terms-ydali').hide();
    $('#ydaligraf').show();
  });
  $('#id_ydalimenuyslza').click(function () {
    $('.terms-ydali').hide();
    $('#ydaliyslzayavitel').show();
  });
  $('#id_ydalimenuyslp').click(function () {
    $('.terms-ydali').hide();
    $('#ydaliyslporychitel').show();
  });
  $('#id_ydalimenudocza').click(function () {
    $('.terms-ydali').hide();
    $('#ydalidoczayavitel').show();
  });
  $('#id_ydalimenudocp').click(function () {
    $('.terms-ydali').hide();
    $('#ydalidocporychitel').show();
  });
  $('#id_ydalimenudop').click(function () {
    $('.terms-ydali').hide();
    $('#ydaliysldop').show();
  });
  $('#id_ydalimenublinger').click(function () {
    $('.terms-ydali').hide();
    $('#ydaliyslblinger').show();
  });
});

var hutkiras = new Array();
var summhutkipr, summhutkiosn, summhutkipl, hutkiosn, hutkizad, hutkimes, hutkiosnmes, hutkipr, hutkipl, hutkirasmas;

function hutkiras1() {
  $('#hutkigraf').empty();
	$('#hutkigraf').html('<table class="table" id="tablehutkiras"><tbody id="id_tablehutkirasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summhutkipr = 0;
	summhutkiosn = 0;
	summhutkipl = 0;
	hutkiosn = (neobhodimayasumma == 0) ? x4y2:
		  (neobhodimayasumma >= x4y2) ? x4y2: neobhodimayasumma;
	hutkizad = hutkiosn;
	for (var i = 0; i < x4y3; i++) {
		function hutkiras2() {
			hutkimes = i + 1;
			hutkiosnmes = hutkiosn / x4y3;
			hutkipr = hutkizad * (x4y4 / 1200);
			hutkipl = hutkipr + hutkiosnmes;
			hutkirasmas = '<tr><td>' + hutkimes + '</td><td>' + Math.round(hutkizad) + '</td><td>' + Math.round(hutkiosnmes) + '</td><td>' +  Math.round(hutkipr) + '</td><td>' +  Math.round(hutkipl) + '</td></tr>';
			hutkizad = hutkizad - hutkiosnmes;
			hutkiras[i] = hutkirasmas;
			return hutkiras[i];
				};
		$('#id_tablehutkirasjs').append(hutkiras2());
		summhutkipr += hutkipr;
		summhutkiosn += hutkiosnmes;
		summhutkipl += hutkipl;
	};
	$('#id_tablehutkirasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summhutkiosn) + '</td><td>' + Math.round(summhutkipr) + '</td><td>' + Math.round(summhutkipl) + '</td></tr>');
};

$(function () {
  $('#id_hutkimenugraf').click(function () {
    $('.terms-hutki').hide();
    $('#hutkigraf').show();
  });
  $('#id_hutkimenuyslza').click(function () {
    $('.terms-hutki').hide();
    $('#hutkiyslzayavitel').show();
  });
  $('#id_hutkimenudop').click(function () {
    $('.terms-hutki').hide();
    $('#hutkiysldop').show();
  });
  $('#id_hutkimenublinger').click(function () {
    $('.terms-hutki').hide();
    $('#hutkiyslblinger').show();
  });
});

var klikniras = new Array();
var summkliknipr, summklikniosn, summkliknipl, klikniosn, kliknizad, kliknimes, klikniosnmes, kliknipr, kliknipl, kliknirasmas;

function klikniras1() {
	if (check() == 1) {
    $('#kliknigraf').empty();
  	$('#kliknigraf').html('<div style="height: 60px; width: 700px; float: left; background-color: white;" id="id_pkliknitext"><p align="center" style="color: red; font-size: 20px;">Недоступен для клиентов категории Классик</p></div>');
  } else {
    $('#kliknigraf').empty();
    $('#kliknigraf').html('<table class="table" id="tableklikniras"><tbody id="id_tablekliknirasjs"></tbody></table>');
  	$('#id_tablekliknirasjs').html('<tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr>');
  	summkliknipr = 0;
  	summklikniosn = 0;
  	summkliknipl = 0;
  	klikniosn = (neobhodimayasumma == 0) ? x5y2:
          	 (neobhodimayasumma >= x5y2) ? x5y2: neobhodimayasumma;
  	kliknizad = klikniosn;
  	for (var i = 0; i < x3y3; i++) {
  		function klikniras2() {
  			kliknimes = i + 1;
  			klikniosnmes = klikniosn / x3y3;
  			kliknipr = kliknizad * (procentnayastavka / 1200);
  			kliknipl = kliknipr + klikniosnmes;
  			kliknirasmas = '<tr><td>' + kliknimes + '</td><td>' + Math.round(kliknizad) + '</td><td>' + Math.round(klikniosnmes) + '</td><td>' +  Math.round(kliknipr) + '</td><td>' +  Math.round(kliknipl) + '</td></tr>';
  			kliknizad = kliknizad - klikniosnmes;
  			klikniras[i] = kliknirasmas;
  			return klikniras[i];
			};
  		$('#id_tablekliknirasjs').append(klikniras2());
  		summkliknipr += kliknipr;
  		summklikniosn += klikniosnmes;
  		summkliknipl += kliknipl;
  	};
	$('#id_tablekliknirasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summklikniosn) + '</td><td>' + Math.round(summkliknipr) + '</td><td>' + Math.round(summkliknipl) + '</td></tr>');
	};
};

$(function () {
  $('#id_kliknimenugraf').click(function () {
    $('.terms-klikni').hide();
    $('#kliknigraf').show();
  });
  $('#id_kliknimenuyslza').click(function () {
    $('.terms-klikni').hide();
    $('#klikniyslzayavitel').show();
  });
  $('#id_klinimenudop').click(function () {
    $('.terms-klikni').hide();
    $('#klikniysldop').show();
  });
  $('#id_kliknimenublinger').click(function () {
    $('.terms-klikni').hide();
    $('#blingerkliknitext').show();
  });
});

var lagodniras = new Array();
var summlagodnipr, summlagodniosn, summlagodnipl, lagodniosn, lagodnizad, lagodnimes, lagodniosnmes, lagodnipr, lagodnipl, lagodnirasmas;

function lagodniras1() {
  $('#lagodnigraf').empty();
	$('#lagodnigraf').html('<table class="table" id="tablelagodniras"><tbody id="id_tablelagodnirasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summlagodnipr = 0;
	summlagodniosn = 0;
	summlagodnipl = 0;
	lagodniosn = (neobhodimayasumma == 0) ? x6y2:
		  (neobhodimayasumma >= x6y2) ? x6y2: neobhodimayasumma;
	lagodnizad = lagodniosn;
	for (var i = 0; i < x6y3; i++) {
		function lagodniras2() {
			lagodnimes = i + 1;
			lagodniosnmes = lagodniosn / x6y3;
			lagodnipr = lagodnizad * (procentnayastavka / 1200);
			lagodnipl = lagodnipr + lagodniosnmes;
			lagodnirasmas = '<tr><td>' + lagodnimes + '</td><td>' + Math.round(lagodnizad) + '</td><td>' + Math.round(lagodniosnmes) + '</td><td>' +  Math.round(lagodnipr) + '</td><td>' +  Math.round(lagodnipl) + '</td></tr>';
			lagodnizad = lagodnizad - lagodniosnmes;
			lagodniras[i] = lagodnirasmas;
			return lagodniras[i];
				};
		$('#id_tablelagodnirasjs').append(lagodniras2());
		summlagodnipr += lagodnipr;
		summlagodniosn += lagodniosnmes;
		summlagodnipl += lagodnipl;
	};
	$('#id_tablelagodnirasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summlagodniosn) + '</td><td>' + Math.round(summlagodnipr) + '</td><td>' + Math.round(summlagodnipl) + '</td></tr>');
};

$(function () {
  $('#id_lagodnimenugraf').click(function () {
    $('.terms-lagodni').hide();
    $('#lagodnigraf').show();
  });
  $('#id_lagodnimenuyslza').click(function () {
    $('.terms-lagodni').hide();
    $('#lagodniyslzayavitel').show();
  });
  $('#id_lagodnimenudocza').click(function () {
    $('.terms-lagodni').hide();
    $('#lagodnidoczayavitel').show();
  });
  $('#id_lagodnimenudop').click(function () {
    $('.terms-lagodni').hide();
    $('#lagodniysldop').show();
  });
  $('#id_lagodnimenublinger').click(function () {
    $('.terms-lagodni').hide();
    $('#blingerlagodnitext').show();
  });
});

var sprintarras = new Array();
var summsprintarpr, summsprintarosn, summsprintarpl, sprintarosn, sprintarzad, sprintarmes, sprintarosnmes, sprintarpr, sprintarpl, sprintarrasmas;

function sprintarras1() {
  $('#sprintargraf').empty();
	$('#sprintargraf').html('<table class="table" id="tablesprintarras"><tbody id="id_tablesprintarrasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summsprintarpr = 0;
	summsprintarosn = 0;
	sprintarosn = (neobhodimayasumma == 0) ? x7y2:
		  (neobhodimayasumma >= x7y2) ? x7y2: neobhodimayasumma;
	sprintarpl = sprintarosn * (((x7y4 / 1200) * ((1 + (x7y4 / 1200)) ** x7y3)) / (((1 + (x7y4 / 1200)) ** x7y3) - 1));
	sprintarzad = sprintarosn;
	for (var i = 0; i < x7y3; i++) {
		function sprintarras2() {
			sprintarmes = i + 1;
			sprintarpr = sprintarzad * (x7y4 / 1200);
			sprintarosnmes = sprintarpl - sprintarpr;
			sprintarrasmas = '<tr><td>' + sprintarmes + '</td><td>' + Math.round(sprintarzad) + '</td><td>' + Math.round(sprintarosnmes) + '</td><td>' +  Math.round(sprintarpr) + '</td><td>' +  Math.round(sprintarpl) + '</td></tr>';
			sprintarzad = sprintarzad - sprintarosnmes;
			sprintarras[i] = sprintarrasmas;
			return sprintarras[i];
				};
		$('#id_tablesprintarrasjs').append(sprintarras2());
		summsprintarpr += sprintarpr;
		summsprintarosn += sprintarosnmes;
		summsprintarpl = sprintarpl * x7y3;
	};
	$('#id_tablesprintarrasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summsprintarosn) + '</td><td>' + Math.round(summsprintarpr) + '</td><td>' + Math.round(summsprintarpl) + '</td></tr>');
};

$(function () {
  $('#id_sprintarmenugraf').click(function () {
    $('.terms-sprintar').hide();
    $('#sprintargraf').show();
  });
  $('#id_sprintarmenuyslza').click(function () {
    $('.terms-sprintar').hide();
    $('#sprintaryslzayavitel').show();
  });
  $('#id_sprintarmenudocza').click(function () {
    $('.terms-sprintar').hide();
    $('#sprintardoczayavitel').show();
  });
  $('#id_sprintarmenudop').click(function () {
    $('.terms-sprintar').hide();
    $('#sprintarysldop').show();
  });
  $('#id_sprintarmenublinger').click(function () {
    $('.terms-sprintar').hide();
    $('#sprintaryslblinger').show();
  });
});

var dabrabitras = new Array();
var summdabrabitpr, summdabrabitosn, summdabrabitpl, dabrabitosn, dabrabitzad, dabrabitmes, dabrabitosnmes, dabrabitpr, dabrabitpl, dabrabitrasmas;

function dabrabitras1() {
  $('#dabrabitgraf').empty()
	$('#dabrabitgraf').html('<table class="table" id="tabledabrabitras"><tbody id="id_tabledabrabitrasjs"><tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr></tbody></table>');
	summdabrabitpr = 0;
	summdabrabitosn = 0;
	summdabrabitpl = 0;
	dabrabitosn = (neobhodimayasumma == 0) ? x8y2:
		  (neobhodimayasumma >= x8y2) ? x8y2: neobhodimayasumma;
	dabrabitzad = dabrabitosn;
	for (var i = 0; i < x8y3; i++) {
		function dabrabitras2() {
			dabrabitmes = i + 1;
			dabrabitosnmes = dabrabitosn / x8y3;
			dabrabitpr = dabrabitzad * (procentnayastavka / 1200);
			dabrabitpl = dabrabitpr + dabrabitosnmes;
			dabrabitrasmas = '<tr><td>' + dabrabitmes + '</td><td>' + Math.round(dabrabitzad) + '</td><td>' + Math.round(dabrabitosnmes) + '</td><td>' +  Math.round(dabrabitpr) + '</td><td>' +  Math.round(dabrabitpl) + '</td></tr>';
			dabrabitzad = dabrabitzad - dabrabitosnmes;
			dabrabitras[i] = dabrabitrasmas;
			return dabrabitras[i];
				};
		$('#id_tabledabrabitrasjs').append(dabrabitras2());
		summdabrabitpr += dabrabitpr;
		summdabrabitosn += dabrabitosnmes;
		summdabrabitpl += dabrabitpl;
	};
	$('#id_tabledabrabitrasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summdabrabitosn) + '</td><td>' + Math.round(summdabrabitpr) + '</td><td>' + Math.round(summdabrabitpl) + '</td></tr>');
};

$(function () {
  $('#id_dabrabitmenuobesp').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabityslobesp').show();
  });
  $('#id_dabrabitmenugraf').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabitgraf').show();
  });
  $('#id_dabrabitmenuyslza').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabityslzayavitel').show();
  });
  $('#id_dabrabitmenuyslp').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabityslporychitel').show();
  });
  $('#id_dabrabitmenudocza').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabitdoczayavitel').show();
  });
  $('#id_dabrabitmenudocp').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabitdocporychitel').show();
  });
  $('#id_dabrabitmenudop').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabitysldop').show();
  });
  $('#id_dabrabitmenublinger').click(function () {
    $('.terms-dabrabit').hide();
    $('#dabrabityslblinger').show();
  });
});

var svoechasras3 = new Array();
var svoechasras4 = new Array();
var summsvoechaspr, summsvoechasosn, summsvoechaspl, svoechasosn, svoechaszad, svoechasmes, svoechasosnmes, svoechaspr, svoechaspl, svoechasrasmas, svoechaszad1;

function svoechasras1() {
  $('#svoechasgraf').empty();
  $('#svoechasgraf').html('<table class="table" id="tablesvoechasras"><tbody id="id_tablesvoechasrasjs"></tbody></table>');
  summsvoechaspr = 0;
  summsvoechasosn = 0;
  summsvoechaspl = 0;
	$('#id_tablesvoechasrasjs').empty();
	svoechasosn = (neobhodimayasumma == 0) ? x9y2:
		  (neobhodimayasumma >= x9y2) ? x9y2: neobhodimayasumma;
	svoechaszad = svoechasosn;
	for (var i = 0; i < 24; i++) {
		function svoechasras2() {
			svoechasmes = i + 1;
			svoechasosnmes = svoechaszad * 0.02;
			svoechaspr = svoechaszad * (procentnayastavka / 1200);
			svoechaspl = svoechaspr + svoechasosnmes;
			svoechasrasmas = '<tr><td>' + svoechasmes + '</td><td>' + Math.round(svoechaszad) + '</td><td>' + Math.round(svoechasosnmes) + '</td><td>' +  Math.round(svoechaspr) + '</td><td>' +  Math.round(svoechaspl) + '</td></tr>';
			svoechaszad = svoechaszad - svoechasosnmes;
			svoechasras3 [i] = svoechasrasmas;
			return svoechasras3[i];
				};
		$('#id_tablesvoechasrasjs').append(svoechasras2());
		summsvoechaspr += svoechaspr;
		summsvoechasosn += svoechasosnmes;
		summsvoechaspl += svoechaspl;
	};
	svoechaszad1 = svoechaszad;
	$('#id_tablesvoechasrasjs').append('<tr><td colspan = "5">Заканчивается период возобновляемости</td></tr>');
	for (var i = 0; i < 12; i++) {
		function svoechasras3() {
			svoechasmes = i + 25;
			svoechasosnmes = svoechaszad1 / 12;
			svoechaspr = svoechaszad * (procentnayastavka / 1200);
			svoechaspl = svoechaspr + svoechasosnmes;
			svoechasrasmas = '<tr><td>' + svoechasmes + '</td><td>' + Math.round(svoechaszad) + '</td><td>' + Math.round(svoechasosnmes) + '</td><td>' +  Math.round(svoechaspr) + '</td><td>' +  Math.round(svoechaspl) + '</td></tr>';
			svoechaszad = svoechaszad - svoechasosnmes;
			svoechasras4[i] = svoechasrasmas;
			return svoechasras4[i];
				};
		$('#id_tablesvoechasrasjs').append(svoechasras3());
		summsvoechaspr += svoechaspr;
		summsvoechasosn += svoechasosnmes;
		summsvoechaspl += svoechaspl;
	};
	$('#id_tablesvoechasrasjs').prepend('<tr><td colspan="2"; align="left">Сумма за весь срок:</td><td>' + Math.round(summsvoechasosn) + '</td><td>' + Math.round(summsvoechaspr) + '</td><td>' + Math.round(summsvoechaspl) + '</td></tr>');
	$('#id_tablesvoechasrasjs').prepend('<tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr>');
};

$(function () {
  $('#id_svoechasmenugraf').click(function () {
    $('.terms-svoechas').hide();
    $('#svoechasgraf').show();
  });
  $('#id_svoechasmenuyslza').click(function () {
    $('.terms-svoechas').hide();
    $('#svoechasyslzayavitel').show();
  });
  $('#id_svoechasmenudop').click(function () {
    $('.terms-svoechas').hide();
    $('#svoechasysldop').show();
  });
  $('#id_svoechasmenublinger').click(function () {
    $('.terms-svoechas').hide();
    $('#svoechasyslblinger').show();
  });
});

var sprayras3 = new Array();
var sprayras4 = new Array();
var summspraypr, summsprayosn, summspraypl, sprayosn, sprayzad, spraymes, sprayosnmes, spraypr, spraypl, sprayrasmas, sprayzad1;

function sprayras1() {
	$('#id_tablesprayrasjs').empty();
	summspraypr = 0;
	summsprayosn = 0;
	summspraypl = 0;
	sprayosn = (neobhodimayasumma == 0) ? x10y2:
		  (neobhodimayasumma >= x10y2) ? x10y2: neobhodimayasumma;
	sprayzad = sprayosn;
	for (var i = 0; i < 24; i++) {
		function sprayras2() {
			spraymes = i + 1;
			sprayosnmes = sprayzad * 0.02;
			spraypr = sprayzad * (procentnayastavka / 1200);
			spraypl = spraypr + sprayosnmes;
			sprayrasmas = '<tr><td>' + spraymes + '</td><td>' + Math.round(sprayzad) + '</td><td>' + Math.round(sprayosnmes) + '</td><td>' +  Math.round(spraypr) + '</td><td>' +  Math.round(spraypl) + '</td></tr>';
			sprayzad = sprayzad - sprayosnmes;
			sprayras3[i] = sprayrasmas;
			return sprayras3[i];
				};
		$('#id_tablesprayrasjs').append(sprayras2());
		summspraypr += spraypr;
		summsprayosn += sprayosnmes;
		summspraypl += spraypl;
	};
	sprayzad1 = sprayzad;
	$('#id_tablesprayrasjs').append('<tr><td colspan = "5">Заканчивается период возобновляемости</td></tr>');
	for (var i = 0; i < 12; i++) {
		function sprayras3() {
			spraymes = i + 25;
			sprayosnmes = sprayzad1 / 12;
			spraypr = sprayzad * (procentnayastavka / 1200);
			spraypl = spraypr + sprayosnmes;
			sprayrasmas = '<tr><td>' + spraymes + '</td><td>' + Math.round(sprayzad) + '</td><td>' + Math.round(sprayosnmes) + '</td><td>' +  Math.round(spraypr) + '</td><td>' +  Math.round(spraypl) + '</td></tr>';
			sprayzad = sprayzad - sprayosnmes;
			sprayras4[i] = sprayrasmas;
			return sprayras4[i];
				};
		$('#id_tablesprayrasjs').append(sprayras3());
		summspraypr += spraypr;
		summsprayosn += sprayosnmes;
		summspraypl += spraypl;
	};
	$('#id_tablesprayrasjs').prepend('<tr><td colspan="2"; align="left">Сумма за весь срок:</td><td>' + Math.round(summsprayosn) + '</td><td>' + Math.round(summspraypr) + '</td><td>' + Math.round(summspraypl) + '</td></tr>');
	$('#id_tablesprayrasjs').prepend('<tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr>');
};

$(function () {
  $('#id_spraymenugraf').click(function () {
    $('.sprayyslzayavitel').hide();
    $('.spraydoczayavitel').hide();
    $('.sprayysldop').hide();
    $('.sprayyslblinger').hide();
    $('.spraygraf').show();
  });
  $('#id_spraymenuyslza').click(function () {
    $('.spraygraf').hide();
    $('.spraydoczayavitel').hide();
    $('.sprayysldop').hide();
    $('.sprayyslblinger').hide();
    $('.sprayyslzayavitel').show();
  });
  $('#id_spraymenudocza').click(function () {
    $('.spraygraf').hide();
    $('.sprayyslzayavitel').hide();
    $('.sprayysldop').hide();
    $('.sprayyslblinger').hide();
    $('.spraydoczayavitel').show();
  });
  $('#id_spraymenudop').click(function () {
    $('.spraygraf').hide();
    $('.spraydoczayavitel').hide();
    $('.sprayyslzayavitel').hide();
    $('.sprayyslblinger').hide();
    $('.sprayysldop').show();
  });
  $('#id_spraymenublinger').click(function () {
    $('.spraygraf').hide();
    $('.spraydoczayavitel').hide();
    $('.sprayyslzayavitel').hide();
    $('.sprayysldop').hide();
    $('.sprayyslblinger').show();
  });
});

var paradaras3 = new Array();
var paradaras4 = new Array();
var paradaismstavka, paradaismsrok;
var summparadapr, summparadaosn, summparadapl, paradaosn, paradazad, paradames, paradaosnmes, paradapr, paradapl, paradarasmas, paradazad1;

$(function () {
  $('#id_paradayslobesp2_1').click(function () {
    $('.paradayslobesp2_2').hide();
    $('.paradayslobesp2_3').hide();
    $('.paradayslobesp2_1').show();
  });
  $('#id_paradayslobesp2_2').click(function () {
    $('.paradayslobesp2_1').hide();
    $('.paradayslobesp2_3').hide();
    $('.paradayslobesp2_2').show();
  });
  $('#id_paradayslobesp2_3').click(function () {
    $('.paradayslobesp2_2').hide();
    $('.paradayslobesp2_1').hide();
    $('.paradayslobesp2_3').show();
  });
});

function paradarasism() {
     var paradayslgrafstavka = document.getElementById("id_paradayslgrafstavka");
     var paradayslgrafsrok = document.getElementById("id_paradayslgrafsrok");
     if (paradayslgrafstavka.value == undefined) {
       paradaismstavka = procentnayastavka;
     } else if (paradayslgrafstavka.value < 0) {
       paradaismstavka = procentnayastavka;
     } else {
       paradaismstavka = paradayslgrafstavka.value.replace(',' , '.');
     };
     if (paradayslgrafsrok.value == undefined) {
       paradaismsrok = 12;
     } else if (paradayslgrafsrok.value < 2) {
       paradaismsrok = 12;
     } else {
       paradaismsrok = paradayslgrafsrok.value;
       paradaismsrok = +paradaismsrok;
     };
     paradaras1();
};
function paradaras1() {
	$('#id_tableparadarasjs').empty();
	summparadapr = 0;
	summparadaosn = 0;
	summparadapl = 0;
	paradaosn = (neobhodimayasumma == 0) ? x11y2:
		  (neobhodimayasumma >= x11y2) ? x11y2: neobhodimayasumma;
	paradazad = paradaosn;
	for (var i = 0; i < paradaismsrok; i++) {
		function paradaras2() {
			paradames = i + 1;
			paradaosnmes = paradazad * 0.02;
			paradapr = paradazad * (paradaismstavka / 1200);
			paradapl = paradapr + paradaosnmes;
			paradarasmas = '<tr><td>' + paradames + '</td><td>' + Math.round(paradazad) + '</td><td>' + Math.round(paradaosnmes) + '</td><td>' +  Math.round(paradapr) + '</td><td>' +  Math.round(paradapl) + '</td></tr>';
			paradazad = paradazad - paradaosnmes;
			paradaras3[i] = paradarasmas;
			return paradaras3[i];
				};
		$('#id_tableparadarasjs').append(paradaras2());
		summparadapr += paradapr;
		summparadaosn += paradaosnmes;
		summparadapl += paradapl;
	};
	paradazad1 = paradazad;
	$('#id_tableparadarasjs').append('<tr><td colspan = "5">Заканчивается льготный период</td></tr>');
	for (var i = 0; i < (x11y3 - paradaismsrok); i++) {
		function paradaras3() {
			paradames = i + paradaismsrok + 1;
			paradaosnmes = paradazad1 / (x11y3 - paradaismsrok);
			paradapr = paradazad * (procentnayastavka / 1200);
			paradapl = paradapr + paradaosnmes;
			paradarasmas = '<tr><td>' + paradames + '</td><td>' + Math.round(paradazad) + '</td><td>' + Math.round(paradaosnmes) + '</td><td>' +  Math.round(paradapr) + '</td><td>' +  Math.round(paradapl) + '</td></tr>';
			paradazad = paradazad - paradaosnmes;
			paradaras4[i] = paradarasmas;
			return paradaras4[i];
				};
		$('#id_tableparadarasjs').append(paradaras3());
		summparadapr += paradapr;
		summparadaosn += paradaosnmes;
		summparadapl += paradapl;
	};
	$('#id_tableparadarasjs').prepend('<tr><td colspan="2"; align="left">Сумма за весь срок:</td><td>' + Math.round(summparadaosn) + '</td><td>' + Math.round(summparadapr) + '</td><td>' + Math.round(summparadapl) + '</td></tr>');
	$('#id_tableparadarasjs').prepend('<tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr>');
};

$(function () {
  $('#id_paradamenuobesp').click(function () {
    $('.paradayslzayavitel').hide();
    $('.paradayslporychitel').hide();
    $('.paradadoczayavitel').hide();
    $('.paradagraf').hide();
    $('.paradaysldop').hide();
    $('.paradayslblinger').hide();
    $('.paradadocporychitel').hide();
    $('.paradayslobesp').show();
  });
  $('#id_paradamenugraf').click(function () {
    $('.paradayslzayavitel').hide();
    $('.paradayslporychitel').hide();
    $('.paradadoczayavitel').hide();
    $('.paradayslobesp').hide();
    $('.paradaysldop').hide();
    $('.paradayslblinger').hide();
    $('.paradadocporychitel').hide();
    $('.paradagraf').show();
  });
  $('#id_paradamenuyslza').click(function () {
    $('.paradayslobesp').hide();
    $('.paradayslporychitel').hide();
    $('.paradadoczayavitel').hide();
    $('.paradagraf').hide();
    $('.paradaysldop').hide();
    $('.paradayslblinger').hide();
    $('.paradadocporychitel').hide();
    $('.paradayslzayavitel').show();
  });
  $('#id_paradamenuyslp').click(function () {
    $('.paradayslobesp').hide();
    $('.paradayslzayavitel').hide();
    $('.paradadoczayavitel').hide();
    $('.paradagraf').hide();
    $('.paradaysldop').hide();
    $('.paradayslblinger').hide();
    $('.paradadocporychitel').hide();
    $('.paradayslporychitel').show();
  });
  $('#id_paradamenudocza').click(function () {
    $('.paradayslobesp').hide();
    $('.paradayslzayavitel').hide();
    $('.paradayslporychitel').hide();
    $('.paradagraf').hide();
    $('.paradaysldop').hide();
    $('.paradayslblinger').hide();
    $('.paradadocporychitel').hide();
    $('.paradadoczayavitel').show();
  });
  $('#id_paradamenudocp').click(function () {
    $('.paradayslobesp').hide();
    $('.paradayslzayavitel').hide();
    $('.paradayslporychitel').hide();
    $('.paradagraf').hide();
    $('.paradaysldop').hide();
    $('.paradayslblinger').hide();
    $('.paradadoczayavitel').hide();
    $('.paradadocporychitel').show();
  });
  $('#id_paradamenudop').click(function () {
    $('.paradayslobesp').hide();
    $('.paradayslzayavitel').hide();
    $('.paradayslporychitel').hide();
    $('.paradagraf').hide();
    $('.paradadocporychitel').hide();
    $('.paradayslblinger').hide();
    $('.paradadoczayavitel').hide();
    $('.paradaysldop').show();
  });
  $('#id_paradamenublinger').click(function () {
    $('.paradayslobesp').hide();
    $('.paradayslzayavitel').hide();
    $('.paradayslporychitel').hide();
    $('.paradagraf').hide();
    $('.paradadocporychitel').hide();
    $('.paradaysldop').hide();
    $('.paradadoczayavitel').hide();
    $('.paradayslblinger').show();
  });
});

var overdrras = new Array();
var summoverdrpr, summoverdrosn, summoverdrpl, overdrosn, overdrzad, overdrmes, overdrosnmes, overdrpr, overdrpl, overdrrasmas;

function overdrras1() {
	$('#id_tableoverdrrasjs').html('<tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr>');
	summoverdrpr = 0;
	summoverdrosn = 0;
	summoverdrpl = 0;
	overdrosn = (neobhodimayasumma == 0) ? x12y2:
		  (neobhodimayasumma >= x12y2) ? x12y2: neobhodimayasumma;
	overdrzad = overdrosn;
	for (var i = 0; i < 12; i++) {
		function overdrras2() {
			overdrmes = i + 1;
			overdrosnmes = overdrosn / 12;
			overdrpr = overdrzad * (procentnayastavka / 1200);
			overdrpl = overdrpr + overdrosnmes;
			overdrrasmas = '<tr><td>' + overdrmes + '</td><td>' + Math.round(overdrzad) + '</td><td>' + Math.round(overdrosnmes) + '</td><td>' +  Math.round(overdrpr) + '</td><td>' +  Math.round(overdrpl) + '</td></tr>';
			overdrzad = overdrzad - overdrosnmes;
			overdrras[i] = overdrrasmas;
			return overdrras[i];
				};
		$('#id_tableoverdrrasjs').append(overdrras2());
		summoverdrpr += overdrpr;
		summoverdrosn += overdrosnmes;
		summoverdrpl += overdrpl;
	};
	$('#id_tableoverdrrasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summoverdrosn) + '</td><td>' + Math.round(summoverdrpr) + '</td><td>' + Math.round(summoverdrpl) + '</td></tr>');
};

$(function () {
  $('#id_overdrmenugraf').click(function () {
    $('.overdryslzayavitel').hide();
    $('.overdrdoczayavitel').hide();
    $('.overdryslblinger').hide();
    $('.overdrgraf').show();
  });
  $('#id_overdrmenuyslza').click(function () {
    $('.overdrgraf').hide();
    $('.overdrdoczayavitel').hide();
    $('.overdryslblinger').hide();
    $('.overdryslzayavitel').show();
  });
  $('#id_overdrmenudocza').click(function () {
    $('.overdrgraf').hide();
    $('.overdryslzayavitel').hide();
    $('.overdryslblinger').hide();
    $('.overdrdoczayavitel').show();
  });
  $('#id_overdrmenublinger').click(function () {
    $('.overdrgraf').hide();
    $('.overdryslzayavitel').hide();
    $('.overdrdoczayavitel').hide();
    $('.overdryslblinger').show();
  });
});

var overdronras = new Array();
var summoverdronpr, summoverdronosn, summoverdronpl, overdronosn, overdronzad, overdronmes, overdronosnmes, overdronpr, overdronpl, overdronrasmas;

function overdronras1() {
	$('#id_tableoverdronrasjs').html('<tr><td> Месяц </td><td>Задолженность по кредиту</td><td>Основной долг</td><td>Проценты</td><td>Выплаты в месяц</td></tr>');
	summoverdronpr = 0;
	summoverdronosn = 0;
	summoverdronpl = 0;
	overdronosn = (neobhodimayasumma == 0) ? x13y2:
		  (neobhodimayasumma >= x13y2) ? x13y2: neobhodimayasumma;
	overdronzad = overdronosn;
	for (var i = 0; i < 12; i++) {
		function overdronras2() {
			overdronmes = i + 1;
			overdronosnmes = overdronosn / 12;
			overdronpr = overdronzad * (procentnayastavka / 1200);
			overdronpl = overdronpr + overdronosnmes;
			overdronrasmas = '<tr><td>' + overdronmes + '</td><td>' + Math.round(overdronzad) + '</td><td>' + Math.round(overdronosnmes) + '</td><td>' +  Math.round(overdronpr) + '</td><td>' +  Math.round(overdronpl) + '</td></tr>';
			overdronzad = overdronzad - overdronosnmes;
			overdronras[i] = overdronrasmas;
			return overdronras[i];
				};
		$('#id_tableoverdronrasjs').append(overdronras2());
		summoverdronpr += overdronpr;
		summoverdronosn += overdronosnmes;
		summoverdronpl += overdronpl;
	};
	$('#id_tableoverdronrasjs').prepend('<tr><td></td><td>Сумма за весь срок:</td><td>' + Math.round(summoverdronosn) + '</td><td>' + Math.round(summoverdronpr) + '</td><td>' + Math.round(summoverdronpl) + '</td></tr>');
};

$(function () {
  $('#id_overdronmenugraf').click(function () {
    $('.overdronyslzayavitel').hide();
    $('.overdrondoczayavitel').hide();
    $('.overdronyslblinger').hide();
    $('.overdrongraf').show();
  });
  $('#id_overdronmenuyslza').click(function () {
    $('.overdrongraf').hide();
    $('.overdrondoczayavitel').hide();
    $('.overdronyslblinger').hide();
    $('.overdronyslzayavitel').show();
  });
  $('#id_overdronmenublinger').click(function () {
    $('.overdrongraf').hide();
    $('.overdronyslzayavitel').hide();
    $('.overdrondoczayavitel').hide();
    $('.overdronyslblinger').show();
  });
});
