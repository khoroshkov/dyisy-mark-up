$(document).ready(function () {
  //**** PHP + needs "onclick="return LinkClicked(this)" at a html attribute *****/

  let phpScriptLocation = "../clickCounter.php";

  function LinkClicked(obj) {
    let http;

    if (window.XMLHttpRequest) {
      try {
        http = new XMLHttpRequest();
      } catch (e) {}
    } else if (window.ActiveXObject) {
      try {
        http = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          http = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }
    if (!http) {
      return false;
    }
    phpScriptLocation +=
      "?link=" + escape(obj.href) + "&page=" + escape(document.URL);
    http.onreadystatechange = function () {};
    http.open("GET", phpScriptLocation, true);
    http.send("");
    return true;
  }

  //**** on js + jquery ****//

  const playBtns = document.querySelectorAll(".play_btn");
  playBtns.forEach((item) => item.addEventListener("click", getInfo));

  function getUserIP() {
    let ret_ip;
    $.ajaxSetup({ async: false });
    $.get("http://jsonip.com/", function (r) {
      ret_ip = r.ip;
    });
    return ret_ip;
  }

  function getInfo(e) {
    e.preventDefault();

    const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    const btnId = e.target.dataset.id;
    const ip = getUserIP();

    let infoClicked = { userIp: ip, date: currentDate, btnId: btnId };

    console.log(infoClicked);

    return infoClicked;
  }
});
