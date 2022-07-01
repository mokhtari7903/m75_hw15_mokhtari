$("document").ready(function(){
    $(".text p").hide()
    let is = true;
    $(".button").click(function(){

        $(".text p").slideToggle("slow")
        if(is){
            $(".button").text("Close");
            is = !is
        }else{
            $(".button").text("Open")
            is = !is
        }


    })
})