var clickpage = function(urlstr){
    var pathstr = urlstr;
    window.location.href= urlstr;
}


var isShow = true;
var clickDetailsBtnRemo = function(){
    if(isShow){
        document.getElementsByClassName('navFlexbox')[0].classList.remove('hideBox');
        isShow = false
    }else{
        document.getElementsByClassName('navFlexbox')[0].classList.add('hideBox');
        isShow = true
    }
}

