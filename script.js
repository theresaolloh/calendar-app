$(document).ready(function () {

    $("#currentDay").text(moment().format("DD MM YYYY, h:mm:ss a"));

    $(".saveBTN").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    }
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));