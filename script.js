function compute()
{
    var principal = document.getElementById("principal").value;
    // Validating input amount
    if(principal <= 0){
        alert("Enter a positive number");
        principal.focus();
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Calculating simple interest and total amount
    var interest = principal * years * rate / 100;
    // To decimals round
    interest = +(interest.toFixed(2));

    // Calculating actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    
    // Showing output
    document.getElementById("result").innerHTML=
    "If you deposit <mark>"+principal+"</mark>,\<br\>"+
    "at an interest rate of <mark>"+rate+"%</mark>\<br\>"+
    "You will receive an amount of <mark>"+interest+"</mark>,\<br\>"+
    "in the year <mark>"+year+"</mark>\<br\>";
}

function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
}