import './style/Header.css';
import trollFace from '../img/Troll Face.png'

function Header(props) {
  return (
    <div className="App">
      <div className='header-container flex-row'>
        <div className='logo-container flex-row2'>
          <img src={trollFace} alt='logo memegenerator' className='trollFace-img'></img>
          <h4 className='firstH4-header color-text'>Meme Generator</h4>
        </div>
        <h4 className='second-h4-header color-text'>react course project 3</h4>
      </div>
    </div>
  );
}

export default Header;
