const addToInput=(value)=>{
    document.getElementById("display").value+=value;
}

const clearall=()=>{
    document.getElementById("display").value=" ";
}

const delete_value=()=>{
    let display=document.getElementById("display").value;
    document.getElementById("display").value=display.slice(0,-1);
}

const calculate=()=>{
    let expression=document.getElementById("display").value;
    let result=0;
    try{
        result=new Function ('return ' + expression)();
        document.getElementById("display").value=result;
    }
    catch(error){
        document.getElementById("display").value="Syntax Error";
    }
}