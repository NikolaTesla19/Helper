
google.maps.event.addDomListener(window, 'load', init);
function init() {

        var myOptions = {
            center: new google.maps.LatLng(53.910715, 27.539682),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        var map = new google.maps.Map(document.getElementById("map"),
            myOptions);

            setMarkers(map, locations);
    };



      var locations = [
          ['Мясникова 32', 53.898343, 27.543283, '<p>9:00 - 18:30 (пн. - чт.)<br>9:00 - 17:30 (пт.)<br>в предпр. дни сокр. на час<br><br><b>здесь 3 инфокиоска</b></p>'],
          ['Притыцкого 93', 53.905986, 27.439430, '<p>10:30 - 19:00</p>'],
          ['Якубова 10', 53.851356, 27.597943, '<p>	10:00 - 18:00 (пн. - пт.)<br> 10:00 - 17:00 (предпр. дни)</p>'],
          ['Победителей 23/1', 53.912253, 27.541370, '<p>	9:00 - 19:00 (пн. - пт.) <br>10:00 - 15:00 (сб.)</p>'],
          ['Победителей 100', 53.938222, 27.481433, '<p>24 часа<br><br><b>здесь 2 инфокиоска</b></p>'],
          ['Дзержинского 91', 53.859491, 27.482487, '<p>	9:40 - 19:15</p>'],
          ['Партизанский 150а', 53.859810, 27.673649, '<p>	10:00 - 22:00 (пн. - пт.)<br> 10:00 - 21:00 (сб., вс.)</p>'],
          ['Старовиленская 87', 53.919698, 27.561157, '<p>	8:00 - 20:00 (пн. - пт.)<br> 9:00 - 17:00 (сб.)</p>'],
          ['Логойский тракт 37', 53.955498, 27.620050, '<p>	9:00 - 23:00</p>'],
          ['Есенина 68', 53.858083, 27.444362, '<p>	8:00 - 20:00 (пн. - пт.)<br> 9:00 - 17:00 (сб.)</p>'],
          ['Кропоткина 44', 53.916801, 27.556841, '<p>	9:00 - 19:00 (пн. - пт.)<br> 9:00 - 16:00 (сб.)</p>'],
          ['Скрыганова 6а', 53.911795, 27.516972, '<p>	9:00 - 18:00 (пн. - пт.)<br><br><b>здесь 2 инфокиоска</b></p>'],
          ['Логойский тракт МКАД', 53.964622, 27.624137, '<p>	9:00 - 23:00</p>'],
          ['Заславская 10', 53.910700, 27.539631, '<p>	9:00 - 19:00 (пн. - чт.)<br> 9:00 - 18:00 (пт.)<br><br><b>здесь 2 инфокиоска</b></p>'],
          ['Мавра 41', 53.893238, 27.491275, '<p>	8:00 - 20:00 (пн. - пт.)</p>'],
          ['Победителей 29', 53.912278, 27.541298, '<p>	9:30 - 18:00 (пн. - чт.)<br> 9:30 - 17:00 (пт.)<br> в предпр. дни сокр.</p>'],
          ['Кульман 3', 53.919872, 27.582840, '<p>	9:00 - 16:30 (пн. - чт.)<br> 9:00 - 15:15 (пт.)<br> 9:30 - 17:00 (сб.)</p>'],
          ['Толбухина 2', 53.912278, 27.614924, '<p>	9:00 - 18:00</p>'],
          ['Большое Стиклево, Фабричная 16а', 53.863277, 27.698012, '<p>	9:00 - 18:00 (пн. - пт.)</p>'],
          ['Асаналиева 2/3', 53.842938, 27.538422, '<p>	9:00 - 17:00 (пн. - чт.)<br> 9:00 - 16:00 (пт., предпр. дни)</p>'],
          ['Независимости 2/3', 53.895516, 27547881, '<p>	10:00 - 22:00</p>'],
          ['Победителей 65', 53.926158, 27.517531, '<p>	9:00 - 2:00</p>'],
          ['Победителей 20/1', 53.933315, 27.508272, '<p>	7:00 - 23:00 (пн. - пт.)<br> 9:00 - 22:00 (сб., вс.)</p>'],
          ['Гебелева 7', 53.898973, 27.540000, '<p>	8:00 - 20:00 (пн. - пт.)<br> 9:00 - 17:00 (сб.)</p>'],
          ['Московская 13', 53.887585, 27.538817, '<p>	9:00 - 18:30 (пн. - чт.)<br> 9:00 - 17:30 (пт.)<br> 9:00-17:00 (сб.)</p>'],
          ['Бабушкина 39', 53.800784, 27.593598, '<p>	8:30 - 18:00 (пн. - чт.)<br> 8:30 - 16:45 (пт., предпр. дни)</p>'],
          ['Ваупшасова 4/4', 53.888824, 27.633992, '<p>	8:00 - 20:00</p>'],
          ['Матусевича 13', 53.914712, 27.483153, '<p>	8:00 - 20:00 (пн. - пт.)<br> 9:00 - 17:00 (сб.)</p>']
      ];
      function setMarkers(map, locations) {

              var marker, i, mark_position;
              for (i = 0; i < locations.length; i++) { // Проходимся по нашему массиву с марками

      			// Тут вроде и так все понятно
                  var title = locations[i][0];
                  var lat = locations[i][1];
                  var long = locations[i][2];
                  var text = locations[i][3];

                  mark_position = new google.maps.LatLng(lat, long); // Создаем позицию для отметки

                   marker = new google.maps.Marker({ // Что будет содержаться в отметке
                       map: map, // К какой карте относиться отметка
                       title: title, // Заголовок отметки
                       position: mark_position, // Позиция отметки
                       animation: google.maps.Animation.DROP, // Анимация
                       icon: 'img/infokiosk-marker.png' // Можно поменять иконку, если оставить пустые скобки, то будет оригинальная иконка
                  });

      			// Дальше создаем контент для каждой отметки

                  var content = '<div>' + '<h1>' + title + '</h1>' + text + '</div>';
                  var infowindow = new google.maps.InfoWindow();

      			// При нажатии на марку, будет отображаться контент

                  google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                      return function() {
                          infowindow.setContent(content);
                          infowindow.open(map,marker);
                      };
                  })(marker,content,infowindow));
              };
          };
