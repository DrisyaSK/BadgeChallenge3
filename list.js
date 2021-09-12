//var btn=document.getElementById("btn");
//console.log(btn.value);
function makelist()
{
    var file="grocerylist.json";
    
    try{
        var xhttp= new XMLHttpRequest();
       
    }
    catch(e)
    {
        alert(e);
    }
        
    xhttp.onreadystatechange= function()
    {
        
        
        if(this.readyState==4 && this.status==200)
        {
            var resp =JSON.parse(this.responseText);
            var listarr=resp.grocery;
            document.getElementById("table_list").removeAttribute("hidden","true");
            var table=document.getElementById("mytable");
            var i;
            for( i=0; i<listarr.length;i++)
            {
                var row=`<tr>
                            <td>${listarr[i].Sno}</td>
                            <td>${listarr[i].Name}</td>
                            <td>${listarr[i].Quantity}</td>
                            <td>${listarr[i].Unit}</td>
                            <td>${listarr[i].Department}</td>
                            <td>${listarr[i].Notes}</td>
                        </tr>`
                table.innerHTML +=row;
            }

        }
        
    }
    xhttp.open("GET",file,true);
    xhttp.send();

}