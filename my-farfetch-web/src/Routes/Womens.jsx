import { Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './WomenModule.css'

const Womens = () => {
  return (
    <div className='women'>
      <div className="box">
        <div className="left_box">
          <Text fontSize='4xl' fontWeight='bolder'>VALENTINO <br/> GARAVANI: ALL PINK EVERYTHING</Text>
          <Text fontSize='2xl' mt='2rem'>Creative Director Pierpaolo Piccioli's new Valentino Pink PP collection turns fashion's boldest shade into an ultra wearable modern netural - discover the runway highlights here </Text>
          <Button mt='3rem'>Explore More</Button>
        </div>
        <div className="right_box">
          <Image src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3966998/data/5372c6d768851325cc11dd478fb98488/1x1_messaging-side/637/data.jpeg' alt='img'/>
        </div>
      </div>

      <div className="trending">
        <div className="left_box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3967016/data/cbf4021be1c80966be1d6062f869870a/1x1_two-columns/637/data.jpeg" alt="img" />
        </div>
        <div className='trend'>
          <h3>TRENDING: CARGO PANTS</h3>
          <h3>The utillitarian favorite is black, and fall's best styles come courtesy of Dion Lee,<br/> Marine Serre and Off-white</h3>
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
            <img src="https://cdn-images.farfetch-contents.com/18/65/88/09/18658809_41198869_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Balmain</strong></h3>
            <h3>Blaze colour-block tote bag</h3>
            <p>$2,003</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/30/66/38/18306638_41723870_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Versace</strong></h3>
            <h3>high-waisted wide-leg trousers</h3>
            <p>$1,9643</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/19/04/71/24/19047124_41674485_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Valentino Garavani</strong></h3>
            <h3>One Stud 40mm leather pumps</h3>
            <p>$2,003</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/37/87/38/18378738_40613840_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Balenciaga</strong></h3>
            <h3>logo-print midi dress</h3>
            <p>$2,750</p>
        </div>

      </div>


      {/*************           highlights            ********************/}

      <Text fontSize='4xl' >This week’s highlights</Text>

      <div className="cont-box">
        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3938354/data/2d234013748d4136bb8813a3aae676ec/3x4_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>BURBERRY</h3>
          <span>Fall layers, the Riccardo Tisci way</span>
        </div>

        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3967014/data/645545f25420b8556bea08325a3f88ad/3x4_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>LEATHER OUTERWEAR</h3>
          <span>Sleek staples by Balenciaga and more</span>
        </div>

        <div className="highlights">
          <div className="img-box">
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3967012/data/3676c4377a255dbbcc0fae4b97028415/3x4_three-columns/480/data.jpeg" alt="img" />
          </div>
          <h3>FERRAGAMO</h3>
          <span>Modern, elegant, essential</span>
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
            <img src="https://cdn-images.farfetch-contents.com/17/92/07/35/17920735_41351772_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Paris Georgia</strong></h3>
            <h3>off-shoulder corset top</h3>
            <p>$573</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/61/16/61/18611661_41138345_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>Larroude</strong></h3>
            <h3>Dolly platform high heel mules</h3>
            <p>$558</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/59/84/85/18598485_40745194_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>There Was One</strong></h3>
            <h3>bias-cut midi skirt</h3>
            <p>$430</p>
        </div>

        <div className="prod-box">
          <div className="img-box">
            <img src="https://cdn-images.farfetch-contents.com/18/03/09/12/18030912_41671119_1000.jpg" alt="img" />
          </div>
          {/* <i class="fa-regular fa-heart"></i> */}
            <h3>New Season</h3>
            <h3><strong>16Arlington</strong></h3>
            <h3>Adara stud-embellished mini dress</h3>
            <p>$3,131</p>
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

export default Womens