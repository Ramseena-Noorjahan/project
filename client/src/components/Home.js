import React from 'react';
import Carousal from './Carousal';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const Home = () => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate('/womenswear');
  };

  const handleDivClick1 = () => {
    navigate('/menswear');
  };

  // const images = [
  //   'https://zimsonwatches.com/cdn/shop/files/Discover_Breitling_Navitimer_Collections_1.png?v=1694606639&width=1500',
  //   'https://zimsonwatches.com/cdn/shop/files/Discover_Breitling_Navitimer_Collections_1.png?v=1694606639&width=1500',
  // ];

  return (
    <div className='container-fluid'>
      <Carousal  />
      <div className='d-flex con'>
        <div onClick={handleDivClick} className='content-div' style={{ flex: '0 0 43%', height: '500px', backgroundImage: "url('./assets/iii.webp')" }}>
          <h1>FOR HER</h1>
        </div>
        <div onClick={handleDivClick1} className='content-div' style={{ flex: '0 0 43%', height: '500px', backgroundImage: "url('./assets/groom.jpg')" ,backgroundPosition: 'center center',backgroundSize:'contain'}}>
          <h1>FOR HIM</h1>
        </div>
      </div>

      // quotes
      <div className='wedquotes' style={{ width: '100%', height: '400px', backgroundColor: '#678388',borderRadius:"3px", alignItems: 'center', marginTop: '20px' }}>
        <h1 className='animate__animated animate__fadeIn animate__infinite'>"𝒲𝑒𝒶𝓇 𝓉𝒽𝑒 𝓌𝑒𝒹𝒹𝒾𝓃𝑔 𝒹𝓇𝑒𝓈𝓈 𝓉𝒽𝒶𝓉 𝓂𝒶𝓀𝑒𝓈 𝓎𝑜𝓊 𝒻𝑒𝑒𝓁 𝓉𝒽𝑒 𝓂𝑜𝓈𝓉 𝓁𝒾𝓀𝑒 𝓎𝑜𝓊𝓇𝓈𝑒𝓁𝒻 𝒷𝑒𝒸𝒶𝓊𝓈𝑒 𝓉𝒽𝒶𝓉’𝓈 𝓉𝒽𝑒 𝓅𝑒𝓇𝓈𝑜𝓃 𝒷𝑜𝓉𝒽 𝓎𝑜𝓊 𝒶𝓃𝒹 𝓎𝑜𝓊𝓇 𝓅𝒶𝓇𝓉𝓃𝑒𝓇 𝒻𝒶𝓁𝓁 𝒾𝓃 𝓁𝑜𝓋𝑒 𝓌𝒾𝓉𝒽."</h1>
      </div>

      // show off girl and boy
    <div className='boddy'>
    <div>
    <img className='img1' src='./assets/justshow.webp' alt='Image 1' />
  </div>
  <div>
    <img className='img1' src='./assets/showoff3.webp' alt='Image 1' />
  </div>
     
      </div>  

      // related sales based girls
      <div className="container">
  <div className="box">
    <div className="imgBx" style={{backgroundImage:'url("./assets/relatedsales.webp")',backgroundPosition: 'center center', backgroundSize: 'cover'}}>
    </div>
    <div className="content">
      <div>
        <h2>Top rated Collections</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx" style={{backgroundImage:'url("./assets/relatedsales1.webp")',backgroundPosition: 'center center', backgroundSize: 'cover'}}>
     
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx" style={{backgroundImage:'url("./assets/relatedsales2.webp")',backgroundPosition: 'center center', backgroundSize: 'cover'}}>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
 
  
</div>
  
  //related sales based boys
<div className="container">
  <div className="box">
    <div className="imgBx" style={{backgroundImage:'url("./assets/relatedsales.webp")',backgroundPosition: 'center center', backgroundSize: 'cover'}}>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx" style={{backgroundImage:'url("./assets/relatedsales1.webp")',backgroundPosition: 'center center', backgroundSize: 'cover'}}>
     
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
  <div className="box">
    <div className="imgBx" style={{backgroundImage:'url("./assets/relatedsales2.webp")',backgroundPosition: 'center center', backgroundSize: 'cover'}}>
    </div>
    <div className="content">
      <div>
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
        </p>
      </div>
    </div>
  </div>
 
  
</div>

    
    
    
    <div className='d-flex con'>
    <div style={{width:"40%",height:"500px",backgroundImage:"url('./assets/top-trending.webp')",backgroundPosition: 'center center', backgroundSize: 'cover' ,marginLeft:"30px"}}> </div>
    <div style={{width:"40%",height:"500px",backgroundImage:"url('./assets/redgroom.jpg')",backgroundPosition: 'center center', backgroundSize: 'cover' ,marginLeft:"30px"}}> </div>
    </div>
    </div>
  );
};

export default Home;










