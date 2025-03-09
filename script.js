function calculateEMI() {
    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value;
    let loanTenure = document.getElementById("loanTenure").value;

    if (loanAmount === "" || interestRate === "" || loanTenure === "") {
        document.getElementById("result").innerHTML = "Please fill in all fields!";
        return;
    }

    // Convert interest rate from annual to monthly
    let monthlyInterest = (interestRate / 100) / 12;
    let months = loanTenure;

    // EMI Calculation
    let emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months)) / 
              (Math.pow(1 + monthlyInterest, months) - 1);

    // Round to 2 decimal places
    emi = emi.toFixed(2);

    document.getElementById("result").innerHTML = `Your EMI: ₹${emi} per month`;
}
