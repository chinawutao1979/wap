function doExercisesQ3(){
    setTimeout(booyah1, 2000);
    setTimeout(booyah2(), 2000);   
}

function booyah1(){
    alert("BOOYAH!");
}
function booyah2(){    
    setTimeout(function(){
        alert("BOOYAH!");
    }, 2000);    
}
