 let dir = 1;
 $(document).ready(function(){
    var headclix = 0, eyesclix = 0, noseclix = 0, mouthclix = 0;
    lightning_one();
    lightning_two();
    lightning_three();
    /*
    $("#head").click(function(){
        headclix = animate("#head",headclix);
        if (headclix < 9) {
            $(this).animate({left:"-=367px"},500);
            headclix+=1;
        }
        else{$(this).animate({left:"0px"},500);
            headclix = 0;
         }

    });
    $("#eyes").click(function(){
        eyesclix = animate("#eyes",eyesclix);
        if (eyesclix < 9) {
            $(this).animate({left:"-=367px"},500);
            eyesclix+=1;}
        else{$(this).animate({left:"0px"},500);
            eyesclix = 0;
        }
    });
    $("#nose").click(function(){
        noseclix = animate("#nose",noseclix);
        if (noseclix < 9) {
            $(this).animate({left:"-=367px"},500);
            noseclix+=1;}
        else{$(this).animate({left:"0px"},500);
            noseclix = 0;}
    });//end click
    
    $("#mouth").click(function(){
        mouthclix = animate("mouth",mouthclix);
        /*if (mouthclix < 9) {
            $(this).animate({left:"-=367px"},500);
            mouthclix+=1;}
        else{$(this).animate({left:"0px"},500);
            mouthclix = 0;}
    });
    */
    $('#head').mouseup(function(event) {
        console.log("Mouse Down",event.which)
            headclix = animate("#head",headclix,event.which);
    });
    $('#eyes').mouseup(function(event) {
        console.log("Mouse Down",event.which)
            eyesclix = animate("#eyes",eyesclix,event.which);
    });
    $('#nose').mouseup(function(event) {
        console.log("Mouse Down",event.which)
            noseclix = animate("#nose",noseclix,event.which);
    });
    $('#mouth').mouseup(function(event) {
            mouthclix = animate("#mouth",mouthclix,event.which);
    });
});//end doc.onready function
    function animate(obj,clix,dir){
        if(dir == 1){
            if (clix < 9 && clix >= 0) {
            $(obj).animate({left:"-=367px"},500);
            return clix+1;}
            else{$(obj).animate({left:"0px"},500);
            return 0;
            }
        }
        else{
            if (clix < 9 && clix > 0) {
                $(obj).animate({left:"+=367px"},500);
                return clix-1;}
                else{$(obj).animate({left:"0px"},500);
                return 0;
                }
    }
    }
    function lightning_one(){
        $("#container #lightning1").fadeIn(250).fadeOut(250);
        setTimeout("lightning_one()",4000);
    }
    function lightning_two(){
        $("#container #lightning2").fadeIn(250).fadeOut(250);
        setTimeout("lightning_two()",5000);
    }
    function lightning_three(){
        $("#container #lightning3").fadeIn(250).fadeOut(250);
        setTimeout("lightning_three()",4000);
    }
