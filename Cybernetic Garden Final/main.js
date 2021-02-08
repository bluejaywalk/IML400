$(document).ready(function () {


    $('.row1').click(function () {
        $('#plant1').slideToggle("slow");
        $("#text1").fadeToggle("slow");
    });

    $('.row2').click(function () {
        $('#plant2').slideToggle("slow");
        $("#text2").fadeToggle("slow");
    });

    $('.row3').click(function () {
        $('#plant3').slideToggle("slow");
        $("#text3").fadeToggle("slow");
    });

    $('.row4').click(function () {
        $('#plant4').slideToggle("slow");
        $("#text4").fadeToggle("slow");
    });

    $(".left").mouseenter(function () {
        alert("What's so great about physical forms?");
    });
     $(".right").mouseenter(function () {
        alert("What's so great about digital forms?");
    });
});
