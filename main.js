$(document).ready(function(){
    var count = 0;
    /* var done = Array(); */
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        success:function(data){
           var output ="<table class='table table-dark table-striped' id='tasks'><thead><tr><th>ID</th><th>TASK</th><th>Status</th></tr>";
         
           for(var i in data){
             
                 output+="<tr><td>"+data[i].id+"</td>"
                 output+="<td>"+data[i].title+"</td>";
                 if(data[i].completed)
                 output+="<td><input type='checkbox' class='chk' id='c"+ i +"'></td></tr>";  
                 else
                 output+="<td><input type='checkbox' class='chk' id='c"+i+"' checked disabled></td></tr>";                  
                    
                        
           }
           output+= "</table>";
           $("#res").html(output);
          
           $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked"))
            {
                count++;
            }
            else
            {
                count--;
            }

            
            var mypromise = new Promise((resolve , reject)=>{
                if(count == 5)
                {
                    resolve();
                }
            else
            {
                reject();
            }
            });
            mypromise.then(()=>{
                alert("Congrats. 5 Tasks have been Successfully Completed");
            });
           });
           
        }
    
    });
    

});