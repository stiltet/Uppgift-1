/// <reference path="../bootstrap.min.js" />
/// <reference path="../less-1.3.3.min.js" />
/// <reference path="../modernizr-latest.js" />
/// <reference path="../jquery/jquery-1.9.1.min.js" />
/// <reference path="../jquery/jquery-ui-1.10.2.min.js" />
/// <reference path="../../index.html" />
/// <reference path="FuctionalityModel.js" />
/// <reference path="UIModel.js" />
/*global fuctionalityObject:true*/
/*global uiObject:true*/

console.log("Controller");

$(document).ready(function () {
  "use strict";
  var UI = uiObject();
  var func = fuctionalityObject();

  UI.TouchContent();

  $('#jQueryDIVBtn').click(function (event) {
    func.NrOfTimesjQueryDIVOpened++;
    UI.AddDIV(func.NrOfTimesjQueryDIVOpened);
  });

  $('#U1ModalBtn').click(function (event) {
    func.NrOfTimesModalOpened++;
    UI.ShowNrOfTimesModalOpened(func.NrOfTimesModalOpened);
  });
});