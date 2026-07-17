function convertCurrency() {
let base=document.getElementById("from").value;
let  to=document.getElementById('to').value;
let basevalue=document.getElementById('baseamount').value;
let convertedvalue=document.getElementById('converted-amount');
if(base===to)
{
    alert("please select different currency");
}
else if(!(basevalue===""))
{
       const API_KEY = "cur_live_eRMf4C91asHwCpfb2QlX1pW5xiuHHhn21FUIY0bM";

fetch(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${base}&currencies=${to}`)
  .then((res) => res.json())
  .then((data) => {
let con=parseFloat(data.data[to].value);
let b=parseFloat(basevalue);
convertedvalue.value = (con * b).toFixed(2);
let rate=document.querySelector('.rate');
rate.innerHTML = `1 ${base} = ${con.toFixed(4)} ${to}`;
}); 

}
}