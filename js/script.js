function animasiIntro(){
    $("#text span").velocity("transition.slideLeftIn",{
                    stagger:150,
                    complete : function(){
                        animasiButtonStart();
                    }
                });
}

function animasiButtonStart(){
    $("#start").velocity("transition.bounceUpIn")
               .mouseenter(function(){
                   $(this).velocity({width:100})
               })
               .mouseleave(function(){
                   $(this).velocity({width:125})
               })
}

$(document).ready(function(){
    animasiIntro();
});