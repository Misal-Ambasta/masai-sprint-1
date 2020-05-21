
function reset()
{

    

    var input1 = document.getElementsByTagName("input")

    console.log(input1)
    for(var i=0; i<input1.length; i++)
    {
       input1[i].value=""

        
    }

    var reset_result = document.getElementById("result")

    reset_result.innerHTML=""

}
function submit()
{
    var salary = parseInt(document.getElementById('salary').value)

    var otherincome = parseInt(document.getElementById('otherincome').value)

    var rent = parseInt(document.getElementById('rent').value)

    var food = parseInt(document.getElementById('food').value)

    var grocery = parseInt(document.getElementById('grocery').value)

    var transport = parseInt(document.getElementById('transport').value)

    var health = parseInt(document.getElementById('health').value)

    var shopping = parseInt(document.getElementById('shopping').value)

    var otherexpenses = parseInt(document.getElementById('otherexpenses').value)

    var total_income = 0, total_expenses = 0;

    total_income = salary+otherincome;

    total_expenses = rent+food+grocery+transport+health+shopping+otherexpenses;

    result(total_income, total_expenses)
    balance(total_income, total_expenses)
    
}


function result(total_income,total_expenses)
{
    var total_earned = document.createElement("h4")

    var total_spent = document.createElement("h4")

    total_earned.textContent="Total Earned : Rs "+total_income;

    total_spent.textContent="Total Spent : Rs "+total_expenses;

    var ref = document.getElementById("result")

    ref.append(total_earned,total_spent)

    
}


function balance(total_income,total_expenses){

    var balance_h = document.createElement("h4")
    var balance = 0;

    balance = Number(total_income)-Number(total_expenses);

    balance_h.textContent= "Your Balance is : Rs "+balance;
    if(balance<=1000)
    {
        alert("You have very less saving !")
    }
    else if(balance>1000){
        alert("!! Keep Saving !!")
    }
    else if(balance="NaN"){
        alert("Fill all boxes.")
    }
    else if(balance<0){
        alert("You are Spending too much money !")
    }

    var ref = document.getElementById("result")

    ref.append(balance_h)

}


function mouseOver()
    {   
        
        
        document.getElementById("calculate").style.backgroundColor = 'palegreen';

        
    }

    document.getElementById("calculate").addEventListener("mouseover", mouseOver);

    


    function mouseout()
    {
        document.getElementById("calculate").style.backgroundColor = 'white'

        
    }

    document.getElementById("calculate").addEventListener("mouseout", mouseout)

   
