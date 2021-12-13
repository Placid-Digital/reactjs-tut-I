import React from 'react'

function Login() {
    return (
        <body>
<div class="login">
<h2>Login</h2>

<form action="/action_page.php" method="post">
  <div class="imgcontainer">
    <img src="images\demo\backgrounds\5-52097_avatar-png-pic-vector-avatar-icon-png-transparent-removebg-preview.png" alt="Avatar" class="avatar"/>
  </div>

  <div class="container">
    <label for="email"><b>Email-id</b></label>
    <input type="email" placeholder="Enter email" name="email" required/>
<br/>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit">Sign-in</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>
  <div class="container" style={{backgroundcolor:'#f1f1f1'}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
</div>
</body>
    )
}

export default Login
