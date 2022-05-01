function doExercisesQ3(){
    setTimeout(booyah1, 2000);
    setTimeout(booyah2(), 2000);   
}

function booyah1(){
    alert("booyah1_BOOYAH!");
}
function booyah2(){    
    setTimeout(function(){
        alert("booyah2_BOOYAH!");
    }, 2000);    
}
