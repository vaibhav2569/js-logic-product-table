let arr=[];
function create(){
    
    let message="";
    document.getElementById("message").innerHTML=message;
    let id=document.getElementById("p_id").value;
    let name=document.getElementById("p_name").value;
    let price=document.getElementById("p_price").value;
    let correct=/^[A-Za-z]+$/;
    arr.push({id:id,name:name,price:"USD"+price});
    // if any input field is empty
    if(id==""||name=="" ||price=="")
    {
        message="please fill all input fields";
        
    }
    // if id or price is negative
    else if(id<0 ||price<0)
    {
        message="Please enter valid input";
        
    }
    // name validation 
    else if(!(name.match(correct)))
    {
          message="Special Characters are not allowed";
          
    }
    // if message is not blank it means no error
    if(message!="")
    {
        
        document.getElementById("message").innerHTML=message;
        document.getElementById("message").style.color="red";
        throw exit;
    }
    // if  no error
    else{
        const table=document.getElementById("table");
        const row=document.createElement("tr");
        const data1=document.createElement("td");
        const data2=document.createElement("td");
        const data3=document.createElement("td");
        data1.innerHTML=arr[arr.length-1].id;
        data2.innerHTML=arr[arr.length-1].name;
        data3.innerHTML=arr[arr.length-1].price;
        row.append(data1);
        row.append(data2);
        row.append(data3);
        table.append(row);
    }
    
    
   


    return false;
}