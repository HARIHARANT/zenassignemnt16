let calculatorFn = (symbol)=>{   
    var dispVal = document.getElementById("dispOutput");
    switch(symbol){
        case "=":            
            dispVal.value = eval(dispVal.value);
            break;
        case "C":
            dispVal.value = "";
            break;
        case "←":
            dispVal.value = dispVal.value.substr(0,dispVal.value.length-1);
            break;            
        default:        
            dispVal.value+=symbol;
    }
};