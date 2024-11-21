import profilePic from '../images/Profile-and-Signature.png'
// import ExperiencedIcon from '../images/experience.png'
// import FriendlyIcon from '../images/expertise.png'
// import LicensedIcon from '../images/assurance.png'
// import QualityIcon from '../images/high-quality.png'


function WhyChooseUs() {
  return (
    <div className="WhyChooseUs-Container">
      <div className="text-line3"></div>
      <h3 className="whyChooseUs-subHeading">Why Choose us?</h3>
      <h1>Only the Best Quality <br /> Repairs and Renovations</h1>
      <p className="WhyChooseUs-copy">
        Our goal is to provide our customers with highly professional plumbing
        services. <br />We pride ourselves on our reliable and friendly service that
        customers can trust. <br /> Our expert team are on call 24/7 for any plumbing
        emergency.
      </p>
      <img className="profilePic" src={profilePic} alt="Portrait&Signature" />
      <div className="founder-container">
      <div className="divider1"></div>
      <p className='founder-text'>Founder</p>
      </div>
      {/* <div className="WhyChooseUs-Container2">
        <div className="blockOne">
            <img className="ExperiencedIcon" src={ExperiencedIcon} alt="Icon" />
          <h3>Experienced Team</h3>
          <p>20 years in buisness</p>
        </div>
        <div className="blockTwo">
        <img className="FriendlyIcon" src={FriendlyIcon} alt="Icon" />
          <h3>Friendly Experts</h3>
          <p>We make it our goal to provide a great experience</p>
        </div>
        <div className="blockThree">
        <img className="FriendlyIcon" src={LicensedIcon} alt="Icon" />
          <h3>Fully Licensed</h3>
          <p>Our technicians are fully licensed</p>
        </div>
        <div className="blockFour">
        <img className="FriendlyIcon" src={QualityIcon} alt="Icon" />
          <h3>Quality service you can trust</h3>
          <p>We guarantee dependable service with every project.</p>
        </div>
      </div>
      <div className="section-divider"></div> */}
    </div>
  );
}

export default WhyChooseUs;
