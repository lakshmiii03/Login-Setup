var userData = [
 {
  username: 'wave',
  password: 'abc#123'
 },
 {
  username: 'wave1',
  password: 'abc*123'
 },
 {
  username: 'wave2',
  password: 'abc!123'
 }
]
function getInfo() {
 var username = document.getElementById('username').value;
 var password = document.getElementById('password').value;

 for (i = 0; i < userData.length; i++) {
  if (username == userData[i].username
   && password == userData[i].password) {
   alert(username + ' is Logged In')
   return
  }
 }
 alert('Incorrect Username or Password')
}