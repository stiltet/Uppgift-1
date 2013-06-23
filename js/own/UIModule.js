/// <reference path="../bootstrap.min.js" />
/// <reference path="../less-1.3.3.min.js" />
/// <reference path="../modernizr-latest.js" />
/// <reference path="../jquery/jquery-1.9.1.min.js" />
/// <reference path="../jquery/jquery-ui-1.10.2.min.js" />

console.log("UI");

var uiObject = function () {
  return {
    TouchContent: (function () {
      if(!Modernizr.touch)
        $('#touchContent').text("This element requires Touch");
    }),
    AddDIV: (function (NrOfTimesjQueryDIVOpened) {
      if (!$('#addedByjQueryDIV').length)
        $('body').append("<div id='addedByjQueryDIV'>Added by jQuery. Button has been pressed <span id='NrOfTimesjQueryDIVOpened'>" + NrOfTimesjQueryDIVOpened + "</span> times.</div>");
      else
        $('#NrOfTimesjQueryDIVOpened').text(NrOfTimesjQueryDIVOpened);
    }),
    ShowNrOfTimesModalOpened: (function (NrOfTimesModalOpened) {
      $('#NrOfTimesModalOpened').text(NrOfTimesModalOpened);
    })
  };
};