import React from 'react'
import './contact.css'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div className='contactPage'>
      <h1>GET HELP</h1>

      <div className="contactLogo">
      <h2>CONTACT US</h2>
      <hr />
      </div>

      <div className="contactUsInfo">
        <div className="contact-Number">
          <img src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/phone.png" alt="" />
          <h3>PRODUCTS & ORDERS</h3>
          <h3>1-844-430-6453</h3>
          <h3>7am - 2am EDT</h3>
          <h3>7 Days a week</h3> 
        </div>

        <div className="contact-Chat">
          <Link target='_blank' to={'https://nikeconsumerservices.my.salesforce-sites.com/LiveChat?bu=Commerce%20-%20Global%20Store&country=CA&language=en&referenceUrl=https://www.nike.com/ca/en/help/#contact'}><img src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/chat.png" alt="" /></Link>
          <h3>Chat with us</h3>
          <h3>24 hours a day</h3>
          <h3>7 days a week</h3>
        </div>

        <div className="contact-Enquiry">
          <img src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/phone.png" alt="" />
          <h3>COMPANY INFO & ENQUIRIES</h3>
          <h3>1-844-430-6453</h3>
          <h3>10am - 7am EDT/EST</h3>
          <h3>Monday-Friday</h3> 
        </div>

        <div className="contact-Message">
          <Link target='_blank' to={'https://twitter.com/NikeService'}><img src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/swoosh.png" alt="" /></Link>
          <h3>NRC & NTC</h3>
          <h3>Message Us</h3>
          <h3>7 days a week</h3>
        </div>

        <div className="contact-Locator">
          <Link target='_blank' to={'https://www.nike.com/ca/retail'}><img src="https://www.nike.com/assets/experience/dotcom-member/gethelpfe-webshell/_next/static/images/store.png" alt="" /></Link>
          <h3>STORE LOCATOR</h3>
          <h3>Find Nike retail Stores near you</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact