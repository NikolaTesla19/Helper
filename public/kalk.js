"use strict";

// Расчёт для Уласной маёмасти

function summylas() {
  x1y1 = raschetnayasummanedvizimost / ((1 / 241) + (procentnayastavka / 1200));
  if (x1y1 < 5000) {
  x1y2 = 0;
	x1y10 = 0;
  } else {
	x1y2 = Math.round(x1y1);
	x1y10 = 1;
  };
  return x1y2;
};
function platylas() {
  x1y9 = (neobhodimayasumma == 0) ? summylas():
		     neobhodimayasumma;
  x1y6 = (x1y9 >= summylas()) ? Math.round((summylas() / 241) + (summylas() * (procentnayastavka / 1200))):
			        Math.round((neobhodimayasumma / 241) + (neobhodimayasumma * (procentnayastavka / 1200)));
  return x1y6;
};
function itogylas() {
  summylas();
  if (x1y10 == 0) {
	x1y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
  } else {
	x1y7 = "Доступная сумма: <b>" + summylas() + "</b> бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Срок кредитования: " + "241 " + "мес." + "<br><br>Первый платёж: <b>" + platylas() + "</b> бел. рублей";
  };
  return x1y7;
};

// Расчёт суммы для Дружной будоуле

function summdrysh() {
  x2y1 = raschetnayasummanedvizimost / ((1 / 300) + (procentnayastavka / 1200));
  if (x2y1 < 5000) {
	x2y10 = 0;
  } else {
	x2y2 = Math.round(x2y1);
	x2y10 = 1;
  };
  return x2y2;
};
function platdrysh() {
  x2y9 = (neobhodimayasumma == 0) ? summdrysh():
		     neobhodimayasumma;
  x2y6 = (x2y9 >= summdrysh()) ? Math.round((summdrysh() / 300) + (summdrysh() * (procentnayastavka / 1200))):
				 Math.round((x2y9 / 300) + (x2y9 * (procentnayastavka / 1200)));
  return x2y6;
};
function itogdrysh() {
  summdrysh();
  if (x2y10 == 0) {
	x2y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
  } else {
	x2y7 = "Доступная сумма: " + summdrysh() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Срок кредитования: " + "300 " + "мес." + "<br><br>Первый платёж: " + platdrysh() + " бел. рублей";
};
return x2y7;
};

// Расчёт суммы по Удалому разлику

function summydali() {
  x3y8 = (check() == 1) ? 40000:
	 (check() == 2) ? 40000:
	 (check() == 3) ? 40000:
			  50000;
  x3y3 = (srokkreditovaniya < 12) ? 12:
	 (srokkreditovaniya > 84) ? 84:
		     srokkreditovaniya;
  x3y1 = raschetnayasumma / ((1 / x3y3) + (procentnayastavka / 1200));
  if (x3y1 < 1000) {
	x3y10 = 0;
	} else {
	x3y2 = (x3y1 > x3y8) ? x3y8: Math.round(x3y1);
	x3y10 = 1;
	};
  return x3y2;
};
function platydali() {
  x3y9 = (neobhodimayasumma == 0) ? summydali():
		     neobhodimayasumma;
  x3y6 = (x3y9 >= summydali()) ? Math.round((summydali() / x3y3) + (summydali() * (procentnayastavka / 1200))):
				 Math.round((x3y9 / x3y3) + (x3y9 * (procentnayastavka / 1200)));
  return x3y6;
};
function itogydali() {
summydali();
if (x3y10 == 0) {
	x3y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
x3y7 = "Доступная сумма: " + summydali() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Срок кредитования: " + x3y3 + " мес." + "<br><br>Первый платёж: " + platydali() + " бел. рублей";
};
return x3y7;
};

// Расчёт суммы по Хуткаму онлайн

function summhutki() {
  x4y3 = (srokkreditovaniya > 60) ? 60:
		 (srokkreditovaniya < 12) ? 12: srokkreditovaniya;
  x4y4 = hutkistavka;
  x4y1 = raschetnayasumma / ((1 / x4y3) + (x4y4 / 1200));
  if (x4y1 < 100) {
	x4y10 = 0;
  } else {
	x4y10 = 1;
	x4y2 = (x4y1 > 5000) ? 5000:
			       Math.round(x4y1);
  };
  return x4y2;
};
function plathutki() {
  x4y9 = (neobhodimayasumma == 0) ? summhutki():
		     neobhodimayasumma;
  x4y6 = (x4y9 >= summhutki()) ? Math.round((summhutki() / x4y3) + (summhutki() * (x4y4 / 1200))):
				 Math.round((x4y9 / x4y3) + (x4y9 * (x4y4 / 1200)));
  return x4y6;
};
function itoghutki() {
summhutki();
if (x4y10 == 0) {
	x4y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x4y7 = "Доступная сумма: " + summhutki() + " бел. рублей" + "<br><br>Ставка: " + x4y4 + "%"  + "<br><br>Срок кредитования: " + x4y3 + " мес." + "<br><br>Первый платёж: " + plathutki() + " бел. рублей";
};
return x4y7;
};

//Расчёт суммы по Кликни грошы


function summklikni() {
  x5y3 = (srokkreditovaniya < 12) ? 12:
		 (srokkreditovaniya > 48) ? 48: srokkreditovaniya;
  x5y1 = raschetnayasumma / ((1 / x5y3) + (procentnayastavka / 1200));
  x5y2 = (x5y1 > 10000) ? 10000: Math.round(x5y1);
  return x5y2;
};
function platklikni() {
  x5y9 = (neobhodimayasumma == 0) ? summklikni():
		       neobhodimayasumma;
  x5y6 = (x5y9 >= summklikni()) ? Math.round((summklikni() / x5y3) + (summklikni() * (procentnayastavka / 1200))):
				       Math.round((x5y9 / x5y3) + (x5y9 * (procentnayastavka / 1200)));
  return x5y6;
};

function itogklikni() {
	summklikni();
if (check() == 1) {
	x5y7 = '<br><p align="center" style="color: red; font-size: 20px;">Недоступен для клиентов категории Классик</p>';
} else {
	if (x5y1 < 100) {
		x5y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
	} else {
		x5y7 = "Доступная сумма: " + summklikni() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%"  + "<br><br>Срок кредитования: " + x5y3 + " мес." + "<br><br>Первый платёж: " + platklikni() + " бел. рублей";
	};
};
return x5y7;
};

//Расчёт суммы по кредиту Лагодны

function summlagodni() {
  x6y8 = (check() == 1) ? 6000:
	 (check() == 2) ? 9000:
	 (check() == 3) ? 9000:
			  11000;
  x6y3 = (srokkreditovaniya < 2) ? 2:
	 (srokkreditovaniya > 36) ? 36:
		     srokkreditovaniya;
  x6y1 = raschetnayasumma / ((1 / x6y3) + (procentnayastavka / 1200));
  if (x6y1 < 500) {
	x6y10 = 0;
  } else {
	x6y2 = (x6y1 > x6y8) ? x6y8:
			       Math.round(x6y1);
	x6y10 = 1;
  };
  return x6y2;
};
function platlagodni() {
  x6y9 = (neobhodimayasumma == 0) ? summlagodni():
		     neobhodimayasumma;
  x6y6 = (x6y9 >= summlagodni()) ? Math.round((summlagodni() / x6y3) + (summlagodni() * (procentnayastavka / 1200))):
				   Math.round((x6y9 / x6y3) + (x6y9 * (procentnayastavka / 1200)));
  return x6y6;
};
function itoglagodni() {
summlagodni();
if (x6y10 == 0) {
	x6y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x6y7 = "Доступная сумма: " + summlagodni() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Срок кредитования: " + x6y3 + " мес." + "<br><br>Первый платёж: " + platlagodni() + " бел. рублей";
};
return x6y7;
};

//Расчёт суммы по Спрынтару

function summsprintar() {
  x7y3 = (srokkreditovaniya < 12) ? 12:
	 (srokkreditovaniya > 60) ? 60:
		     srokkreditovaniya;
  x7y4 = 29;
  x7y1 = raschetnayasumma / ((1 / x7y3) + (x7y4 / 1200));
  if (x7y1 < 500) {
	x7y10 = 0;
  } else {
	x7y2 = (x7y1 > 5000) ? 5000:
			       Math.round(x7y1);
	x7y10 = 1;
  };
  return x7y2;
};
function platsprintar() {
  x7y9 = (neobhodimayasumma == 0) ? summsprintar():
		     neobhodimayasumma;
  x7y6 = (x7y9 >= summsprintar()) ? Math.round((summsprintar() / x7y3) + (summsprintar() * (x7y4 / 1200))):
				    Math.round((x7y9 / x7y3) + (x7y9 * (x7y4 / 1200)));
  return x7y6;
};
function itogsprintar() {
summsprintar();
if (x7y10 == 0) {
	x7y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x7y7 = "Доступная сумма: " + summsprintar() + " бел. рублей" + "<br><br>Ставка: " + x7y4 + "%" + "<br><br>Срок кредитования: " + x7y3 + " мес." + "<br><br>Первый платёж: " + platsprintar() + " бел. рублей";
};
return x7y7;
};

//Расчёт суммы по Дабрабыту

function summdabrabit() {
  x8y8 = (check() == 1) ? 50000:
	 (check() == 2) ? 50000:
	 (check() == 3) ? 50000:
			  60000;
  x8y3 = (srokkreditovaniya < 24) ? 24:
	 (srokkreditovaniya > 60) ? 60:
		     srokkreditovaniya;
  x8y1 = raschetnayasumma / ((1 / x8y3) + (procentnayastavka / 1200));
  if (x8y1 < 1000) {
	x8y10 = 0;
  } else {
	x8y2 = (x8y1 > x8y8) ? x8y8:
			       Math.round(x8y1);
	x8y10 = 1;
  };
  return x8y2;
};
function platdabrabit() {
  x8y9 = (neobhodimayasumma == 0) ? summdabrabit():
		     neobhodimayasumma;
  x8y6 = (x8y9 >= summdabrabit()) ? Math.round((summdabrabit() / x8y3) + (summdabrabit() * (procentnayastavka / 1200))):
				    Math.round((x8y9 / x8y3) + (x8y9 * (procentnayastavka / 1200)));
  return x8y6;
};
function itogdabrabit() {
summdabrabit();
if (x8y10 == 0) {
	x8y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x8y7 = "Доступная сумма: " + summdabrabit() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Срок кредитования: " + x8y3 + " мес." + "<br><br>Первый платёж: " + platdabrabit() + " бел. рублей";
};
return x8y7;
};

//Расчёт суммы по кредиту Своечасовая

function summsvoechas() {
  x9y8 = (check() == 1) ? 5000:
			  10000;
  x9y3 = 21.28;
  x9y1 = raschetnayasumma / ((1 / x9y3) + (procentnayastavka / 1200));
  if (x9y1 < 500) {
	x9y10 = 0;
  } else {
	x9y2 = (x9y1 > x9y8) ? x9y8:
			       Math.round(x9y1);
	x9y10 = 1;
  };
  return x9y2;
};
function platsvoechas() {
  x9y9 = (neobhodimayasumma == 0) ? summsvoechas():
		     neobhodimayasumma;
  x9y6 = (x9y9 >= summsvoechas()) ? Math.round((summsvoechas() * 0.02) + (summsvoechas() * (procentnayastavka / 1200))):
				    Math.round((x9y9 * 0.02) + (x9y9 * (procentnayastavka / 1200)));
  return x9y6;
};
function itogsvoechas() {
summsvoechas();
if (x9y10 == 0) {
	x9y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else{
	x9y7 = "Доступная сумма: " + summsvoechas() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "% " + "<br>Grace: 10%" + "<br>Первый платёж в случае, если клиент воспользуется всей суммой сразу: <br> " + platsvoechas() + " бел. рублей";
};
return x9y7;
};

//Расчёт суммы по кредиту Спрауная+

function summspray() {
	x10y8 = (check() == 1) ? 10000:
		(check() == 2) ? 15000:
		(check() == 3) ? 15000:
				 25000;
  x10y3 = 21.28;
  x10y1 = raschetnayasumma / ((1 / x10y3) + (procentnayastavka / 1200));
  if (x10y1 < 500) {
	x10y10 = 0;
  } else {
	x10y2 = (x10y1 > x10y8) ? x10y8:
				  Math.round(x10y1);
	x10y10 = 1;
  };
  return x10y2;
};
function platspray() {
  x10y9 = (neobhodimayasumma == 0) ? summspray():
		     neobhodimayasumma;
  x10y6 = (x10y9 >= summspray()) ? Math.round((summspray() * 0.02) + (summspray() * (procentnayastavka / 1200))):
				   Math.round((x10y9 * 0.02) + (x10y9 * (procentnayastavka / 1200)));
  return x10y6;
};
function itogspray() {
summspray();
if (x10y10 == 0) {
	x10y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x10y7 = "Доступная сумма: " + summspray() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br>Grace: 10%" + "<br>Первый платёж в случае, если клиент воспользуется всей суммой сразу: <br> " + platspray() + " бел. рублей";
};
return x10y7;
};

//Расёт суммы по Партнёрской параде

function summparada() {
  x11y3 = (srokkreditovaniya < 12) ? 12:
	  (srokkreditovaniya > 120) ? 120:
		       srokkreditovaniya;
  x11y1 = raschetnayasumma / ((1 / x11y3) + (procentnayastavka / 1200));
  if (x11y1 < 5000) {
	x11y10 = 0;
  } else {
  x11y2 = (x11y1 > 100000) ? 100000:
			     Math.round(x11y1);
	x11y10 = 1;
  };
  return x11y2;
};
function platparada() {
  x11y9 = (neobhodimayasumma == 0) ? summparada():
		     neobhodimayasumma;
  x11y6 = (x11y9 >= summparada()) ? Math.round((summparada() / x11y3) + (summparada() * (procentnayastavka / 1200))):
				    Math.round((x11y9 / x11y3) + (x11y9 * (procentnayastavka / 1200)));
  return x11y6;
};
function itogparada() {
summparada();
if (x11y10 == 0) {
	x11y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x11y7 = "Доступная сумма: " + summparada() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Срок кредитования: " + x11y3 + " мес." + "<br><br>Первый платёж: " + platparada() + " бел. рублей";
};
return x11y7;
};

//Расчёт суммы по Овердрафту

function summoverdr() {
  if (check() == 1) {
	x12y5 = 1;
	x12y8 = 200;
  } else {
	if (check() == 2) {
		x12y5 = 3;
		x12y8 = 200;
	} else {
		if (check() == 3) {
			x12y5 = 3;
			x12y8 = 200;
		} else {
			if (check() == 4) {
				x12y5 = 4;
				x12y8 = 200;
			};
		};
	};
  };
  x12z1y1 = raschetnayasumma / ((1 / 12) + (procentnayastavka / 1200));
  x12z2y1 = dohodkreditopolychatelya * x12y5;
  if (x12z1y1 > x12z2y1) {
    x12y1 = x12z2y1;
  } else {
    x12y1 = x12z1y1;
  };
  if (x12y1 < 100) {
	x12y10 = 0;
  } else {
	x12y2 = (x12y1 > x12y8) ? x12y8:
				  Math.round(x12y1);
	x12y10 = 1;
  };
  return x12y2;
};
function platoverdr() {
  x12y9 = (neobhodimayasumma == 0) ? summoverdr():
		      neobhodimayasumma;
  x12y6 = (x12y9 >= summoverdr()) ? Math.round((summoverdr() / 12) + (summoverdr() * (procentnayastavka / 1200))):
				    Math.round((x12y9 / 12) + (x12y9 * (procentnayastavka / 1200)));
  return x12y6;
};
function itogoverdr() {
summoverdr();
if (x12y10 == 0) {
	x12y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x12y7 = "Доступная сумма: " + summoverdr() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Первый платёж в случае, если клиент воспользуется всей суммой сразу: <br> " + platoverdr() + " бел. рублей";
};
return x12y7;
};

//Расчёт суммы по овердрафту онлайн

function summoverdron() {
  if (check() == 1) {
	x13y8 = 0;
	x13y5 = 0;
  } else {
	if (check() == 2) {
		x13y5 = 3;
		x13y8 = 4000;
	} else {
		if (check() == 3) {
			x13y5 = 3;
			x13y8 = 4000;
		} else {
			if (check() == 4) {
				x13y5 = 4;
				x13y8 = 5000;
			};
		};
	};
  };
  x13z1y1 = raschetnayasumma / ((1 / 12) + (procentnayastavka / 1200));
  x13z2y1 = dohodkreditopolychatelya * x13y5;
  if (x13z1y1 > x13z2y1) {
    x13y1 = x13z2y1;
  } else {
    x13y1 = x13z1y1;
  };
  if (x13y1 < 100) {
	x13y10 = 0;
  } else {
	x13y2 = (x13y1 >= x13y8) ? x13y8:
				   Math.round(x13y1);
	x13y10 = 1;
  };
  return x13y2;
};
function platoverdron() {
  x13y9 = (neobhodimayasumma == 0) ? summoverdron():
		      neobhodimayasumma;
  x13y6 = (x13y9 >= summoverdron()) ? Math.round((summoverdron() / 12) + (summoverdron() * (procentnayastavka / 1200))):
				      Math.round((x13y9 * 0.02) + (x13y9 * (procentnayastavka / 1200)));
  return x13y6;
};
function itogoverdron() {
summoverdron();
if (check() == 1) {
	x13y7 = '<br><p align="center" style="color: red; font-size: 20px;">Недоступен для клиентов категории Классик</p>';
} else {
	if (x13y10 == 0) {
		x13y7 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
	} else {
		x13y7 = "Доступная сумма: " + summoverdron() + " бел. рублей" + "<br><br>Ставка: " + procentnayastavka + "%" + "<br><br>Первый платёж в случае, если клиент воспользуется всей суммой сразу: <br> " + platoverdron() + " бел. рублей";
	};
};
return x13y7;
};

//Расчёт суммы по 240 указу

function summykas() {
  x15y4 = ykaz240stavka;
  x15y1 = raschetnayasumma240 / ((1 / 241) + (x15y4 / 1200));
  if (x15y1 < 5000) {
	x15y10 = 0
  } else {
		x15y2 = Math.round(x15y1);
	x15y10 = 1;
  };
  return x15y2;
};
function itogykas() {
summykas();
if (x15y10 == 0) {
	x15y10 = '<br><br><p align="center" style="color: red; font-size: 20px;">Дохода не достаточно</p>';
} else {
	x14y7 = "Доступная сумма: " + summykas() + " бел. рублей" + "<br><br>Ставка: " + x15y4 + "%";
};
return x14y7;
};
