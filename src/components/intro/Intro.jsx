import './intro.css'

export default function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="assets/index.png" alt="sergio" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hello, I'm Sergio.</h2>
          <h1>I create stuff.</h1>
          <h3>I'm also a: <span>~$ <span>Software Engineer</span></span></h3>
        </div>
      </div>
    </div>
  );
}
