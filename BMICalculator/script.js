const form = document.querySelector("form")

form.addEventListener('submit' , function(e) {
   e.preventDefault();

  let height = parseInt(document.querySelector("#height").value)
  let weight = parseInt(document.querySelector("#weight").value)
  let results = document.querySelector(".results")

  if(height == "" || height<0 || isNaN(height) ){
    results.innerHTML=`Please give a valid height ${height}`
  }else if(weight =="" || weight <0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`
  }else{
    let bmi = (weight / ((height/100) * (height/100))).toFixed(2)
    results.innerHTML=`Your BMI is ${bmi}`
  }
})