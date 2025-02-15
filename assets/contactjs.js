// Klik ganti foto
function changeProfilePicture(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var dataURL = reader.result;
    var profilePicture = document.getElementById('profilePicture');
    profilePicture.style.backgroundImage = "url('" + dataURL + "')";
  };
  reader.readAsDataURL(input.files[0]);
}

var updateBtn = document.getElementById('update-btn');

updateBtn.addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var country = document.getElementById('country').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
});

