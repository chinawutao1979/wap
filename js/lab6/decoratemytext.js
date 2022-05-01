
function doBiggerDecorator(){
    //alert("Hello, world!");
    setInterval(reDoBiggerDecorator,500);      
}

function reDoBiggerDecorator(){  
    var txt = jQuery('#textDecorator');    
    var originalFontSize = parseInt(txt.css('font-size'));
    txt.css('font-size',originalFontSize+2);     
}

function doBlink(){    
    var txt = $("#textDecorator");
    var isChecked = document.getElementById("bling1").checked;
    //var currentStyle = txt.attr("style");
    var blinkStyle = "font-weight:bold;color:green;text-decoration:underline;";
    if(isChecked){
        txt.attr("style",  blinkStyle); 
        txt.addClass("blink_me");           
    }else{
        txt.attr("style",  "");
        txt.removeClass("blink_me"); 
    }
   
}

function convertText(){
    var txt = document.getElementById("textDecorator");
    var words = txt.value;    
    //let arr= words.split(/\.| |  |   |    ,/); 
    //arr=Array.from(new Set(arr));
    var reg = new RegExp("[A-Za-z]+");     
    var word="";
    var newWords="";
    for (let i = 0; i < words.length; i++) {
        var c = words.charAt(i);
        if(c !=',' && c!='.' && c !=',' && c!=' ' && c!=':' && c!=';' && c!='"'  && c!='<'  && c!='>'  && c!='('  && c!=')'){
            word += c+""; 
        }else{ 
            if(word!=="" && reg.test(word)){
                var newWord = "";
                var firstChar = word.charAt(0);
                if(firstChar=="a" || firstChar=="e" ||firstChar=="i" ||firstChar=="o" ||firstChar=="u"){
                    newWord = word+"ay";
                }else{               
                    newWord = word.substring(1)+firstChar+"ay";
                }
                newWords += newWord;         
            }else{
                newWords +=  word; 
            }
            newWords +=  c+"";
            word = "";
        }
    }    
    txt.value = newWords;   
}

function doReplace(){
    var txt = document.getElementById("textDecorator");
    var words = txt.value;    
    var reg = new RegExp("[A-Za-z]+");     
    var word="";
    var newWords="";
    for (let i = 0; i < words.length; i++) {
        var c = words.charAt(i);
        if(c !=',' && c!='.' && c !=',' && c!=' ' && c!=':' && c!=';' && c!='"'  && c!='<'  && c!='>'  && c!='('  && c!=')'){
            word += c+"";
        }else{
            if(word!=="" && reg.test(word)){
                var newWord = "";
                var firstChar = word.charAt(0);
                if(word.length >=5){
                    newWord = "Malkovich";
                }else{               
                    newWord = word;
                }
                newWords += newWord;         
            }else{
                newWords +=  word; 
            }
            newWords +=  c+"";
            word = "";
        }
    }    
    txt.value = newWords;
}


  
