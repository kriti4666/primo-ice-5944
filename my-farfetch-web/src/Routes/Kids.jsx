import { Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './WomenModule.css'

const Kids = () => {
  return (
    <div className='kids'>
      <div className="box">
        <div className="left_box">
          <Text fontSize='4xl' fontWeight='bolder'>FALL'S BEST <br/> OUTERWEAR</Text>
          <Text fontSize='2xl' mt='2rem'>Layer up in the new season’s best styles from Stand Studio,<br/> Amiri and more</Text>
          <Button mt='3rem'>Shop Now</Button>
        </div>
        <div className="right_box">
          <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965680/data/1493d066b69d04f7eb7f69b1ebf4d9fc/1x1_messaging-side/616/data.jpeg' alt='img'/>
        </div>
      </div>


{/*************           highlights            ********************/}

<Text fontSize='4xl' >The best of new in</Text>

      <div className="cont-box">
        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965638/data/f643fcbe064f1784f86cfeba03fad19a/1x1_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>BABY</h3>
          <span>Cozy snowsuits and unmistakable checks</span>
        </div>

        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965766/data/437665710b0100a1573e87a23e01ec95/1x1_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>KIDS</h3>
          <span>The season’s key layers</span>
        </div>

        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965660/data/c4a3b767e6dab99cffea70cdb489c07e/1x1_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>TRENDS</h3>
          <span>From chunky boots to matching sets</span>
        </div>
      </div>
    
      {/************************             Product Box         ****************************/}

      <div className="cont-box">
        <div className="kid-box">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965648/data/5b86ebffdb6e11dbb7217d93039bdccf/1x1_two-columns/624/data.jpeg" alt="img" />
          </div>
          <h3>BABY</h3>
          <span>Explore our sneaker edit, courtesy of fashion’s biggest names</span>
        </div>

        <div className="kid-box">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965758/data/467ff31f68b8e8c2e761ee2c52358788/1x1_two-columns/624/data.jpeg" alt="img" />
          </div>
          <h3>CONSCIOUS FASHION</h3>
          <span>Little clothes made with the bigger picture in mind</span>
        </div>
      </div>


    
    {/**********************        Products2 box      *******************************/}


      <div className="cont-box">
        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/19/03/88/49/19038849_41590521_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Stella McCartney Kids</strong></h3>
            <h3>contrasting-lining padded coat</h3>
            <p>$302</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/58/77/47/18587747_40142951_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Moncler Enfant</strong></h3>
            <h3>knitted beanie hat</h3>
            <p>$170</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/41/13/41/18411341_40381432_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Marc Jacobs Kids</strong></h3>
            <h3>logo-tape velvet dress</h3>
            <p>$140</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/67/48/40/18674840_40336697_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Karl Lagerfeld Kids</strong></h3>
            <h3>lace-up leather boots</h3>
            <p>$1327</p>
        </div>

      </div>


{/*************************                 KIDS Trends              ****************************/}

<div className="trending">
        <div className="left_box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3965740/data/6ee964c35a7d4526d278bf7089f2bebc/1x1_two-columns/624/data.jpeg" alt="img" />
        </div>
        <div className='trend'>
          <h3>GIVENCHY KIDS</h3>
          <h3>Reenergized closet staples for fall</h3>
        </div>
        <div className="left_box"></div>
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

export default Kids