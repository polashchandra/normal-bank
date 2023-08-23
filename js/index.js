document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositstoreage=document.getElementById('depsit-inpout');
    const depositInnerText=depositstoreage.value;
    const depositInt=parseFloat(depositInnerText)
    depositstoreage.value='';
    const depositMain=document.getElementById('deposit-h1');
    const depositMainText=depositMain.innerText;
    const depositMainInt=parseFloat(depositMainText);

    const depositTotal=depositInt+depositMainInt
    depositMain.innerText=depositTotal;
    
    const balanceCapture=document.getElementById('balance-price');
    const balanceInnertext=balanceCapture.innerText;
    const balanceInt=parseFloat(balanceInnertext)
    //summation
    const balanceTotal=balanceInt+depositInt
    balanceCapture.innerText=balanceTotal;
})