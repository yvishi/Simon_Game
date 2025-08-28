var colors=["red","blue","green","yellow"];
var gamePattern=[];
var userPattern=[];


$(document).keypress(function(){
    if(gamePattern.length==0){
        nextSequence();
    }
})

function nextSequence(){
    $(".level-title").text("Level "+(gamePattern.length+1));
    var randomNumber=Math.floor(Math.random()*4);
    var randomColor=colors[randomNumber];
    gamePattern.push(randomColor);
    $('.btn.'+randomColor).fadeOut(100).fadeIn(100);
    var audio=new Audio('sounds/'+randomColor+'.mp3');
    audio.play();
}




$(".btn").click(function(){
    User(this.id);
})


function User(id){
    var userChosenColor=id;
    userPattern.push(userChosenColor);
    animatePressed(userChosenColor);
    checkAnswer(userPattern.length-1);
}



function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userPattern[currentLevel]){
        if(gamePattern.length==userPattern.length){
            setTimeout(function(){
                nextSequence();
                userPattern=[];
            },1000);
        }
    }
    else{
        var audio=new Audio('sounds/wrong.mp3');
        audio.play();
        $("body").addClass("game-over");
        $(".level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        
        startOver();
    }
    
}


function animatePressed(choice){
    $('.'+choice).addClass("pressed");
    setTimeout(function(){
        $('.'+choice).removeClass("pressed");
    },100);
    var audio=new Audio('sounds/'+choice+'.mp3');
    audio.play();
}



function startOver(){
    gamePattern=[];
    userPattern=[];
    
}



