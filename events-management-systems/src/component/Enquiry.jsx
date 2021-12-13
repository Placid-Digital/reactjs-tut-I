import React from 'react'

function Enquiry() {
    return (
        <body>
<div class="container">
<div class="row">
<div class="col-md-6">
  <img src="images\demo\gallery\enquiry-png-required-fields-400.png" class="img"/>
  </div>
 <div class="col-md-6">
  <form action="/action_page.php">
	<h3 class="enquiry">Enquiry Now!</h3>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Events</label>
    <select id="country" name="country">
      <option value="mehndi">Makeup Artist</option>
      <option value="canada">Mehndi Artist</option>
      <option value="usa">Photography</option>
	  <option value="usa">Tent work</option>
	  <option value="usa">Flower Decoration</option>
	  <option value="usa">Baloon Decoration</option>
	  <option value="usa">Car Decoration</option>
	  <option value="usa">Catering</option>
    </select>
	<label for="name">Comment here</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
	<input type="submit" value="Submit"/>
  </form>
  </div>
  
    
</div>
</div>

</body>
    )
}

export default Enquiry
