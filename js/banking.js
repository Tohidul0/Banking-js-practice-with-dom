//-----------deposit part start here------------------------------



document.getElementById('deposit-battu').addEventListener('click', function(){
   var deposit = document.getElementById('deposit-input');
   var deposit = parseFloat(deposit.value);
   var deposit_balance = document.getElementById('deposit-balance');
   var deposit_balance= deposit_balance.innerText;
   var deposit_balance= parseFloat(deposit_balance, 10)
   console.log(deposit_balance);
   var newDepositBal = deposit + deposit_balance;
  // var str = newDepositBal.toString();
   document.getElementById("deposit-balance").innerText = newDepositBal;
   document.getElementById('deposit-input').value = '';


   // ------balance part-----------------------
   var balance = document.getElementById('balance-ammount');
   balance=balance.innerText;
   balance =  parseFloat(balance, 10);
   var newBalance = balance + deposit;
   document.getElementById("balance-ammount").innerText = newBalance;


})

// ----------deposit part end here--------------------------------------------




//--------------withdraw part start here--------------------------------------

document.getElementById('withdraw-battu').addEventListener('click', function(){
   var withdraw = document.getElementById('withdraw-input');
   var withdraw = parseFloat(withdraw.value);
   var withdraw_balance = document.getElementById('withdraw-balance');
   var withdraw_balance= withdraw_balance.innerText;
   var withdraw_balance= parseFloat(withdraw_balance, 10);
   console.log(withdraw_balance);
   var newWepositBal = withdraw + withdraw_balance;
  // var str = newDepositBal.toString();
   document.getElementById("withdraw-balance").innerText = newWepositBal;
   document.getElementById('withdraw-input').value = '';


   // ------balance part-----------------------
   var balance = document.getElementById('balance-ammount');
   balance=balance.innerText;
   balance =  parseFloat(balance, 10);
   var newBalance = balance - withdraw;
   document.getElementById("balance-ammount").innerText = newBalance;
})