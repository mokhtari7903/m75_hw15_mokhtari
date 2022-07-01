$(document).ready(function(){
   
    let s = true
    let wink;
    $("button").click(function(){
        if(s){
             wink = setInterval(() => {
                $("p").toggle()
            }, 300)
            $("button").text("Stop");
            $("button").css({"color":"red"});
            s = !s
        }else{
            clearInterval(wink)
            $("button").text("Start");
            $("button").css({"color":"green"});
            s = !s
        }

    })

})


