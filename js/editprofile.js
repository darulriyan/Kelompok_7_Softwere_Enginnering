function previewImage(event) {
  var input = event.target;
  var reader = new FileReader();
  
  reader.onload = function() {
    var dataURL = reader.result;
    var image = document.getElementById('profilePicture');
    image.src = dataURL;
  };
  
  reader.readAsDataURL(input.files[0]);
}

const username = document.getElementById('username');
const country = document.getElementById('country');
const email = document.getElementById('email');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;


form.addEventListener('submit', (e) => {
  let messages = []

  if (phone.value !== phoneRegex ){
      messages.push('Phone number should contain only digits and optional dashes or spaces')
  }

  if (phone.value !== confirmpassword.value ){
    messages.push('Phone number should contain only digits and optional dashes or spaces')
}
  if (email.value !== emailRegex){
    messages.push('Email is not Valid')
  }

    if(messages.lenght>0){
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
});


