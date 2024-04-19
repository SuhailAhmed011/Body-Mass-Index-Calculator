const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // here we stop the default action of the form

  const height = parseInt(document.querySelector("#height").value); // here we use parse int to convert a string value integer
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");


  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid number`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid number`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span> ${BMI}</span>`;

    if(BMI < 18.6){
        message.innerHTML = `<span>${"your weight is under weight"}</span>`
      }else if(BMI > 18.6 && BMI < 24.9){
        message.innerHTML = `<span>${"your weight is Normal"}</span>`
      }else if(BMI > 24.9){
        message.innerHTML = `<span>${"your weight overwight"}</span>`
      }

    }
    
  


});
