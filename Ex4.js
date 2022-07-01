$("document").ready(function(){
    let contkey = 0; 
    $("input").on("keydown", function(e){
        if(e.key === "Enter"){
            contkey++
            $("p").text(`Enterrrr! Count: ${contkey}` );


        }

    })

})