import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    const handleContact = (e) =>{
        e.preventDefault()
        navigate('/contact')
      }
  return (
    <div className='footer'>
        <footer>
            <h2>For help, contact us at:</h2>
            <button onClick={handleContact}>Contact Us</button>
        </footer>

        <div className="copyright">
          <p>© 2023 ShoeBazaar is a online official jordan retail store.</p>
        </div>
    </div>
  )
}

export default Footer