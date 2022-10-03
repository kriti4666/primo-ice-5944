import { Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './WomenModule.css'

const Men= () => {
  return (
    <div className='men'>
      <div className="box">
        <div className="left_box">
          <Text fontSize='4xl' fontWeight='bolder'>VALENTINO <br/> GARAVANI: ALL PINK EVERYTHING</Text>
          <Text fontSize='2xl' mt='2rem'>Creative Director Pierpaolo Piccioli's new Valentino Pink PP collection turns fashion's boldest shade into an ultra wearable modern netural - discover the runway highlights here </Text>
          <Button mt='3rem'>Explore More</Button>
        </div>
        <div className="right_box">
          <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966294/data/1a5d386d73d925e6f4b523c422406e5c/1x1_messaging-side/616/data.jpeg' alt='img'/>
        </div>
      </div>

      <div className="trending">
        <div className="left_box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966270/data/f25509d981329e1da4795bbce53e311e/1x1_two-columns/624/data.jpeg" alt="img" />
        </div>
        <div className='trend'>
          <h3>NEW JACKETS FOR ALL WEATHERS</h3>
          <h3>For rain, shine or anything in between, these transitional jackets are the perfect pieces to help you navigate the seasons</h3>
        </div>
        <div className="left_box"></div>
      </div>
    
      {/************************             Product Box         ****************************/}

      <div className="text">
        <h3>New in: hand-picked daily from the world’s best brands and boutiques</h3>
        <Button border='1px solid'>Shop Now</Button>
      </div>


      <div className="cont-box">
        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/19/09/91/59/19099159_41756576_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Dsquared2</strong></h3>
            <h3>distressed straight-leg jeans</h3>
            <p>$2,003</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/61/30/05/18613005_41802285_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>AMIRI</strong></h3>
            <h3>bandana-print high-top sneakers</h3>
            <p>$1,9643</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/65/76/79/18657679_41517617_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Valentino</strong></h3>
            <h3>long single-breasted coat</h3>
            <p>$2,003</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/16/46/58/18164658_40560851_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Versace</strong></h3>
            <h3>baroque-print V-neck shirt</h3>
            <p>$2,750</p>
        </div>

      </div>


      {/*************           highlights            ********************/}

      <Text fontSize='4xl' >This week’s highlights</Text>

      <div className="cont-box">
        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3969212/data/0c331e37e3a0e6c3adf0c33a2adcf32a/3x4_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>GUCCI</h3>
          <span>The new Exquisite collection is here</span>
        </div>

        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966310/data/a94ef12bfc9bdd5c17447a34b96c6748/3x4_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>LEATHER OUTERWEAR</h3>
          <span>Quietly elegant wardrobe staples</span>
        </div>

        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966258/data/26fd1aac47f8ca27de0ea83948524a46/3x4_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>MONOCHROME SEPARATES</h3>
          <span>From blown-up proportions to classic cuts</span>
        </div>
      </div>


    {/**********************        Products2 box      *******************************/}


    <div className="text">
        <h3>Discover: new brands to know now</h3>
        <Button border='1px solid'>Shop Now</Button>
      </div>

      
      <div className="cont-box">
        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/19/05/33/77/19053377_41668992_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Stone Island</strong></h3>
            <h3>Compass hooded padded jacket</h3>
            <p>$1,649</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/53/61/99/18536199_41052154_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Off-White</strong></h3>
            <h3>Arrows ribbed beanie</h3>
            <p>$326</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/02/57/49/18025749_40086313_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>YEEZY GAP ENGINEERED BY <br/> BALENCIAGA</strong></h3>
            <h3>DOVE SHRUNKEN HOODIE</h3>
            <p>$430</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/37/32/21/18373221_40978501_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Balenciaga</strong></h3>
            <h3>HD cutout sneakers</h3>
            <p>$805</p>
        </div>

      </div>
{/****************************                    More Details               **************************/}
      <div className="cont-box">
          <div className="more-details">
           <img style={{marginTop:'10px'}} width='20px' src="https://cdn-icons-png.flaticon.com/512/3159/3159614.png" alt="" />
            <Text>How to shop</Text>
            <Text>Your guide to shopping and placing orders</Text>
          </div>

          <div className="more-details">
            <i class="fa-solid fa-question"></i>
            <Text>FAQS</Text>
            <Text>Your questions answered</Text>
          </div>

          <div className="more-details">
            <i class="fa-regular fa-message"></i>
            <Text>How to shop</Text>
            <Text>Your guide to shopping and placing orders</Text>
          </div>
        </div>
    </div>
  )
}

export default Men
