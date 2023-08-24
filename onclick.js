function inputflid(mainInput){
 const inputedMainFld=document.getElementById(mainInput);
 const inputInnerText=inputedMainFld.value;
 const inputeparseflud=parseFloat(inputInnerText)
 inputedMainFld.value="";
 return inputeparseflud;
}
function fixeddbanlanceflid(maintotal){
    const fixedbance=document.getElementById(maintotal);
    const ficedInnertext=fixedbance.innerText;
    const fixedpaseflut=parseFloat(ficedInnertext);
    return fixedpaseflut;
}
function setvalues(elementId,newvalue){
    const setelement=document.getElementById(elementId);
    setelement.innerText=newvalue;
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    const newInputdeposit=inputflid('depsit-inpout');
    const newDepositTotal=fixeddbanlanceflid('deposit-h1');

    const TotaldepostPrice=newInputdeposit+newDepositTotal;
    setvalues('deposit-h1',TotaldepostPrice)


    const balamncesum=fixeddbanlanceflid('balance-price')
    const sumblace=balamncesum + newInputdeposit;
    setvalues('balance-price',sumblace)
})
