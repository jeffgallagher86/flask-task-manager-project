$(document).ready(function () {
  $('.sidenav').sidenav({
    edge: "right"
  });
});

$(document).ready(function () {
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  $('.tooltipped').tooltip();
});

$(document).ready(function(){
  $('.datepicker').datepicker({
    format: "dd mmm, yyyy",
    yearRange: 3,
    showClearBtn: true,
    i18n: {
      done: "Select"
    }
  });
});