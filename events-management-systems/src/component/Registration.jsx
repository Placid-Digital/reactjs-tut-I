import React from 'react'

function Registration() {
    return (
        <body>
        <div class="login">
        <h2>Register to login</h2>
        
        <form action="/action_page.php" method="post">
          <div class="imgcontainer">
            <img src="images\demo\backgrounds\5-52097_avatar-png-pic-vector-avatar-icon-png-transparent-removebg-preview.png" alt="Avatar" class="avatar"/>
          </div>
        
         <div class="container">
            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter name" name="name" required/>
            <label for="contact"><b>Contact no.</b></label>
            <input type="tel" placeholder="Enter mobile no." name="phone" required/><br/>
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required/>
            <br/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>   
            <hr/>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        
            <button type="submit" class="registerbtn">Sign-up</button>
          </div>
          
          <div class="container signin">
            <p>Already have an account? <a href="#">Sign in</a>.</p>
          </div>
        </form>
        </div>
        </body>
    )
}

export default Registration
