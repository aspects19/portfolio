import scrollToTarget from "../Shared/scrollToTarget";

function About() {
  const IconSize = 55;

  return (
    <div className='about'id='about'>
      <div className='section-2'>
          <div className='info'>
            <div className='my-info'>
              <span className='about-me-text'> I am Jeffarson Amenya, a junior React developer from Kenya passionate in Javascript language. I am also a student persuing IT. </span>
              <div className='about-buttons'>
                <button className='cv-download-btn'>Download CV</button>
                <button onClick={()=>scrollToTarget('contacts')} className='hire-me-btn'>Hire Me</button> 
              </div>
            </div>
                       
              
          </div>
      </div> 
      <div className='section-3'>
        <h1>Languages and Technologies</h1>
        <div className='achievements'>
          <div className='achievement'>
            <LinuxOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <DebianOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <VscodeOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <PythonOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <JavascriptPlain size={IconSize}/>
          </div>
          <div className='achievement'>
            <ReactOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <Html5Original size={IconSize}/>
          </div>
          <div className='achievement'>
            <Css3Original size={IconSize}/>
          </div>
          <div className='achievement'>
            <BootstrapOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <LaravelOriginal size={IconSize}/>
          </div>
          <div className='achievement'>
            <PhpOriginal size={IconSize}/>
          </div>
        </div>  
      </div> 
    </div>
  )
}

export default About