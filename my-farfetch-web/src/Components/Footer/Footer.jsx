 
import style from './Footer.css'
import React from 'react'
import {  Link, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <div className='pfooter'>
      <div className='tfooter'>
          <Text fontSize="30px" fontWeight="Bold">SIGN UP AND GET 10% OFF</Text>
          <Text fontSize="15px">Sign up for promotions, tailored new arrivals, stock <br/> updates and more – straight to your inbox</Text>
          <input type="radio" name='women' />
          <label>Womenswear</label>
          
          <input type="radio" name='men' />
          <label>Menswear</label>
        
          <div className="select">
            <Text>GET UPDATES BY</Text>
            
            <input type="checkbox" name='email' />
              <label>Email</label>
            <br/>

              <input type="text" placeholder="Enter your business email" />
              <br/>
              <input type="checkbox" name='sms' />
              <label>SMS</label>
              <br/>
              <button>Sign Up</button>
          </div>
          

          <p>By signing up, you agree to our Privacy Policy.<br/> Unsubscribe anytime at the bottom of our emails.</p>
      </div>
      
    <div className='footer'>
     
        <div className='fchild1'>
          <Text fontSize="lg">FARFETCH APP</Text>
          <br/>
          <p>Farfetch App for iOS and Android</p>
          
        </div>
        <div>
          <Text fontSize="lg">DESTINATION/REGION, CURRENCY AND <br/> LANGUAGE</Text>
          <br/>
          <div className='ind-img'>
          <img width='5%' src="https://o.remove.bg/downloads/5d50bf29-3a8c-44eb-a10b-cb78972ce88c/Indian_Flag_Classic_Round_Sticker___Zazzle-removebg-preview.png" alt="img"/>
          <Text>India, USD $</Text>
          </div>
          <div className='logo'>

            <div><Link to="https://twitter.com/farfetch"><i class="fa-brands fa-twitter"></i></Link></div>
            <div><Link to="https://www.facebook.com/farfetch"><i class="fa-brands fa-facebook"></i></Link></div>
           <div><Link to="https://www.linkedin.com/company/farfetch"><i class="fa-brands fa-youtube"></i></Link></div>
            <div><Link to="https://www.youtube.com/user/farfetchdotcom"><i class="fa-brands fa-linkedin-in"></i></Link></div>
            <div><Link to="https://www.instagram.com/farfetch/"><i class="fa-brands fa-instagram"></i></Link></div>
            
          </div>
          
        </div>
        <div>
          <Text fontSize="lg">CUSTOMER <br/> SERVICE</Text>
          <br/>
          <p>Help Center</p>
          <p>Orders & delivery</p>
          <p>Payment & pricing</p>
          <p>Returns & refunds</p>
          <p>Promotion terms & <br/> conditions</p>
          <p>Privacy policy</p>
          <p>Accessibility</p>

        </div>
        <div>
        <Text fontSize="lg">ABOUT FARFETCH</Text>
        <br/>
        <p>About Us</p>
        <p>Careers</p>
        <p>Our Customers</p>
        <p>Blogs</p>
        <p>Events</p>
        <p>Newsrooms</p>
        <p>Partner Program</p>
        <p>User Conference</p>
        <p>Contact Us</p>
        </div>
        
       
    </div>

    </div>
  )
}

export default Footer
