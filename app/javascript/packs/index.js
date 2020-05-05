import Rails from "@rails/ujs";

$(function () {
  $("#search").on("keyup", function () {
    if ($(this).val().length) {
      Rails.fire($("#search-form")[0], "submit");
    }
    else {

    }
  })
  $("#search-form").on("ajax:success", function (e) {

    $("#result-tbl").html(e.detail[0]);
  })
})