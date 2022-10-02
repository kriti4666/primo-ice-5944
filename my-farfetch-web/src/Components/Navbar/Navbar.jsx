import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="main">
      <div className="row1">
        <div className="left">
          <Link to="/">
            <h2>Women</h2>
          </Link>
          <Link to="/men">
            <h2>Men</h2>
          </Link>
          <Link to="/kids">
            <h2>Kids</h2>
          </Link>
        </div>

        <div className="mid">
          <Link to="/">
            <h1>FARFETCH</h1>
          </Link>
        </div>

        <div className="right">
          <Link to="/">
            <i class="fa-light fa-circle"></i>
          </Link>
          <Link to="/login">
            <i class="fa-regular fa-user"></i>
          </Link>
          <Link to="#">
            <i class="fa-regular fa-heart"></i>
          </Link>
          <Link to="/cartPage">
          <i class="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>
      </div>
      <div className="row2">
        <div className="menubar">
          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              New In
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>New in today</MenuItem>
                <MenuItem>New: classic</MenuItem>
                <MenuItem>New: expressionist</MenuItem>
                <MenuItem>New: glamour</MenuItem>
                <MenuItem>New: hype streetwear</MenuItem>
                <MenuItem>New: minimalismo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="TRENDING NOW"></MenuGroup>
                <MenuItem>All pink everything</MenuItem>
                <MenuItem>High-shine accessories</MenuItem>
                <MenuItem>Leather outerwear</MenuItem>
                <MenuItem>The fall boot edit</MenuItem>
                <MenuItem>Sweater weather</MenuItem>
                
              </Box>

              <Box>
                <MenuGroup title="DISCOVER"></MenuGroup>
                <MenuItem>99 new season must-</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Back by popular demand</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Exclusives & collabs <br/> 25 names to kno</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="THE HIGHLIGHTS"></MenuGroup>
                <MenuItem>All articles</MenuItem>
                <MenuItem>Street styles</MenuItem>
                <MenuItem>How to <br/> Brans we love <br/> Trends</MenuItem>
                <MenuItem>Boutique directory</MenuItem>
                
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/28-09-22/28-09-WW-NEW-IN_LEATHER.jpg"
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Shop By
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/28-09-22/28-09-MW-SHOP-BY_MOST-WANTED.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Brands
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/28-09-22/28-09-MW-DESIGNER_VALENTINO.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Clothing
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/MW/31-08-MW-CLOTHING-HOODIES.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Shoes
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/MW/31-08-MW-SHOES-NEW_IN_SHOES.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Sneaker
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/MW/31-08-MW-TRAINERS-JORDANS.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Bags
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/MW/31-08-MW-BAGS-SHOULDER_BAGS.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Accessories
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/MW/31-08-MW-ACCESSORIES-PRE_FALL.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Watches
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/New%20folder%20(48)/MW/31-08-MW-WATCHES-PRE_OWNED.jpg'
                    alt="img"
                  />
                  <Box>
                    <Text>Spotlight on</Text>
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton fontSize='sm' borderRadius="md" bg="none" as={Button}>
              Sale
            </MenuButton>
            <MenuList color="black" display="flex">
              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box>
                <MenuGroup title="Whats New"></MenuGroup>
                <MenuItem>Take a Tour</MenuItem>
                <MenuItem>Features</MenuItem>
                <MenuItem>Project Templates</MenuItem>
                <MenuItem>App & Integrations</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Watch Live Demo</MenuItem>
              </Box>

              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box>
                  <Image
                    src='https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/SS22%20Sale/MEGANAV_MAIN-SALE.png'
                    alt="img"
                  />
                  <Box alignItems='left'>
                  Spotlight on
                    <Text>SHEARLING JACKETS</Text>
                    <Text>Shop now</Text>
                  </Box>
                </Box>
              </Box>
            </MenuList>
          </Menu>
        </div>
        <InputGroup w='200px'>
          <InputRightElement
            pointerEvents='none'
            children={<SearchIcon color='gray.700' />}

          />
          <Input type='text' placeholder='Search' />
        </InputGroup>
      </div>
    </div>
  );
};

export default Navbar;
