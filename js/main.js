        //login button set with javascript
        const btnLogin = document.getElementById("login");
        btnLogin.addEventListener("click",function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
            const transitionArea = document.getElementById("transition-area");
            transitionArea.style.display = "block";
        })
        //deposit set with javascript
        const depositAmount = document.getElementById("depositBtn");
        depositAmount.addEventListener("click", function(){
            const depositNumber = document.getElementById("depositAmountId").value;
            const depositAccurateNumber = parseFloat(depositNumber);

            const currantDeposit = document.getElementById("currantDepositId").innerText;
            const currentDepositNumber = parseFloat(currantDeposit);
            const totalDeposit = currentDepositNumber + depositAccurateNumber;
            document.getElementById("currantDepositId").innerText = totalDeposit;
            document.getElementById("depositAmountId").value = "";
        })