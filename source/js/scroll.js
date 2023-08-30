let item = document.getElementById('firstFrame');
console.log(item);

window.onscroll = function(){
    let pos = window.pageYOffset

    item.contentWindow.scrollTop(0 , pos)
}