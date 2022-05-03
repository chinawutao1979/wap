'use strict';

function doAnimationSelect(){
    var animationSelected = $("#animationSelect option:selected").val();    
    $("#mytextarea").val(ANIMATIONS[animationSelected]);    
    doSizeSelect();
}

function doSizeSelect(){   
    var sizeSelected = $("#sizeSelect option:selected").val();
    $("#mytextarea").css("fontSize",sizeSelected);   
}

function doChange(e){   
    if ($('#start').prop("disabled") == true) {       
        mySetInterval();
    }
}

var timer;
var animationArray;
function start(){
    
    $("#start").attr("disabled",true);
    $("#stop").attr("disabled",false);
    $("#animationSelect").attr("disabled",true);
    $("#sizeSelect").attr("disabled",true);
    let animations = ANIMATIONS[$("#animationSelect option:selected").val()];
    animationArray = animations.split("=====\n");
    mySetInterval();    
}

function stop(){
    $("#stop").attr("disabled",true);
    $("#start").attr("disabled",false);    
    $("#animationSelect").attr("disabled",false);
    $("#sizeSelect").attr("disabled",false);
    clearInterval(timer);
    doAnimationSelect();
    index =0;
}
var index =0;

function mySetInterval(){
    let timeNum;    
    if (document.getElementById("turbo").checked) {        
        timeNum = 50;
    }else{        
        timeNum = 250;
    }

    clearInterval(timer);
    timer = setInterval(doAnimations, timeNum); 
}
function doAnimations(){    
    if(index >animationArray.length){
        index =0;
    }        
    $("#mytextarea").val(animationArray[index]); 
    index++;        
}