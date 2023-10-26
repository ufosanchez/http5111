//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK

var message = "Thank you, your current balance is now $";
//1. Create the object structure first.

var bank = {
    //2. Add the required properties to your object.
    lastName: "Sánchez",
    branchNumber: 123456789,
    accountBalance: 500.25,
    interestRate: 1.03,

    multipleAccounts: true,

    //3. Add your first method and test it. Remember, the methods will change the properties of the object.
    makeDeposit: function(deposite){
        bank.accountBalance = bank.accountBalance + deposite;
        return message + bank.accountBalance.toFixed(2);
    },
    //4. Add your second method and test it.
    makeWithdrawal: function(withdraw){
        bank.accountBalance = bank.accountBalance - withdraw;
        return message + bank.accountBalance.toFixed(2);
    },

    addInterest: function(){
        var temp = bank.interestRate
        if(bank.multipleAccounts === true){
            temp = temp + 0.005;
        } else {
            temp = bank.interestRate;
        }
        bank.accountBalance = bank.accountBalance * temp;
        return message + bank.accountBalance.toFixed(2);
    }
}

//5. Create the required output to complete steps 6-10 of the lab.
console.log("Starting balance: " + bank.accountBalance);
console.log(bank.makeDeposit(200));
console.log(bank.makeWithdrawal(75));

//6. Once everything is working, tackle the Extra Challenge!
console.log(bank.addInterest());

