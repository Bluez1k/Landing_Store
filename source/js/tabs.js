//==========================================tabs======================================

const tabs = {                   //глобальный объект таба

    units: [                    //массив объектов для каждого таба
        {
            item: document.getElementById('t-1'),       //сама карточка
            state: 0,                                   //её состояние (0-отображена, 100-нет)
            btn: document.getElementById('btn-t-1')     //связанная с ней кнопка
        },
        {
            item: document.getElementById('t-2'),       //сама карточка
            state: 100,                                   //её состояние (1-отображена, 100-нет)
            btn: document.getElementById('btn-t-2')     //связанная с ней кнопка
        },
        {
            item: document.getElementById('t-3'),       //сама карточка
            state: 100,                                   //её состояние (1-отображена, 100-нет)
            btn: document.getElementById('btn-t-3')     //связанная с ней кнопка
        },
        {
            item: document.getElementById('t-4'),       //сама карточка
            state: 100,                                   //её состояние (1-отображена, 100-нет)
            btn: document.getElementById('btn-t-4'),     //связанная с ней кнопка
        },
    ],

    init: function(){
        for(index = 0; index < this.units.length; index++){
            this.units[index].btn.addEventListener('click', this.changeTab)
        }
    },
    
    changeTab: function(event) {                    //event - событие нажатие на кнопку
        for (elem in tabs.units){                   //проходим циклом по units
            obj = tabs.units[elem];                 //получаем объект таба
            if (obj.btn === event.srcElement){      //если кнопка вызвавшая событие это кнопка нужного таба
                obj.state = 0;                      //состояние - отображен
            }
            else{
                obj.state = 100;                     //иначе состояние скрыт
            }
            obj.item.style.top = `${obj.state}%`;
        }
    }
}

tabs.init();