import { useState } from 'react'
import Heading from '../Components/Header';
import Hero from '../Components/Hero';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';

function App() {

  return (
    <div >
      
      
        <Parallax pages={2 }>

        <ParallaxLayer 
            className=''
            style={{
                      backgroundImage: `url('https://www.pngall.com/wp-content/uploads/4/Falling-Money-PNG-HD-Image.png')`,
                      // backgroundSize: 'cover',
                      // filter: blur(2px)
                      
                  }}
            // speed={0.5}

            factor={1.5}
            
            >
                  <Hero/>
          </ParallaxLayer>

          




        <ParallaxLayer 
                speed={1} 
                style={{
                backgroundImage: `url('https://freepngimg.com/thumb/money/140197-money-falling-png-free-photo.png')`,
                backgroundSize: 'cover'
                }}
                // factor={2}
                offset={1}
                // factor={4}
        >

      <div className=" px-6 py-10 sm:py-10">
        <div id="Hero_Section" className="mx-auto max-w-7xl sm:px-10  lg:px-8 py-10  border-8 border-black rounded bg-white">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4 ">
              <dt className="text-base leading-7 text-gray-600">
                Transactions every 24 hours
              </dt> 
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                44 million
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                Assets under holding
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                $119 trillion
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">
                New users annually
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                46,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
            <h2 className='text-9xl  text-center my-96'>Maintain your stock portfolio like never before</h2>
            {/* <Hero/> */}
          </ParallaxLayer>

          {/* <ParallaxLayer sticky={{start:0.1, end:2}}
          style={{
                      backgroundImage: `url('https://i.makeagif.com/media/10-12-2021/LIxUGz.gif')`,
                      backgroundSize: 'cover'
                      
                  }}>

          </ParallaxLayer> */}

          

          
            
          
            
        </Parallax>
      
    </div>
  )
}

export default App
