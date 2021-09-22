"use strict"
function addNews() {
  var lable = document.getElementById("lable"),
      text = document.getElementById("text");
  $.ajax({
            type: "POST",
            url: "/news",
            data: {lable:lable.value,
                   text:text.value},
            dataType: 'json',
            success: function (data) {
              console.log("1");
              var array = data;
              var i = data.length - 1;
              $('#newsResult').prepend('<div id="' + data[i].id_news + '">' +
                                          '<div class="lableDiv"><div style="width: calc(100% - 140px); float: left;"><p class="lableNews">' + data[i].lable_news + '</p></div><div class="deleteNews" onclick="deleteNews' + data[i].id_news + '()"><p>Удалить</p></div></div>' +
                                          '<div class="textDiv"><p>Дата добавления новости: ' + data[i].date_news + '</p><br>' +
                                          '<p class="eachNews">' + data[i].text_news + '</p>' +
                                          '<script>' +
                                            'function deleteNews' + data[i].id_news + '() {' +
                                              'var numberNews =' + data[i].id_news + ';' +
                                              '$.ajax({' +
                                                'type: "POST",' +
                                                'url: "/delete",' +
                                                'data: {idNumber:numberNews},' +
                                                'dataType: "json",' +
                                                'success: function(data){' +
                                                '}' +
                                              '});' +
                                              '$("#' + data[i].id_news + '").hide();' +
                                            '};' +
                                            '$("#add, .deleteNews").show();' +

                                          '</script>' +
                                          '</div>');

            }
        });
};
function deleteNews() {
  $.ajax({
    type: "POST",
    url: "/delete",
    data: "hi",
    dataType: 'json',
    success: function(data){

    }
  });
};
function add() {
  $('#addNews1').show();
}
function closeNews() {
  $('#addNews1').hide();
}
function checkPass(){
  var pass = document.getElementById('checkPassInput');
  if (pass.value == (45222 || 45319 || 45317)){
    $('#add, .deleteNews').show();
  } else{
    alert('Неверный пароль!')
  }
}
