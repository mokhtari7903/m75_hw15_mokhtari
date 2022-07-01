$("document").ready(function(){
    $("body").on("contextmenu",function(e){
        e.preventDefault()
    })
    $("body").on("copy",function(e){
        e.preventDefault()
    })
   
})