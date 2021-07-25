let priceP2p = document.getElementById("pricep2p")
let feeWithdrawLocal =  document.getElementById("withdrawlc")
let priceBtc = document.getElementById("priceBtc")
let amountBuy = document.getElementById("amountBuy")
let res = document.getElementById("res")

function calcular(){
    if (priceP2p.value.length == 0 || feeWithdrawLocal.value.length == 0 || priceBtc.value.length == 0 || amountBuy.value.length == 0){
        window.alert("Está faltando algum valor!")
    }else {
        let amountBtcBuying = (amountBuy.value*1)/priceP2p.value
        let amountBtcBuyingDec8 = amountBtcBuying.toFixed(8)
        let feeSeller = amountBuy.value-(amountBtcBuyingDec8*priceBtc.value)
        let feeSellerDec8 = feeSeller.toFixed(2)
        let receiveBtcWallet = amountBtcBuyingDec8-feeWithdrawLocal.value
        let receiveBrlWallet = receiveBtcWallet*priceBtc.value

        res.innerHTML = ""
        res.innerHTML += `<p>Comprando ₿ ${amountBtcBuyingDec8}</p>`
        res.innerHTML += `<p>Taxa do Vendedor R$${feeSellerDec8}</p>`
        res.innerHTML += `<p>Recebendo na Wallet ₿ ${receiveBtcWallet}</p>`
        res.innerHTML += `<p>Recebendo na Wallet R$ ${receiveBrlWallet}</p>`


        
    }    
}