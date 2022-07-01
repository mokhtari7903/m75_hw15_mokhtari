$("document").ready(function(){
    const BASE_URL = "https://62a56925b9b74f766a39306d.mockapi.io/api/ex2/students";
    let data;
    $.ajax({
        async:false,
        url: BASE_URL,
        success: (result) => {
            data = result;
        }
            })
        data.forEach((item, i) => {
            let values = Object.values(item)
            let tr = $("<tr></tr>");
            $("tbody").append(tr)
            values.forEach((val) => {
                let td = $("<td></td>").text(val)
                 td.css({
                    color:"blue",
                    border:"1px solid gray",
                    "border-radius":"5px"
                })

                tr.append(td)
                
            })
            let td = $("<td class='del'></td>").text("Delete");
            td.css({
                color:"red",
                border:"1px solid gray",
                "border-radius":"5px"
            })
        //   console.log(i, $(".del").prev())
            td.on("click",function(e){
               let id = e.target.previousSibling.innerText
               let delId = +id;
                $.ajax({
                    async:false,
                    url:`${BASE_URL}/${delId}`,
                    type:"DELETE",
                    success:() => {console.log(`delete => ${id}`);}

                })
              
          e.target.parentElement.remove()

            })
            tr.append(td)

            
        });
            
   
   
        
     
})


