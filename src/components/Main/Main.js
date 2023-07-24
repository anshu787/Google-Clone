/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useState} from 'react'
import Logo from '../../assets/img/icon/logo.png'
import Lens from '../../assets/img/icon/lens.png'
import Voice from '../../assets/img/icon/voice_search.png'
import './Main.css'

const Main = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
      if (query.trim() !== '') {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  return (
 
    <div className='main'>
        <div className='img_logo'>
            <img className='logo' src={Logo} alt='Logo'></img>
        </div>
        <div className='inputbar'>
            <input type='search'   value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."></input>
            <img className='icon' src={Voice} alt='Voice'></img>
            <img className='icon' src={Lens} alt='Lens'></img>
         
        </div>
        <div className='buttons_search'> 
            <ul>
                <li>
                    <a className='bu' onClick={handleSearch}>Google Search</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a className='bu'>I'm Feeling lucky</a>
                </li>
            </ul>
            
    </div>
 <div className='lang'>
            <span className='langn'>Google offered in: </span>
     

            <a className='langa'>   हिन्दी</a> <a className='langa'>   বাংলা</a> <a className='langa'>   తెలుగు</a> <a className='langa'>   मराठी</a> <a className='langa'>   தமிழ்</a> <a className='langa'>   ગુજરાતી</a> <a className='langa'>   ಕನ್ನಡ</a> <a className='langa'>   മലയാളം</a> <a className='langa'>   ਪੰਜਾਬੀ</a>

            </div>
        </div>
  )
}

export default Main