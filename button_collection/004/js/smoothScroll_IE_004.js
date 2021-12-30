'use strict';

(function () {
  // 他のページからID指定で飛んできたときに一度トップで止めてからスクロールする
  location.hash &&
    setTimeout(function () {
      scroll({
        top: 0,
      });
      setTimeout(function () {
        var _document$querySelect;

        var locationTarget =
          (_document$querySelect = document.querySelector(location.hash)) !==
            null && _document$querySelect !== void 0
            ? _document$querySelect
            : document.body;
        scroll({
          top: locationTarget.offsetTop,
          behavior: 'smooth',
        });
      }, 300);
    }, 70); //  ページ外から飛んできたときにスムーススクロールが働かないときはここの数値を調整（ミリ秒）

  // ページ内リンクを踏んだときの制御
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (a.hash) {
        var target = document.querySelector(a.hash);
        scroll({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      } else {
        const currentTop = window.scrollY;
        console.log(currentTop);
        console.log(document.body.clientHeight);
        scroll({
          top: 0,
          behavior: 'smooth',
        });
        setTimeout(function () {
          scroll({
            top: document.body.clientHeight,
          });
        }, 500);
        setTimeout(function () {
          scroll({
            top: currentTop,
            behavior: 'smooth',
          });
        }, 700);
        setTimeout(function () {
          alert('トップを突き抜けて下から戻ってきちゃうボタン');
        }, 2000);
      }
    });
  });
})();
