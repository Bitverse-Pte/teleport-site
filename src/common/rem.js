(function () {
    function setRem() {
        if (document.documentElement.clientWidth >= 0) {
            var deviceWidth = parseInt(document.documentElement.clientWidth / 192) + 'px';
            document.documentElement.style.cssText = "font-size:" + deviceWidth + "!important";
        }else{
            document.documentElement.style.cssText = "font-size:" + 16 + "!important";
        }
    }
    window.onresize = setRem;
    setRem();
})()