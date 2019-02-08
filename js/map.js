'use strict';
// создание экземпляра карты
ymaps.ready(init);

function init () {
    var myMap;

    $('#toggle').bind({
        click: function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    // Координаты центра карты.
                    center: [55.76, 37.64], // Москва
                    // Уровень масштабирования от 0 (весь мир) до 19.
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                
                $("#toggle").attr('value', 'Скрыть карту');
            }
            else {
                myMap.destroy();// Деструктор карты
                myMap = null;
                $("#toggle").attr('value', 'Показать карту');
            }
        }
    });
}


    