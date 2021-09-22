"use strict"


function updateWorkersNum() {
  var  workersNum = $("#scheduleValue").val();
  console.log(workersNum);
  $('#schedule').empty();
  for(var i = 0; i < workersNum; i++) {
    $('#schedule').append('<tr>' +
      '<td class="workerName" id="' + i + '">' +
        '<input class="workerNameInput" id="worker' + i + '" type="text" value="">' +
        '</input>' +
      '</td>' +
      '<td class="workTimeFromText">' +
        '<p>Работает с </p>' +
      '</td>' +
      '<td class="workTimeFromNumber">' +
        '<input class="workTimeFromH" type="text" value="">' +
      '</td>' +
      '<td class="workTimeFromNumberMin">' +
        '<input class="workTimeFromMin" type="text" value="">' +
      '</td>' +
      '<td class="workTimeToText">' +
        '<p>до</p>' +
      '</td>' +
      '<td class="workTimeToNumber">' +
        '<input class="workTimeToH" type="text" value="">' +
      '</td>' +
      '<td class="workTimeToNumber">' +
        '<input class="workTimeToMin" type="text" value="">' +
      '</td>' +
    '</tr>');
  }

}
