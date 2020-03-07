//login form Area Dynamic 
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transitionArea = document.getElementById("transition-area");
    transitionArea.style.display = "block";
})

//Deposit Area with Total Balance Dynamic
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click",function(){
    //Deposit Input button
    const depositAmountId = document.getElementById("depositAmountId").value;//input
    const depositNumber = parseFloat(depositAmountId);

    //add with balance
    const currantDepositId = document.getElementById("currantDepositId").innerText;//span
    const currentdepositNumber = parseFloat(currantDepositId);
    //total deposit
    const totaldeposit = depositNumber + currentdepositNumber;
    document.getElementById("currantDepositId").innerText = totaldeposit;

    //Total balance with Current Deposit
    const balanceAmount = document.getElementById("balanceAmount").innerText;
    const balanceNumber = parseFloat(balanceAmount);
    //add with current balance
    const totalBalance =  balanceNumber + depositNumber;
    document.getElementById("balanceAmount").innerText = totalBalance;


    document.getElementById("depositAmountId").value = "";

})

//Withdraw money with reduce or Total balance 
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function(){
    //Withdraw Button
    const withdrawAmount = document.getElementById("withdrawAmount").value;//input
    const withdrawNumber = parseFloat(withdrawAmount);
    //add withdraw current money
    const withdrawBtnAmount = document.getElementById("withdrawBtnAmount").innerText;//span
    const withdrawMoney = parseFloat(withdrawBtnAmount);
    //total withdraw
    const totalWithdraw = withdrawNumber +  withdrawMoney;
    document.getElementById("withdrawBtnAmount").innerText = totalWithdraw;


    //add with total balance
    const reduceBalance = document.getElementById("balanceAmount").innerText;//span
    const reduceNumber = parseFloat(reduceBalance);
    const reduceTotalBalance = reduceNumber - withdrawNumber;
    document.getElementById("balanceAmount").innerText = reduceTotalBalance;

    document.getElementById("withdrawAmount").value ="";
})

