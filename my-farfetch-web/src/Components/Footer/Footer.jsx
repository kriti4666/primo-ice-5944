 
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
          <Text fontSize="lg">Product</Text>
          <p>Product tour</p>
          <p>Pricing</p>
          <p>Template</p>
          <p>Apps & Integrations</p>
          <p>Task management</p>
          <p>Gantt charts</p>
          <p>Wrike Status</p>
          <p>CA Notice Collection</p>
          <p>API</p>
        </div>
        <div>
          <Text fontSize="lg">Solution</Text>
          <p>All Teams</p>
          <p>Marketing</p>
          <p>Creavtice</p>
          <p>Project Management</p>
          <p>Product Management</p>
          <p>Business Operation</p>
          <p>Professional Services</p>
          <p>Students</p>
        </div>
        <div>
          <Text fontSize="lg">Resources</Text>
          <p>Help Center</p>
          <p>Community</p>
          <p>Webinars</p>
          <p>Intractive Traning</p>
          <p>Support</p>
          <p>Google project management tools</p>
          
        </div>
        <div>
        <Text fontSize="lg">Company</Text>
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
        <div>
           <Text fontSize="lg">Guides</Text>
            <div className='subpart'>
           <div>
              <p>Project Management</p>
              <p>Karban Guide</p>
              <p>Show more</p>
           </div>
           <div>
           
           <p>Professional services</p>
           <p>Agile Guide</p>
           </div>


         </div>
          <br />
          
         <div>
            <Text fontSize="20px">Latest in Blog</Text>
            <p>How Flexible Schedules Help Wrike's ...</p>
            <p>How to Plan an Event: Best Practice Guide</p>
            <p>The Ultimate Guide to Marketing..</p>
            <p>Go-to-Market Strategy Examples You Need to Know</p>
            <p>How Wrike Solutions Manager Valerio...</p>
            <p>The Weeknd More Popular on Tuesdays</p>
            <p>How to Action Items in Meeting Minutes</p>
            </div>
         
        </div>
       
    </div>

    <hr />
    <div >

        <div >

        <Link to="https://twitter.com/wrike"><i class="fa-brands fa-twitter"></i></Link>
        <Link to="https://www.facebook.com/Wrike"><i class="fa-brands fa-facebook"></i></Link>
        <Link to="https://www.linkedin.com/company/wrike"><i class="fa-brands fa-youtube"></i></Link>
        <Link to="https://www.youtube.com/user/WrikeTeam"><i class="fa-brands fa-linkedin-in"></i></Link>
        <Link to="https://www.instagram.com/wriketeam/"><i class="fa-brands fa-instagram"></i></Link>
        
        </div>
        
    </div>
    </div>
  )
}

export default Footer
