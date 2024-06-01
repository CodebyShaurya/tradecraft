import { useState } from 'react'
import Heading from '../Components/Header';
import Hero from '../Components/Hero';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';

function App() {

  return (
    <div >
      
      
        <Parallax pages={3}>

        <ParallaxLayer 
            className=''
            style={{
                      backgroundImage: `url('https://freepngimg.com/thumb/money/140197-money-falling-png-free-photo.png')`,
                      // backgroundSize: 'cover',https://www.pngall.com/wp-content/uploads/4/Falling-Money-PNG-HD-Image.png
                      backgroundSize: 'cover'
                      // filter: blur(2px)
                      
                  }}
            // speed={0.5}

            factor={2}
            
            >

                  <Heading/>
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
                factor={3.5}
        >

    <div className=" px-6  mt-96 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl sm:px-10  lg:px-8 py-10  border-8 border-black rounded bg-white">
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
          
            {/* <Hero/> */}
          </ParallaxLayer>

          <ParallaxLayer 
                  // sticky={{start:0.1, end:2}}
                  speed={2}
                  offset={2}
                  style={{
                      backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/028/074/199/non_2x/3d-rendering-of-a-lot-of-stacks-of-us-dollar-notes-spread-at-the-on-bottom-of-screen-3d-rendering-png.png')`,
                      backgroundSize: 'cover'
                      
                        }}>

                <div className="relative overflow-hidden ">
                      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                          <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                              Summer styles are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                              if you live or die.
                            </p>
                          </div>
                          <div>
                            <div className="mt-10">
                              {/* Decorative image grid */}
                              <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                              >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                  <div className="flex items-center space-x-6 lg:space-x-8">
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                        <img
                                          src="https://thedailyguardian.com/wp-content/uploads/2024/05/360_F_568852772_P4EmbKP8YPargzsPzNQAxUR1JIHFhMlt.jpg"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <img
                                          src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <img
                                          src="https://www.livemint.com/lm-img/img/2023/10/01/1600x900/Sectoral_Index_change_1696146869322_1696146869610.jpg"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <img
                                          src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-110563715/110563715.jpg"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <img
                                          src="https://img.etimg.com/thumb/height-450,width-600,resizemode-4,imgsize-12974,msid-101651616/stock-market-highlights-market-breadth-indicates-a-strong-bullish-bias-what-traders-should-do-on-wednesday.jpg"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                    </div>
                                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <img
                                          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202111/stock-market-1-sixteen_nine.jpg?size=948:533"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                                        <img
                                          src="https://jupiter.money/blog/wp-content/uploads/2022/08/19.-Investment_strategies_for_beginners-1.jpg"
                                          alt=""
                                          className="h-full w-full object-cover object-center"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <a
                                href="#"
                                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                              >
                                Shop Collection
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>

          </ParallaxLayer>

          

          
            
          
            
        </Parallax>
      
    </div>
  )
}

export default App
