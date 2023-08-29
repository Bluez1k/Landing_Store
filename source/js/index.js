const frames = {
    step: 100,
    units: [
        {
        item: document.getElementById('b-1'),
        startPos: 0,
        endPos: -300,
        curPos: 0,
        // bullit: document.getElementById('bullit_1')
        },
        {
        item: document.getElementById('b-2'),
        startPos: 100,
        endPos: -200,
        curPos: 100,
        // bullit: document.getElementById('bullit_2')
        },
        {
        item: document.getElementById('b-3'),
        startPos: 200,
        endPos: -100,
        curPos: 200,
        // bullit: document.getElementById('bullit_3'),
        },
        {
        item: document.getElementById('b-4'),
        startPos: 300,
        endPos: 0,
        curPos: 300,
        // bullit: document.getElementById('bullit_1')
        },
    ],


    changeBackgroundAuto: function(){
        for (item in this.units){
            let obj = this.units[item];
            if (obj.curPos <= obj.endPos){
                obj.curPos = obj.startPos;
            }
            else{
                obj.curPos -= this.step;
            }

            // if (obj.curPos === 0){
            //     obj.bullit.style.opacity = '1';
            // }
            // else{
            //     obj.bullit.style.opacity = '0.5';
            // }

            this.units[item].item.style.left = `${obj.curPos}%`;
        }
    }
}

setInterval(() => {
    frames.changeBackgroundAuto()
}, 5000);