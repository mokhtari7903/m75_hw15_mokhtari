$(document).ready(function(){

    const data =[
        ["name1", "54", "100000"],
        ["name2", "354","155000"],
        ["name3", "64", "104500"],
        ["name4", "14", "146500"],
        ["name5", "78", "100000"],
        ["name6", "544","148700"],


    ] 

    for(i = 0; i < data.length; i++){
     
      let tr = $("<tr></tr>");
      let color = (i %2 === 0)?"white":"#9b9f9b";
      tr.css({
               "background-color": color,
            })
            
            $(".tbody").append(tr)
            for (let j = 0; j < data[0].length; j++) {
                let td = $("<td></td>").text(data[i][j]);
        td.css({
        padding:"15px 65px",
        border:"1px solid gray",
       });
       tr.append(td)
        
      }
   }
   
   
})