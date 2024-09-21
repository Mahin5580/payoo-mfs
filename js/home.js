// add money to the account
// s1 add event handler
// prevent page reload after form submit
// s2: get money to be added to the account balance

// step 1: add an event handler button to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload
    event.preventDefault();

    // step2 : get money to be added to the account balance
    const addMoneyInput=document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    // get the pin number provided
    const pinNumberInput=document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)


})