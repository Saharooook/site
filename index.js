// Import the functions you need from the SDKs you need




var num = 5;

$(document).on('click','#button',function(){
var pochta = document.getElementById('email').value;
  num = Math.floor(Math.random() * 10000000) + 1000000
  let code = Base64.encode(num);
$.ajax({
  
  url: "mail.php",
  data: {
    email: pochta,
    code: code
  },
  type: 'POST',
  dataType: 'json',
  success: function(){
  alert('ok');
   },
    error: function(){
	console.log('ERROR');
    }
});

})


function abc(){
  var pass = document.getElementById('password').value;
  let ansv = Base64.decode(pass);
if(ansv==num){
    window.location.href = 'main/index.html'
}
}