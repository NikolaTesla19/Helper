"use strict"

var blinger1ylas, blinger2уlas;
function blingerylas() {
  $('#blingerylastext').empty();
  var blingerylastext;
  if (neobhodimayasumma == 0) {
    blinger1ylas = 'Максимально ориентировочно доступная для Вас сумма ' + x1y2 + ' бел. рублей. ';
  } else {
    if (neobhodimayasumma < x1y2) {
      blinger1ylas = 'Ориентировочно запрашиваемая Вами сумма Вам доступна. ';
    } else {
      blinger1ylas = 'Максимально ориентировочно доступная для Вас сумма ' + x1y2 + ' бел. рублей. ';
    }
  };
  blinger2уlas = 'Первый ориентировочный платёж сотавит ' + x1y6 + ' бел. рублей и постепенно ежемесячно будет уменьшаться. ' +
  'Банк может Вам предолжить кредитную программу "Уласная маёмасць". Процентная ставка составляет ' + procentnayastavka +
  '% годовых. Кредит предоставляется на срок 20 лет, участие Банка в финансируемом проекте должно составлять не более 80% от общей стоимости недвижимости. ' +
  'Возможен расчёт совокупного дохода близких родственников. Предусмотрена возможность досрочного погашения.';
  $('#blingerylastext').html('<p>' + blinger1ylas + blinger2уlas + '</p>');
};


var blinger1drysh, blinger2drysh;
function blingerdrysh() {
  $('#blingerdryshtext').empty();
  var blingerdryshtext;
  if (neobhodimayasumma == 0) {
    blinger1drysh = 'Максимально ориентировочно доступная для Вас сумма ' + x2y2 + ' бел. рублей. ';
  } else {
    if (neobhodimayasumma < x2y2) {
      blinger1drysh = 'Ориентировочно запрашиваемая Вами сумма Вам доступна. ';
    } else {
      blinger1drysh = 'Максимально ориентировочно доступная для Вас сумма ' + x2y2 + ' бел. рублей. ';
    }
  };
  blinger2drysh = 'Первый ориентировочный платёж сотавит ' + x2y6 + ' бел. рублей и постепенно ежемесячно будет уменьшаться. ' +
  'Банк может Вам предолжить кредитную программу "Дружная будоуля". Процентная ставка составляет ' + procentnayastavka +
  '% годовых. Кредит предоставляется на срок 20 лет, участие Банка в финансируемом проекте должно составлять не более 80% от общей стоимости недвижимости. ' +
  'Возможен расчёт совокупного дохода близких родственников. Предусмотрена возможность досрочного погашения.';
  $('#blingerdryshtext').html('<p>' + blinger1drysh + blinger2drysh + '</p>');
}

var blinger1lagodni, blinger2lagodni;
function blingerLagodni() {
    $('#blingerlagodnitext').empty();
    var blingerlagodnitext;
    if (neobhodimayasumma == 0) {
      blinger1lagodni = 'Максимально ориентировочно доступная для Вас сумма ' + x6y2 + ' бел. рублей. ';
    } else {
      if (neobhodimayasumma < x6y2) {
        blinger1lagodni = 'Ориентировочно запрашиваемая Вами сумма Вам доступна. ';
      } else {
        blinger1lagodni = 'Максимально ориентировочно доступная для Вас сумма ' + x6y2 + ' бел. рублей. ';
      }
    };
    blinger2lagodni = 'Первый ориентировочный платёж сотавит ' + x6y6 + ' бел. рублей и постепенно ежемесячно будет уменьшаться. ' +
    'Банк может Вам предолжить кредитную программу "Лагодны". Процентная ставка составляет ' + procentnayastavka +
    '% годовых. Кредит предоставляется на срок  до 3 лет. Предусмотрена возможность досрочного погашения. Для оформления Вам необходимо посетить любой офис нашего Банка.';
    $('#blingerlagodnitext').html('<p>' + blinger1lagodni + blinger2lagodni + '</p>');
}

var blinger1klikni, blinger2klikni;
function blingerklikni() {
    $('#blingerkliknitext').empty();
    var blingerkliknitext;
    if (neobhodimayasumma == 0) {
      blinger1klikni = 'Максимально ориентировочно доступная для Вас сумма ' + x5y2 + ' бел. рублей. ';
    } else {
      if (neobhodimayasumma < x6y2) {
        blinger1klikni = 'Ориентировочно запрашиваемая Вами сумма Вам доступна. ';
      } else {
        blinger1klikni = 'Максимально ориентировочно доступная для Вас сумма ' + x5y2 + ' бел. рублей. ';
      }
    };
    blinger2klikni = 'Первый ориентировочный платёж сотавит ' + x5y6 + ' бел. рублей и постепенно ежемесячно будет уменьшаться. ' +
    'Банк может Вам предолжить кредитную программу "Клiкни грошы". Процентная ставка составляет ' + procentnayastavka +
    '% годовых. Кредит предоставляется на срок  до 4 лет. Предусмотрена возможность досрочного погашения. Оформляется в личном кабинете Интрнет-Банка, а разделе "Кредиты".';
    $('#blingerkliknitext').html('<p>' + blinger1klikni + blinger2klikni + '</p>');
}






$(function(){
  $('#blingerylastext').click(function(){
      var blingerylastextC = document.getElementById('blingerylastext');

      var range = document.createRange();
      range.selectNode(blingerylastextC);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy');
      }

      window.getSelection().removeAllRanges();
  });
  $('#blingerdryshtext').click(function(){
      var blingerdryshtextC = document.getElementById('blingerdryshtext');

      var range = document.createRange();
      range.selectNode(blingerdryshtextC);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy');
      }

      window.getSelection().removeAllRanges();
  });
  $('#blingerlagodnitext').click(function(){
      var blingerlagodnitextC = document.getElementById('blingerlagodnitext');

      var range = document.createRange();
      range.selectNode(blingerlagodnitextC);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy');
      }

      window.getSelection().removeAllRanges();
  });
  $('#blingerkliknitext').click(function(){
      var blingerkliknitextC = document.getElementById('blingerkliknitext');

      var range = document.createRange();
      range.selectNode(blingerkliknitextC);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy');
      }

      window.getSelection().removeAllRanges();
  });
})
