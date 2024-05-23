document.addEventListener('DOMContentLoaded', () => {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  
  const amountVal = document.getElementById('amount-val');
  const interestVal = document.getElementById('interest-val');
  const yearsVal = document.getElementById('years-val');

  const updateValues = () => {
      amountVal.textContent = amount.value;
      interestVal.textContent = interest.value;
      yearsVal.textContent = years.value;
      calculateResults();
  }

  const calculateResults = () => {
      const principal = parseFloat(amount.value);
      const monthlyInterest = parseFloat(interest.value * 0.01) / 12;
      const totalPayments = parseInt(years.value);

      const x = Math.pow(1 + monthlyInterest, totalPayments); //ayliq faizi toplam odeme sayisinin quvvetine yukseldirik
      const monthlyPayment = (principal * x * monthlyInterest) / (x - 1);//

      if (isFinite(monthlyPayment)) {
          document.getElementById('monthly-payment').innerText = monthlyPayment.toFixed(2); //yuvarlaqlasdirma
          document.getElementById('total-payment').innerText = (monthlyPayment * totalPayments).toFixed(2);
      } else {
          document.getElementById('monthly-payment').innerText = '0';
          document.getElementById('total-payment').innerText = '0';
      }
  }


  amount.addEventListener('input', updateValues);
  interest.addEventListener('input', updateValues);
  years.addEventListener('input', updateValues);

  updateValues();
});