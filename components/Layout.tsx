import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  Heading,
  Container,
  Card,
  CardHeader,
  CardBody,
  Text,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import NextLink from 'next/link'
import layoutStyles from '@/styles/Layout.module.css'
import {AiFillCaretDown, AiFillCaretLeft, AiOutlineHome, AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import {BsBricks, BsFacebook, BsFillBuildingsFill, BsTools} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { ServicesCards } from './Types'
import { RxHamburgerMenu } from 'react-icons/rx'

export function Layout({children}: any){

  return(<>
  <NavigationMenu/>
    {children}
  <Footer/>
  </>)
}

export function NavigationMenu(){
  const { isOpen, onOpen, onClose } = useDisclosure();

  return(
    <nav className={layoutStyles.navigationMenu}>
      <div className={layoutStyles.navigationGrid}>
      <span className={layoutStyles.navigationLogoContainer}>
        <Link href="/" >
          <Image src='/logo.png'
            alt="Capital Stone Main Logo"
            width={100}
            height={100}
            />
        </Link>
      </span>
      <ul className={layoutStyles.navigationLinksContainer}>
        <li className={layoutStyles.navigationMenuMobile}>
      <Button backgroundColor='var(--black)' onClick={onOpen} h={'50px'} w={'53px'} padding={'0'}>
        <IconContext.Provider value={{size: '50px', color: 'var(--primary-white)'}}>
          <RxHamburgerMenu/>
        </IconContext.Provider>
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={'lg'}/>
          <DrawerHeader borderBottomWidth='1px' fontFamily={'Adamina'}>Menu</DrawerHeader>
          <DrawerBody className={layoutStyles.mobileNavigationLinks}>
            <Button onClick={onClose} as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/">
              Home
            </Button>
            <Button onClick={onClose} as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/#clients">
             Clients / Partner 
            </Button>
            <Button onClick={onClose} as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/#services">
              Services 
            </Button>
            <Button onClick={onClose} as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/#contact">
             Contact 
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </li>
        <li className={layoutStyles.navigationLink}>
          <Button as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/">
            Home
          </Button>
        </li>
        <li className={layoutStyles.navigationLink}>
          <Button as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/#clients">
            Clients / Partners
          </Button>
        </li> 
        <li className={layoutStyles.navigationLink}>
          <Button as={NextLink} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href="/#services">
            Services
          </Button>
        </li>
        <li className={layoutStyles.navigationLink}>
          <Button fontFamily={'Adamina'} as={NextLink} href='/#contact' backgroundColor={'var(--primary-gray)'} >
            Contact
          </Button>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export const AboutUsDropdown = ()=>{
  return(
    <Menu>
      {({ isOpen }) => (
        <>
        <MenuButton as={Button} fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} rightIcon={isOpen ? <AiFillCaretLeft/> : <AiFillCaretDown />}>
          About Us
        </MenuButton>
        <MenuList>
          <MenuItem as='a' fontFamily={'Adamina'} href='/about'>About</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'} href='/about/experience'>Experience</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'} href='/about/careers'>Careers</MenuItem>
        </MenuList>
        </>
      )}
    </Menu>
  )
}

export const ServicesDropDown = () => {
  return(
    <Menu>
      {({ isOpen }) => (
        <>
        <MenuButton fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} as={Button} rightIcon={isOpen ? <AiFillCaretLeft/> : <AiFillCaretDown />}>
          Services
        </MenuButton>
        <MenuList>
          <MenuItem as='a' fontFamily={'Adamina'} href='/services/repairs'>Repairs</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'} href='/services/bricks'>Brick Laying</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'} href='/services/concrete-and-block'>Concrete / Block</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'} href='/services/stone'>Veneer Stone</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'} href='/services/stucco'>Stucco</MenuItem>
          <MenuDivider />
          <MenuItem as='a' fontFamily={'Adamina'} href='/services/residential'>Residential</MenuItem>
          <MenuItem as='a' fontFamily={'Adamina'}href='/services/commercial'>Commercial</MenuItem>
        </MenuList>
        </>
      )}
    </Menu>
  )
}
export function Footer(){
  return(
  <footer className={layoutStyles.footer}>
    <div className={layoutStyles.footerGrid}>
      <div className={layoutStyles.footerLogoContainer}>
        <Link href='/' className={layoutStyles.footerLogoLink}>
        <Image src='/logo.png'
          width={150}
          height={150}
          className={layoutStyles.footerLogo}
          alt='Logo that takes you to the home page.'
          title='Logo that takes you to the home page.'
        />
        </Link>
      </div>
      <div className={layoutStyles.footerLinksContainer}>
        <Button as='a' fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href='/'>Home</Button>
        <Button as='a' fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href='/#clients'>Clients / Partners</Button>
        <Button as='a' fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href='/#services'>Services</Button>
        <Button as='a' fontFamily={'Adamina'} backgroundColor={'var(--primary-gray)'} href='/#contact'>Contact</Button>
      </div>
      <div className={layoutStyles.footerSocialsContainer}>
        <IconContext.Provider value={{className: `${layoutStyles.facebookIcon} footer-links`}}>
          <Link href="/">
            <BsFacebook />
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{className: `${layoutStyles.emailIcon} footer-links`}}>
          <Link href="/">
            <AiOutlineMail />
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{className: `${layoutStyles.phoneIcon} footer-links`}}>
          <Link href="/">
            <AiFillPhone />
          </Link>
        </IconContext.Provider>
      </div>
      <Text py={5}>Website Created By <Link style={{color: 'var(--primary-blue)', textDecoration: 'underline'}} href="mailto:juanriis456@gmail.com">Juan Rios</Link></Text>
    </div>
  </footer>);
}

export function PreviousClients(){
  let imageArray= [
    {
      name: 'Hilton.png',
      id: 1,
    },
    {
      name: 'kansascom.png',
      id: 2,
    },
    {
      name: 'mcdonalds.jpg',
      id: 3,
    },
    {
      name: 'subway.png',
      id: 4,
    },
    {
      name: 'walmart.png',
      id: 5,
    }
  ];
  let i = 0;
  const imageFunction = imageArray.map((image) =>{
      return(
        <span key={image.id} className={layoutStyles.clientImageContainer}>
          <Image src={`/previous-client-logos/${image.name}`}
            width={120}
            height={120}
            alt="Walmart logo, a trusted client"
          />
        </span>
      )
  })
  return(
    <>
    <div className={layoutStyles.previousClientsSection} id='clients'>
      <Heading fontSize={'3xl'} fontFamily={'adamina'} py={5} textAlign={'center'}>Previous Clients / Partners</Heading>
      <div className={layoutStyles.clientsContainer}>
        {imageFunction}
      </div>
      <Container display={/*'flex'*/'none'} justifyContent={'center'}>
        <Button backgroundColor={'var(--primary-blue)'}>View All</Button>
      </Container>
    </div>
    </>
  )
}



export function ServicesWeOffer(){
  const cardsArray:ServicesCards =[
  {
    title: 'Residential',
    body: 'Working with local homeowners and contractors to bring your dream house to fruition.',
    icon: BsBricks,
    id: 1
  },
  {
    title: 'Commercial',
    body: 'Years of experience working with commercial construction, with stucco, stone, and brick of all kinds.',
    icon: BsFillBuildingsFill,
    id: 2
  },
  {
    title: 'Interior',
    body: 'Indoor remodel, new home additions, with no project to big or too small.',
    icon: BsTools,
    id: 3
  },
  {
    title:'Exterior',
    body: 'Plans of renovating your exterior? New projects? We handle it all!',
    icon: BsBricks,
    id: 4
  },
  ];
  const serivcesCards = cardsArray.map((cardItem) =>{
    return(
  <Card backgroundColor={'var(--primary-white)'} key={cardItem.id}>
    <CardHeader display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading size='md' fontFamily={'Adamina'}>{cardItem.title}</Heading>
        <span className={layoutStyles.servicesIcon}><cardItem.icon/>
        </span>
      
    </CardHeader>
    <Divider />
    <CardBody>
      <Text>{cardItem.body}</Text>
    </CardBody>
  </Card>
    )
  })

  return(
  <>
    <div className={layoutStyles.servicesSection} id='services'>
      <div style={{ padding: '10px', display: 'flex', justifyContent: 'center'}}>
        <Heading fontSize={'3xl'} fontFamily={'adamina'} textAlign={'center'} backgroundColor={'var(--primary-white-60-o)'} borderRadius={10} py={'5'} px={10} mb={'40px'}>Services Offered</Heading>
      </div>
  <IconContext.Provider value={{className: "services-icons"}}>
      <div className={layoutStyles.servicesGrid}>
        {serivcesCards}
      </div>
  </IconContext.Provider>
    </div>
  </>
  )
}