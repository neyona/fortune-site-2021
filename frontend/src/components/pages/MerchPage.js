// fortune_docker/frontend/src/components/pages/MerchPage.js
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import LightningBugs from '../assets/LightningBugs.jpg';
import ToadsOnATote from '../assets/ToadsOnATote.jpg';
import DangerLectricsBackground from '../assets/DangerLectricsBackground.jpg';
import ManateeWithBlueBacking from '../assets/ManateeWithBlueBacking.jpg';
import RedbubbleCuttlefish from '../assets/RedbubbleCuttlefish.jpg';
import ButterflyMaskOnBlue from '../assets/ButterflyMaskOnBlue.jpg';

const MerchPage = () => {

  return (
    <div className="content-wrap">
      <Jumbotron className="jumbotron-page-alt">
        <h1>Merchandise of ME!</h1>
        <hr />
        <h2>About the Merch Shops</h2>
          <p>
            Did you enjoy this site? I hope you did! Merchandise of me, the Fortune Giver, can be found by following the links on this page. All links on this page open into other tabs,
             and the images are links to specific products.
          </p>
          <p>
            See, it's me on the merchandise, and I am gorgeous, and cuttlefish are awesome!
          </p>
          <Row className="show grid text-center">
            <Col>
              <a href="https://www.teepublic.com/user/neyona" alt="A link to the Neyona Tee Public shop, it opens another tab to get to the page." target="_blank" rel="noopener noreferrer" className="link"><u>Neyona's Tee Public Shop</u></a>
            </Col>
            <Col>
              <a href="https://www.redbubble.com/people/aphelionrhode/explore?asc=u" alt="A link to the Aphelion Rhode Rebubble shop, it opens another tab to get to the page." target="_blank" rel="noopener noreferrer"><u>Redbubble Aphelion Rhode Shop</u></a>
            </Col>
          </Row>

          <Row className="show grid text-center">
            <Col xs={12} sm={4}>
              <Figure>
                <a href="https://www.teepublic.com/poster-and-art/5134290-underwater-fortune-giver-cuttlefish-eye-with-light" target="_blank" rel="noopener noreferrer">
                  <Figure.Image
                    width={250}
                    height={250}
                    alt="Image is a link to a Tee Public shop, the image is of a Cuttlefish side eye with a Lightining Bug Tank fortune on it."
                    src={LightningBugs}
                    className="img-purple"
                    fluid
                   />
                </a>
                <Figure.Caption className="figure-caption-custom">
                  Me with a Lightning Bug Fortune
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={12} sm={4}>
              <Figure>
                <a href="https://www.teepublic.com/tote/5129246-underwater-fortune-giver-cuttlefish-with-toad-fort" target="_blank" rel="noopener noreferrer">
                  <Figure.Image
                    width={250}
                    height={250}
                    alt="A blue tote bag featuring the Fortune Cuttlefish with a fortune about toads, links to the product on Tee Public"
                    src={ToadsOnATote}
                    className="img-purple"
                    fluid
                   />
                </a>
                <Figure.Caption className="figure-caption-custom">
                  Me with a Toad Fortune
                </Figure.Caption>
              </Figure>
            </Col>
            <Col xs={12} sm={4}>
              <Figure>
                <a href="https://www.teepublic.com/mask/7804167-small-butterfly-flying-away" rel="noopener noreferrer">
                  <Figure.Image
                    width={250}
                    height={250}
                    alt="Image is a link to a Tee Public shop for a mask with a hand drawn butterfly on it."
                    src={ButterflyMaskOnBlue}
                    className="img-purple"
                   />
                </a>
                <Figure.Caption className="figure-caption-custom">
                  A Butterfly on a Mask
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <hr />

         <Row className="show grid text-center">
           <Col xs={12} sm={4}>
             <Figure>
               <a href="https://www.redbubble.com/i/poster/The-Fortune-Cuttlefish-by-aphelionrhode/49387525.LVTDI" target="_blank" rel="noopener noreferrer">
                 <Figure.Image
                   width={250}
                   height={250}
                   alt="Image is a link to a Redbubble shop for a wall decoration with a cuttlefish on it."
                   src={RedbubbleCuttlefish}
                   className="img-purple"
                 />
               </a>
               <Figure.Caption className="figure-caption-custom">
                 Cuttlefish on Wall Art
               </Figure.Caption>
             </Figure>
           </Col>

           <Col xs={12} sm={4}>
             <Figure>
               <a href="https://www.redbubble.com/i/art-print/Caution-Manatee-with-a-Katana-A-Not-Very-Useful-Warning-Site-by-aphelionrhode/43425197.1G4ZT" target="_blank" rel="noopener noreferrer">
                 <Figure.Image
                   width={250}
                   height={250}
                   alt="Image is a link to a Redbubble shop for a wall decoration with a very silly unhelpful watch out for manatees with katanas sign."
                   src={ManateeWithBlueBacking}
                   className="img-purple"
                 />
              </a>
              <Figure.Caption className="figure-caption-custom">
                Manatees with Katanas
              </Figure.Caption>
            </Figure>
          </Col>

          <Col xs={12} sm={4}>
            <Figure>
              <a href="https://www.redbubble.com/i/laptop-skin/Dangerous-Lectrics-Off-Kilter-High-Voltage-Sign-by-aphelionrhode/43424678.6EA4Y" target="_blank" rel="noopener noreferrer">
                <Figure.Image
                  width={250}
                  height={250}
                  alt="Image is a link to a Redbubble shop for a computer cover for a not very helpful safety sign."
                  src={DangerLectricsBackground}
                  className="img-purple"
                />
              </a>
              <Figure.Caption className="figure-caption-custom">
                Watch out for 'Lectrics' Computer Cover
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>

      <hr />
        <h2>About the Artist</h2>
          <p>
            The designs were drawn by Meghan Myers using blendable soft pencils or made with cut out paper. All of the art and cutouts were scanned
             using a high resolution overhead camera, and assembled on a Mac. I, the Fortune Giver, gives the fortunes, and Meghan does the art and programming.
              There are some other fun designs not related to cuttlefish in these shops as well, as you can see above.
               Also, you might find something fun if you search for apogalacticon-z on Redbubble.
          </p>

      </Jumbotron>
    </div>
  );
}

export default MerchPage;
