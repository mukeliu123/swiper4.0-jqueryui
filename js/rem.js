(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth>=640){
        // docEl.style.fontSize = '85px !important;';
        docEl.style.cssText = 'font-size:85px !important';
      }else{
        // docEl.style.fontSize = 100 * (clientWidth / 750) + 'px !important;'
        docEl.style.cssText = 'font-size:'+ 100 * (clientWidth / 750) + 'px !important';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
