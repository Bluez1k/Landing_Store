//=========================slider=========================


const frames = {                                            //глобальный объект
    step: 100,                                              //шаг сдвига (100% т.е. ширина блока)

leftArrow: document.getElementById('leftArrow'),            //объект левой стрелки
    rightArrow: document.getElementById('rightArrow'),      //объект правой стрелки

    units: [                                                //объект содержащий объекты слайдов
        {
        item: document.getElementById('b-1'),               //сам html объект
        startPos: 0,                                        //старновая позиция
        endPos: -300,                                       //конечная позиция
        curPos: 0,                                          //текукщая позиция (!!!здесь всегда равна стартовой!!!)
        },
        {
        item: document.getElementById('b-2'),               //остальные по аналогии
        startPos: 100,
        endPos: -200,                                       //при добавлении нового слайда
        curPos: 100,                                        //добавить новый объект по этоим шаблонам
        },                                                  //не забыть указать старт текущий и конечный 
        {
        item: document.getElementById('b-3'),
        startPos: 200,
        endPos: -100,
        curPos: 200,
        },
        {
        item: document.getElementById('b-4'),
        startPos: 300,
        endPos: 0,
        curPos: 300,
        },
    ],


    changeSlideAuto: function(){                        //метод объекта автоматически листающий слайды
        setInterval(() => {                             //функция повторяющая перелистывание через (см. строка 52)    
            for (item in this.units){                   //Проходим циклом по слайдам (считает индексы)
                let obj = this.units[item];             //получаем объект по индексу
                if (obj.curPos <= obj.endPos){          //если текущая позиция меньше или равна конечной
                    obj.curPos = obj.startPos;          //устанавливаем стартовую
                }
                else{                                   //инача
                    obj.curPos -= this.step;            //уменьшаем позицию на шаг (свайп вправо)
                }
    
                this.units[item].item.style.left = `${obj.curPos}%`;    //устанавливаем left в нужное значение для сдвига слайда
            }
        }, 8000);                                       //интервал повторения в мс
    },

    changeSideManual: function(eventer){            //метод перелистывания стрелками (аргумент - объект вызвавший метод стр79,80)
        if (eventer === this.rightArrow){           //если объект - правая стрелка
            for (item in this.units){               //проходим циклом по слайдам (считает индексы)
                let obj = this.units[item];         //получаем объект слайда по индексу
                if (obj.curPos <= obj.endPos){      //если текущая позиция меньше или равна конечной 
                    break;                          //ничего не делаем
                }
                else{
                    obj.curPos -= this.step;        //вычитаем из текущей позиции шаг         
                }
            this.units[item].item.style.left = `${obj.curPos}%`;    //пишем в left текушаю позицию
            }
        }
        else if (eventer === this.leftArrow){       //по аналогии с правой только сдель левая стрелка
            for (item in this.units){
                let obj = this.units[item];
                if (obj.curPos >= obj.startPos){    //поэтому текущаю позицию сравниваем со стартовой чтоб не листнуть лишнего    
                    break;
                }
                else{
                    obj.curPos += this.step;        //прибавсяем шаг (свайп влево)
                }
            this.units[item].item.style.left = `${obj.curPos}%`;    
            }
        }
    }
}

frames.leftArrow.addEventListener('click', () => frames.changeSideManual(frames.leftArrow));    //обработчики нажатия на стрелку
frames.rightArrow.addEventListener('click', () => frames.changeSideManual(frames.rightArrow));

frames.changeSlideAuto();                       //запускаем автосвайп
