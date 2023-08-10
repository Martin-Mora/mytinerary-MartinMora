import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='adress'>
         <h5>742 Evergreen Terrace</h5>
      <h5 className='location'><i className='bx bx-current-location' ></i> Location</h5>
      </div>

      <div className='social'>
      <h5>Follow us on our socials links</h5>
        <div className='social-media'>
          <i className='bx bxl-facebook-square'></i>
          <i className='bx bxl-instagram-alt' ></i>
          <i className='bx bxl-twitter' ></i>
        </div>
      </div>

    </footer>
  )
}

export default Footer