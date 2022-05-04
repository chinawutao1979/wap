/*jslint browser: true*/ /*global  $*/
var startStatus = false;



//Exercise 3
$(document).ready(function () {
    "use strict";
    $("#start").click(function () {
        startStatus = true;
        $("#status").text("Starting...");
        $("#status").css("color", "#1cca0c");
        //Exercise 6
        $(".boundary").removeClass("youlose");
    });

    // Exercise 9
    $(document).mousemove(function (event) {
        var left = event.pageX < $("#start").offset().left;
        var right = event.pageX > $("#end").offset().right;
        if (startStatus && (left || right)) {
            goLost();
        }
        // Exercise 10
        $("#info2").text("X-axis: " + event.pageX + ", Y-axis: " + event.pageY);
        $("#info2").css({"color": "green", "font-weight": "bold"});
    });

    // Exercise 4
    $(".boundary").mouseover(function () {
        if (startStatus) {
            //alert("Sorry,you lost![");   Exercise 5
            //$(".boundary.example").text("Sorry,you lost!:[");
            goLost(); //Exercise 8
        }
    });


    // .mouseout(function () {
    //     $(this).removeClass("youlose");

    // })

    $("#end").mouseover(function () {
        if (startStatus) {
            //alert("You win!:]"); Exercise 5
            //$(".boundary.example").text("You win!:]");
            $("#status").text("You win!:]  (End)");//Exercise 8
            $("#status").css("color", "green");
        }
        startStatus = false;
    });

    // function moveDirection(tag,e){
    //     var w = $(tag).width();
    //     var h = $(tag).height();
    //     var x = (e.pageX - tag.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
    //     var y = (e.pageY - tag.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
 //     var direction = Math.round((((Math.atan2
    //(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4
//     $("#info2").text("w="+w+",h="+h+",x="+x+",
    //y="+y+"direction="+direction+",eX="+e.pageX+",eY="+e.pageY);
    //     return direction;
    // }

    // $("#start").on("mouseenter mouseleave", function (e) {
    //     var eType = e.type;
    //     var direction = moveDirection(this,e);

    //     var dirName = new Array("top","right","down","left");
    //     if(eType == "mouseenter"){
    //         $("#info").text("from"+dirName[direction]+"enter");
    //     }else if(eType == "mouseleave"){
    //         $("#info").text("from"+dirName[direction]+"enter");
    //     }
    // });
    function goLost() {
        $(".boundary").addClass("youlose");
        startStatus = false;
        $("#status").text("Sorry,you lost!:[  (End)");
        $("#status").css("color", "red");
    }

});
