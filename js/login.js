// // console.log('button clicking file added')

// // document.getElementById('id').addEventListener('click',function(){

// // })
// // search: form submit reloading the 

// // step1-set event handler
// document.getElementById('btn-login').addEventListener('click', function (event) {
//     // step2- prevent default behaviur(prevent reloading browser)
//     event.preventDefault //vejal to beginner

//     // step3 get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber)
//     // step4-validate phone and pin
//     // this is temporary;you should not use like this
//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('you are log in')
//         // step5- allow user to use the website
//     }
//     else {
//         alert('wrong phone number or pin')
//     }
// })

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();

    //get phonenumber and pin
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    // console.log(phoneNumber,pinNumber);
    // bad way to validate
    if(phoneNumber==='15' && pinNumber==='123'){
        console.log('you are log in')
        window.location.href='/home.html'
    }
    else{
        alert("wrong number or pin")
    }
});