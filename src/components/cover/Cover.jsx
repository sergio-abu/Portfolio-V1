import './cover.css'

export default function Cover() {

  return (
    <div className='cover' id='cover'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="assets/cover.png" alt="sergio" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi, I'm Sergio.</h2>
          <h1>I code stuff.</h1>
          <h3>AKA a: <span>~$ <span>Software Engineer</span></span></h3>
        </div>
      </div>
    </div>
  );
}
