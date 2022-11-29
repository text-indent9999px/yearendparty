

IV$('body').on('IVreadyBefore',function(e){ 
    //console.log('---------------------------------------- dom 기본 완료 ------------------------------------- ');

    iv_commonBaseFunc.initBefore();
  
});


IV$('body').on('IVready',function(e){
    iv_commonBaseFunc.init();
});

window.addEventListener("DOMContentLoaded", function(event) {
    //console.log('-------------1');  
});



IV$('body').on('IVloadBefore',function(e){
    //console.log('---------------------------------------- dom 읽기 complete ------------------------------------- ');
    iv_commonBaseFunc.initLast();
});

IV$('body').on('IVload',function(e){
    //console.log('---------------------------------------- window load 끝 ------------------------------------- ');
    if(IV$('[onclick*="MemberAction"]').length == 0){
        (function() { 
            var oldXHR = window.XMLHttpRequest;
            function newXHR() {
                var realXHR = new oldXHR();
                realXHR.addEventListener("readystatechange", function() { 
                    if (realXHR.readyState == 4 && realXHR.status == 200) {
                        var chkXHR = realXHR.responseURL;
                        window['oldURL'] = chkXHR; 
                        window['oldResponseText'] = realXHR.responseText;
                        let IV_WINDOW_AJAX_REQUEST = new CustomEvent('IVajaxRequestAfter');
                        document.body.dispatchEvent(IV_WINDOW_AJAX_REQUEST);
                    };
                }, false);
                return realXHR;
            };
            window.XMLHttpRequest = newXHR;
        })();
    }
});


window.addEventListener("load", function(event) {
    //console.log('--------------2');

});
IV$('body').on('IVVisible',function(e){
    //console.log('---------------------------------------- 보임 ------------------------------------- ');
});
IV$('body').on('IVNotvisible',function(e){
    //console.log('---------------------------------------- 안보임 ------------------------------------- ');
});
IV$('body').on('IVbeforeunload',function(e){
    //console.log('---------------------------------------- 떠나는중 ------------------------------------- ');
});
IV$('body').on('IVunload',function(e){
    //console.log('---------------------------------------- 떠남 ------------------------------------- ');
});
IV$('body').on('IVScroll',function(e){
    //console.log('---------------------------------------- 스크롤중 ------------------------------------- ');
    IVBaseScroll.execute();

});
IV$('body').on('IVajaxRequestAfter',function(e){
    iv_commonCustom.ajaxRequestAfter();
});








