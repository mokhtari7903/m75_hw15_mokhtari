$("document").ready(function(){
    let isLogin = true;
   $("button").click(function(){
       $("button").toggleClass("red");
       
    if(isLogin){
        
       $("button").text("Log out");
       isLogin = !isLogin
   }else{
      
       $("button").text("Log in");
       
       isLogin = !isLogin
   }
        
   })

})





