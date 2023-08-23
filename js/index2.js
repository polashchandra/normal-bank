document.getElementById('withdraw-btn').addEventListener('click',function(){
    const balanceflid=document.getElementById('withdraw-input');
    const balanceInnertext=balanceflid.value
    const balanceInt=parseFloat(balanceInnertext);

    const withdrawflid=document.getElementById('withdraw-price');
    const withdrawInnerText=withdrawflid.innerText
    const withdraInt=parseFloat(withdrawInnerText)
    //submition
    const totalWithDraw= withdraInt+balanceInt
    withdrawflid.innerText=totalWithDraw
    //
    const totalBalnce=document.getElementById('balance-price');
    const totalInnertext=totalBalnce.innerText
    const totalBalnceInt=parseFloat(totalInnertext)

    //sumbition
    const subtotal=totalBalnceInt-balanceInt
    totalBalnce.innerText=subtotal
    balanceflid.value=''
})