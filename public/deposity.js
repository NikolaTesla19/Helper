"use strict";
var summadeposita;

var stavkadepositinternetvklad = 10.5;

var internetvkladBYN35d, internetvkladBYN3m, internetvkladBYN6m, internetvkladBYN12m, internetvkladBYN18m, internetvkladBYN24m;
var internetvkladvivod1, internetvkladvivod2, internetvkladvivod3;
var internetvkladBYN35dK, internetvkladBYN3mK, internetvkladBYN3mKsumm, internetvkladBYN6mK, internetvkladBYN6mKsumm, internetvkladBYN12mK, internetvkladBYN12mKsumm, internetvkladBYN18mK, internetvkladBYN18mKsumm, internetvkladBYN24mK, internetvkladBYN24mKsumm;


var stavkadeposityniversalniyotzivniyBYN = 10.5;
var stavkadeposityniversalniyotzivniyUSD = 0.75;
var stavkadeposityniversalniyotzivniyEUR = 0.1;

var yniversalniyotzivniyBYN35d, yniversalniyotzivniyBYN3m, yniversalniyotzivniyBYN6m, yniversalniyotzivniyBYN12m, yniversalniyotzivniyBYN18m, yniversalniyotzivniyBYN24m;
var yniversalniyotzivniyvivodBYN1, yniversalniyotzivniyvivodBYN2, yniversalniyotzivniyvivodBYN3;
var yniversalniyotzivniyBYN35dK, yniversalniyotzivniyBYN3mK, yniversalniyotzivniyBYN3mKsumm, yniversalniyotzivniyBYN6mK, yniversalniyotzivniyBYN6mKsumm, yniversalniyotzivniyBYN12mK, yniversalniyotzivniyBYN12mKsumm, yniversalniyotzivniyBYN18mK, yniversalniyotzivniyBYN18mKsumm, yniversalniyotzivniyBYN24mK, yniversalniyotzivniyBYN24mKsumm;

var yniversalniyotzivniyUSD12m, yniversalniyotzivniyUSD24m;
var yniversalniyotzivniyvivodUSD1, yniversalniyotzivniyvivodUSD2, yniversalniyotzivniyvivodUSD3;
var yniversalniyotzivniyUSD12mK, yniversalniyotzivniyUSD12mKsumm, yniversalniyotzivniyUSD24mK, yniversalniyotzivniyUSD24mKsumm;

var yniversalniyotzivniyEUR12m, yniversalniyotzivniyEUR24m;
var yniversalniyotzivniyvivodEUR1, yniversalniyotzivniyvivodEUR2, yniversalniyotzivniyvivodEUR3;
var yniversalniyotzivniyEUR12mK, yniversalniyotzivniyEUR12mKsumm, yniversalniyotzivniyEUR24mK, yniversalniyotzivniyEUR24mKsumm;

var stavkadepositsberegatelniyBYN35d = 12;

function resultdeposit() {
  $('#deposityraschet').empty();
  var depinput = document.getElementById("depositinput");
  summadeposita = depinput.value;
  summadeposita = +summadeposita;
  internetvklad();
  yniversalniyotzivniy();

  internetvkladvivod1 = '<table class="tabledepitog"><tr><td></td><td>35 дней</td><td>3 месяца</td><td>6 месяцев</td><td>12 месяцев</td><td>18 месяцев</td><td>24 месяца</td></tr>';
  internetvkladvivod2 = '<tr><td width="150px">Без капитализации</td><td>' + internetvkladBYN35d + '</td><td>' + internetvkladBYN3m + '</td><td>' + internetvkladBYN6m + '</td><td>' + internetvkladBYN12m + '</td><td>' + internetvkladBYN18m + '</td><td>' + internetvkladBYN24m + '</td></tr>';
  internetvkladvivod3 = '<tr><td width="150px">С капитализацией</td><td>' + internetvkladBYN35dK + '</td><td>' + internetvkladBYN3mK + '</td><td>' + internetvkladBYN6mK + '</td><td>' + internetvkladBYN12mK + '</td><td>' + internetvkladBYN18mK + '</td><td>' + internetvkladBYN24mK + '</td></tr></table>';
  $('#deposityraschet').append('<p><b>Интернет-вклад</b></p>' + internetvkladvivod1 + internetvkladvivod2 + internetvkladvivod3);



  yniversalniyotzivniyvivodBYN1 = '<table class="tabledepitog"><tr><td>BYN</td><td>35 дней</td><td>3 месяца</td><td>6 месяцев</td><td>12 месяцев</td><td>18 месяцев</td><td>24 месяца</td></tr>';
  yniversalniyotzivniyvivodBYN2 = '<tr><td width="150px">Без капитализации</td><td>' + yniversalniyotzivniyBYN35d + '</td><td>' + yniversalniyotzivniyBYN3m + '</td><td>' + yniversalniyotzivniyBYN6m + '</td><td>' + yniversalniyotzivniyBYN12m + '</td><td>' + yniversalniyotzivniyBYN18m + '</td><td>' + yniversalniyotzivniyBYN24m + '</td></tr>';
  yniversalniyotzivniyvivodBYN3 = '<tr><td width="150px">С капитализацией</td><td>' + yniversalniyotzivniyBYN35dK + '</td><td>' + yniversalniyotzivniyBYN3mK + '</td><td>' + yniversalniyotzivniyBYN6mK + '</td><td>' + yniversalniyotzivniyBYN12mK + '</td><td>' + yniversalniyotzivniyBYN18mK + '</td><td>' + yniversalniyotzivniyBYN24mK + '</td></tr>';
  yniversalniyotzivniyvivodUSD1 = '<tr><td>USD</td><td>35 дней</td><td>3 месяца</td><td>6 месяцев</td><td>12 месяцев</td><td>18 месяцев</td><td>24 месяца</td></tr>';
  yniversalniyotzivniyvivodUSD2 = '<tr><td width="150px">Без капитализации</td><td>-</td><td>-</td><td>-</td><td>' + yniversalniyotzivniyUSD12m + '</td><td>-</td><td>' + yniversalniyotzivniyUSD24m + '</td></tr>';
  yniversalniyotzivniyvivodUSD3 = '<tr><td width="150px">С капитализацией</td><td>-</td><td>-</td><td>-</td><td>' + yniversalniyotzivniyUSD12mK + '</td><td>-</td><td>' + yniversalniyotzivniyUSD24mK + '</td></tr>';
  yniversalniyotzivniyvivodEUR1 = '<tr><td>EUR</td><td>35 дней</td><td>3 месяца</td><td>6 месяцев</td><td>12 месяцев</td><td>18 месяцев</td><td>24 месяца</td></tr>';
  yniversalniyotzivniyvivodEUR2 = '<tr><td width="150px">Без капитализации</td><td>-</td><td>-</td><td>-</td><td>' + yniversalniyotzivniyEUR12m + '</td><td>-</td><td>' + yniversalniyotzivniyEUR24m + '</td></tr>';
  yniversalniyotzivniyvivodEUR3 = '<tr><td width="150px">С капитализацией</td><td>-</td><td>-</td><td>-</td><td>' + yniversalniyotzivniyEUR12mK + '</td><td>-</td><td>' + yniversalniyotzivniyEUR24mK + '</td></tr></table>';

  $('#deposityraschet').append('<p><b>Универсальный отзывный с переменной ставкой</b></p>' + yniversalniyotzivniyvivodBYN1 + yniversalniyotzivniyvivodBYN2 + yniversalniyotzivniyvivodBYN3 + yniversalniyotzivniyvivodUSD1 + yniversalniyotzivniyvivodUSD2 + yniversalniyotzivniyvivodUSD3 + yniversalniyotzivniyvivodEUR1 + yniversalniyotzivniyvivodEUR2 + yniversalniyotzivniyvivodEUR3);


}

function internetvklad() {
  internetvkladBYN35d = summadeposita + (summadeposita * (stavkadepositinternetvklad / 36500) * 35);
  internetvkladBYN35d = +internetvkladBYN35d;
  internetvkladBYN35d = internetvkladBYN35d.toFixed(2);

  internetvkladBYN3m = summadeposita + (summadeposita * (stavkadepositinternetvklad / 1200) * 3);
  internetvkladBYN3m = +internetvkladBYN3m;
  internetvkladBYN3m = internetvkladBYN3m.toFixed(2);

  internetvkladBYN6m = summadeposita + (summadeposita * (stavkadepositinternetvklad / 1200) * 6);
  internetvkladBYN6m = +internetvkladBYN6m;
  internetvkladBYN6m = internetvkladBYN6m.toFixed(2);

  internetvkladBYN12m = summadeposita + (summadeposita * (stavkadepositinternetvklad / 1200) * 12);
  internetvkladBYN12m = +internetvkladBYN12m;
  internetvkladBYN12m = internetvkladBYN12m.toFixed(2);

  internetvkladBYN18m = summadeposita + (summadeposita * (stavkadepositinternetvklad / 1200) * 18);
  internetvkladBYN18m = +internetvkladBYN18m;
  internetvkladBYN18m = internetvkladBYN18m.toFixed(2);

  internetvkladBYN24m = summadeposita + (summadeposita * (stavkadepositinternetvklad / 1200) * 24);
  internetvkladBYN24m = +internetvkladBYN24m;
  internetvkladBYN24m = internetvkladBYN24m.toFixed(2);



  internetvkladBYN35dK = summadeposita + (summadeposita * (stavkadepositinternetvklad / 36500) * 35);
  internetvkladBYN35dK = +internetvkladBYN35dK;
  internetvkladBYN35dK = internetvkladBYN35dK.toFixed(2);

  internetvkladBYN3mK = summadeposita;
  for (var i = 0; i < 3; i++){
    internetvkladBYN3mKsumm = (internetvkladBYN3mK * (stavkadepositinternetvklad / 1200));
    internetvkladBYN3mK = internetvkladBYN3mK + internetvkladBYN3mKsumm;
  };
  internetvkladBYN3mK = +internetvkladBYN3mK;
  internetvkladBYN3mK = internetvkladBYN3mK.toFixed(2);

  internetvkladBYN6mK = summadeposita;
  for (var i = 0; i < 6; i++){
    internetvkladBYN6mKsumm = (internetvkladBYN6mK * (stavkadepositinternetvklad / 1200));
    internetvkladBYN6mK = internetvkladBYN6mK + internetvkladBYN6mKsumm;
  };
  internetvkladBYN6mK = +internetvkladBYN6mK;
  internetvkladBYN6mK = internetvkladBYN6mK.toFixed(2);

  internetvkladBYN12mK = summadeposita;
  for (var i = 0; i < 12; i++){
    internetvkladBYN12mKsumm = (internetvkladBYN12mK * (stavkadepositinternetvklad / 1200));
    internetvkladBYN12mK = internetvkladBYN12mK + internetvkladBYN12mKsumm;
  };
  internetvkladBYN12mK = +internetvkladBYN12mK;
  internetvkladBYN12mK = internetvkladBYN12mK.toFixed(2);

  internetvkladBYN18mK = summadeposita;
  for (var i = 0; i < 18; i++){
    internetvkladBYN18mKsumm = (internetvkladBYN18mK * (stavkadepositinternetvklad / 1200));
    internetvkladBYN18mK = internetvkladBYN18mK + internetvkladBYN18mKsumm;
  };
  internetvkladBYN18mK = +internetvkladBYN18mK;
  internetvkladBYN18mK = internetvkladBYN18mK.toFixed(2);

  internetvkladBYN24mK = summadeposita;
  for (var i = 0; i < 24; i++){
    internetvkladBYN24mKsumm = (internetvkladBYN24mK * (stavkadepositinternetvklad / 1200));
    internetvkladBYN24mK = internetvkladBYN24mK + internetvkladBYN24mKsumm;
  };
  internetvkladBYN24mK = +internetvkladBYN24mK;
  internetvkladBYN24mK = internetvkladBYN24mK.toFixed(2);
}


function yniversalniyotzivniy() {
  yniversalniyotzivniyBYN35d = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 36500) * 35);
  yniversalniyotzivniyBYN35d = +yniversalniyotzivniyBYN35d;
  yniversalniyotzivniyBYN35d = yniversalniyotzivniyBYN35d.toFixed(2);

  yniversalniyotzivniyBYN3m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 1200) * 3);
  yniversalniyotzivniyBYN3m = +yniversalniyotzivniyBYN3m;
  yniversalniyotzivniyBYN3m = yniversalniyotzivniyBYN3m.toFixed(2);

  yniversalniyotzivniyBYN6m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 1200) * 6);
  yniversalniyotzivniyBYN6m = +yniversalniyotzivniyBYN6m;
  yniversalniyotzivniyBYN6m = yniversalniyotzivniyBYN6m.toFixed(2);

  yniversalniyotzivniyBYN12m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 1200) * 12);
  yniversalniyotzivniyBYN12m = +yniversalniyotzivniyBYN12m;
  yniversalniyotzivniyBYN12m = yniversalniyotzivniyBYN12m.toFixed(2);

  yniversalniyotzivniyBYN18m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 1200) * 18);
  yniversalniyotzivniyBYN18m = +yniversalniyotzivniyBYN18m;
  yniversalniyotzivniyBYN18m = yniversalniyotzivniyBYN18m.toFixed(2);

  yniversalniyotzivniyBYN24m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 1200) * 24);
  yniversalniyotzivniyBYN24m = +yniversalniyotzivniyBYN24m;
  yniversalniyotzivniyBYN24m = yniversalniyotzivniyBYN24m.toFixed(2);



  yniversalniyotzivniyBYN35dK = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyBYN / 36500) * 35);
  yniversalniyotzivniyBYN35dK = +yniversalniyotzivniyBYN35dK;
  yniversalniyotzivniyBYN35dK = yniversalniyotzivniyBYN35dK.toFixed(2);

  yniversalniyotzivniyBYN3mK = summadeposita;
  for (var i = 0; i < 3; i++){
    yniversalniyotzivniyBYN3mKsumm = (yniversalniyotzivniyBYN3mK * (stavkadeposityniversalniyotzivniyBYN / 1200));
    yniversalniyotzivniyBYN3mK = yniversalniyotzivniyBYN3mK + yniversalniyotzivniyBYN3mKsumm;
  };
  yniversalniyotzivniyBYN3mK = +yniversalniyotzivniyBYN3mK;
  yniversalniyotzivniyBYN3mK = yniversalniyotzivniyBYN3mK.toFixed(2);

  yniversalniyotzivniyBYN6mK = summadeposita;
  for (var i = 0; i < 6; i++){
    yniversalniyotzivniyBYN6mKsumm = (yniversalniyotzivniyBYN6mK * (stavkadeposityniversalniyotzivniyBYN / 1200));
    yniversalniyotzivniyBYN6mK = yniversalniyotzivniyBYN6mK + yniversalniyotzivniyBYN6mKsumm;
  };
  yniversalniyotzivniyBYN6mK = +yniversalniyotzivniyBYN6mK;
  yniversalniyotzivniyBYN6mK = yniversalniyotzivniyBYN6mK.toFixed(2);

  yniversalniyotzivniyBYN12mK = summadeposita;
  for (var i = 0; i < 12; i++){
    yniversalniyotzivniyBYN12mKsumm = (yniversalniyotzivniyBYN12mK * (stavkadeposityniversalniyotzivniyBYN / 1200));
    yniversalniyotzivniyBYN12mK = yniversalniyotzivniyBYN12mK + yniversalniyotzivniyBYN12mKsumm;
  };
  yniversalniyotzivniyBYN12mK = +yniversalniyotzivniyBYN12mK;
  yniversalniyotzivniyBYN12mK = yniversalniyotzivniyBYN12mK.toFixed(2);

  yniversalniyotzivniyBYN18mK = summadeposita;
  for (var i = 0; i < 18; i++){
    yniversalniyotzivniyBYN18mKsumm = (yniversalniyotzivniyBYN18mK * (stavkadeposityniversalniyotzivniyBYN / 1200));
    yniversalniyotzivniyBYN18mK = yniversalniyotzivniyBYN18mK + yniversalniyotzivniyBYN18mKsumm;
  };
  yniversalniyotzivniyBYN18mK = +yniversalniyotzivniyBYN18mK;
  yniversalniyotzivniyBYN18mK = yniversalniyotzivniyBYN18mK.toFixed(2);

  yniversalniyotzivniyBYN24mK = summadeposita;
  for (var i = 0; i < 24; i++){
    yniversalniyotzivniyBYN24mKsumm = (yniversalniyotzivniyBYN24mK * (stavkadeposityniversalniyotzivniyBYN / 1200));
    yniversalniyotzivniyBYN24mK = yniversalniyotzivniyBYN24mK + yniversalniyotzivniyBYN24mKsumm;
  };
  yniversalniyotzivniyBYN24mK = +yniversalniyotzivniyBYN24mK;
  yniversalniyotzivniyBYN24mK = yniversalniyotzivniyBYN24mK.toFixed(2);



  yniversalniyotzivniyUSD12m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyUSD / 1200) * 12);
  yniversalniyotzivniyUSD12m = +yniversalniyotzivniyUSD12m;
  yniversalniyotzivniyUSD12m = yniversalniyotzivniyUSD12m.toFixed(2);

  yniversalniyotzivniyUSD24m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyUSD / 1200) * 24);
  yniversalniyotzivniyUSD24m = +yniversalniyotzivniyUSD24m;
  yniversalniyotzivniyUSD24m = yniversalniyotzivniyUSD24m.toFixed(2);


  yniversalniyotzivniyUSD12mK = summadeposita;
  for (var i = 0; i < 12; i++){
    yniversalniyotzivniyUSD12mKsumm = (yniversalniyotzivniyUSD12mK * (stavkadeposityniversalniyotzivniyUSD / 1200));
    yniversalniyotzivniyUSD12mK = yniversalniyotzivniyUSD12mK + yniversalniyotzivniyUSD12mKsumm;
  };
  yniversalniyotzivniyUSD12mK = +yniversalniyotzivniyUSD12mK;
  yniversalniyotzivniyUSD12mK = yniversalniyotzivniyUSD12mK.toFixed(2);


  yniversalniyotzivniyUSD24mK = summadeposita;
  for (var i = 0; i < 24; i++){
    yniversalniyotzivniyUSD24mKsumm = (yniversalniyotzivniyUSD24mK * (stavkadeposityniversalniyotzivniyUSD / 1200));
    yniversalniyotzivniyUSD24mK = yniversalniyotzivniyUSD24mK + yniversalniyotzivniyUSD24mKsumm;
  };
  yniversalniyotzivniyUSD24mK = +yniversalniyotzivniyUSD24mK;
  yniversalniyotzivniyUSD24mK = yniversalniyotzivniyUSD24mK.toFixed(2);





  yniversalniyotzivniyEUR12m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyEUR / 1200) * 12);
  yniversalniyotzivniyEUR12m = +yniversalniyotzivniyEUR12m;
  yniversalniyotzivniyEUR12m = yniversalniyotzivniyEUR12m.toFixed(2);

  yniversalniyotzivniyEUR24m = summadeposita + (summadeposita * (stavkadeposityniversalniyotzivniyEUR / 1200) * 24);
  yniversalniyotzivniyEUR24m = +yniversalniyotzivniyEUR24m;
  yniversalniyotzivniyEUR24m = yniversalniyotzivniyEUR24m.toFixed(2);


  yniversalniyotzivniyEUR12mK = summadeposita;
  for (var i = 0; i < 12; i++){
    yniversalniyotzivniyEUR12mKsumm = (yniversalniyotzivniyEUR12mK * (stavkadeposityniversalniyotzivniyEUR / 1200));
    yniversalniyotzivniyEUR12mK = yniversalniyotzivniyEUR12mK + yniversalniyotzivniyEUR12mKsumm;
  };
  yniversalniyotzivniyEUR12mK = +yniversalniyotzivniyEUR12mK;
  yniversalniyotzivniyEUR12mK = yniversalniyotzivniyEUR12mK.toFixed(2);


  yniversalniyotzivniyEUR24mK = summadeposita;
  for (var i = 0; i < 24; i++){
    yniversalniyotzivniyEUR24mKsumm = (yniversalniyotzivniyEUR24mK * (stavkadeposityniversalniyotzivniyEUR / 1200));
    yniversalniyotzivniyEUR24mK = yniversalniyotzivniyEUR24mK + yniversalniyotzivniyEUR24mKsumm;
  };
  yniversalniyotzivniyEUR24mK = +yniversalniyotzivniyEUR24mK;
  yniversalniyotzivniyEUR24mK = yniversalniyotzivniyEUR24mK.toFixed(2);
}
