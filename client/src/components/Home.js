import React from 'react';
import Carousal from './Carousal';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate('/womenswear');
  };

  const handleDivClick1 = () => {
    navigate('/menswear');
  };

  const images = [
    'https://zimsonwatches.com/cdn/shop/files/Discover_Breitling_Navitimer_Collections_1.png?v=1694606639&width=1500',
    'https://zimsonwatches.com/cdn/shop/files/Discover_Breitling_Navitimer_Collections_1.png?v=1694606639&width=1500',
  ];

  return (
    <div>
      <Carousal images={images} />
      <div className='d-flex con'>
        <div onClick={handleDivClick} className='content-div' style={{ flex: '0 0 43%', height: '500px', backgroundImage: "url('./assets/pic.webp')" }}>
          <h1>FOR HER</h1>
        </div>
        <div onClick={handleDivClick1} className='content-div' style={{ flex: '0 0 43%', height: '500px', backgroundImage: "url('./assets/iii.webp')" ,marginLeft:"50px"}}>
          <h1>FOR HIM</h1>
        </div>
      </div>

      // quotes
      <div className='wedquotes' style={{ width: '100%', height: '400px', backgroundColor: 'black', alignItems: 'center', marginTop: '20px' }}>
        <h1 >Wear the wedding dress that makes you feel the most like yourself because that’s the person both you and your partner fall in love with.</h1>
      </div>

      // show off girl and boy
      <div className='d-flex con'>
        <div style={{width:"40%",height:"500px",backgroundImage:"url('./assets/showoff3.webp')" ,backgroundPosition: 'center center', backgroundSize: 'cover', marginLeft:"40px"}}> </div>
        <div className='content-div1' style={{width:"55%",height:"500px",backgroundImage:"url('./assets/justshow.webp')" }}> </div>
      </div>

      // related sales based girls
      <div style={{ width: '100%', height: '500px', display: 'flex' ,paddingTop:"20px",marginLeft:"5px"}}>
       
       

       
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          {/* First row with two divs */}
          <div style={{ display: 'flex', flex: '1' }}>
            <div className='groom-friends' style={{ flex: '0 0 60%', backgroundImage:"url('./assets/group-girls.jpg')" ,backgroundPosition: 'center center', backgroundSize: 'cover'}}>
              
              <h4>  brides friends collections </h4> 
            </div>
            <div style={{ flex: '0 0 40%'}}>
              {/* Add your content for the second div in the right side */}
            </div>
          </div>

          {/* Second row with three divs */}
          <div style={{ display: 'flex', flex: '1' }}>
            <div style={{ flex: '0 0 40%', backgroundColor: 'orange' }}>
              {/* Add your content for the third div in the right side */}
            </div>
            <div style={{ flex: '0 0 30%', backgroundColor: 'yellow' }}>
              {/* Add your content for the fourth div in the right side */}
            </div>
            <div style={{ flex: '0 0 30%', backgroundColor: 'purple' }}>
              {/* Add your content for the fifth div in the right side */}
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 30%', height: '100%' ,backgroundImage:"url('./assets/top-trending.webp')",backgroundPosition: 'center center', backgroundSize: 'cover' }}>
          <h4 style={{color:"white"}}>TOP TRENDING COLLECTIONS</h4>
        </div>
      </div>

      //related sales product boys 
       <div style={{ width: '100%', height: '500px', display: 'flex' ,paddingTop:"20px"}}>
        {/* Left side div with 300px width */}
        <div style={{ flex: '0 0 30%', backgroundColor: 'red', height: '100%' }}>
          {/* Add your content for the left side div */}
        </div>

        {/* Right side div with remaining width */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
          {/* First row with two divs */}
          <div style={{ display: 'flex', flex: '1' }}>
            <div style={{ flex: '0 0 60%', backgroundColor: 'blue' }}>
              {/* Add your content for the first div in the right side */}
            </div>
            <div style={{ flex: '0 0 40%', backgroundColor: 'green' }}>
              {/* Add your content for the second div in the right side */}
            </div>
          </div>

          {/* Second row with three divs */}
          <div style={{ display: 'flex', flex: '1' }}>
            <div style={{ flex: '0 0 40%', backgroundColor: 'orange' }}>
              {/* Add your content for the third div in the right side */}
            </div>
            <div style={{ flex: '0 0 30%', backgroundColor: 'yellow' }}>
              {/* Add your content for the fourth div in the right side */}
            </div>
            <div style={{ flex: '0 0 30%', backgroundColor: 'purple' }}>
              {/* Add your content for the fifth div in the right side */}
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      // writings
       <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Container div with specified height and width */}
      <div style={{ width: '80%', height: '80%', border: '2px solid black', display: 'flex', justifyContent: 'space-between' }}>
        {/* Five child divs */}
        <div style={{ width: '18%', height: '100%', backgroundColor: 'red' }}></div>
        <div style={{ width: '18%', height: '100%', backgroundColor: 'green' }}></div>
        <div style={{ width: '18%', height: '100%', backgroundColor: 'blue' }}></div>
        <div style={{ width: '18%', height: '100%', backgroundColor: 'yellow' }}></div>
        <div style={{ width: '18%', height: '100%', backgroundColor: 'orange' }}></div>
      </div>
    </div>
    <div className='d-flex con'>
    <div style={{width:"40%",height:"500px",backgroundImage:"url('./assets/top-trending.webp')",backgroundPosition: 'center center', backgroundSize: 'cover' ,marginLeft:"30px"}}> </div>
    <div style={{width:"55%",height:"500px",backgroundImage:"url('./assets/top-trending.webp')",backgroundPosition: 'center center', backgroundSize: 'cover' ,marginLeft:"30px"}}> </div>
    </div>
    </div>
  );
};

export default Home;







/* /* 
/* Home.css */

/* .wedquotes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: black;
  margin-top: 20px;
} */

/* .wedquotes h1 {
  color: white; /* Adjust text color as needed */
  /* text-align: center; */
/* } */ 
/* .content-div{
  display: flex;
  flex-wrap: row;
  padding: 20px;
  font-size: 24px; /* Set the desired font size */
/* } */ 

/* .d-flex {
  display: flex;
  flex-wrap: row;
/* }  */  
