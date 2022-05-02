let step = 0;

const b= document.getElementsByTagName('form');
let forms = Array.prototype.slice.call( b, 0 );

//document.getElementById("myForm").querySelectorAll("[required]").forEach(function(i) 


$('.nextbutton').click(function() {

  if (step === 1) {
    const password= forms[step].querySelector('input[name=password]');
    const confirm= forms[step].querySelector('input[name=confirm]');
    function passwordChecker () {
      if (confirm.value === password.value) {
        confirm.setCustomValidity('');
      } 
      
      
      else {
        confirm.setCustomValidity('Passwords do not match');
        alert('Passwords do not match')
        return
    }}

    passwordChecker();
    step++;

    forms[step].style.display='block';
    var cloneArray = forms.slice();
    cloneArray.splice(step,1);
    for (let i=0; cloneArray.length; i++) {
    cloneArray[i].style.display = 'none';}
  }

  else {
    step++;

    forms[step].style.display='block';
    var cloneArray = forms.slice();
    cloneArray.splice(step,1);
    for (let i=0; cloneArray.length; i++) {
        cloneArray[i].style.display = 'none';
    
  }}
});




$('.previousbutton').click(function() {
    step--;
    forms[step].style.display='block';
    var cloneArray = forms.slice();
    cloneArray.splice(step,1);
    for (let i=0; cloneArray.length; i++) {
        cloneArray[i].style.display = 'none';
    }
  });