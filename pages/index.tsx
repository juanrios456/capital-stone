import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Button, Container, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { PreviousClients, ServicesWeOffer } from '@/components/Layout'
import {MdCheckCircle} from 'react-icons/md'
import { ContactForm } from '@/components/ContactForm'

  const stuccoList = ['Kansas Local with projects from the midwest to the east coast', 'Over 20 years of experience', 'Great Turn around Time', ];
  const stoneList = ['Free Quotes', 'Veneer Stone Siding', 'Stone walls' ];
  const brickList = [ 'Licensed and Insured', 'Performing Residential, Commercial, and small projects', 'Indoor and outdoor stone specialists'];

  const NewListCreator = (props:any) =>{
    const sectionName = props.sectionName;
    const list = props.list;

    return(
      list.map((listItem:string, index:number)=>{
        return(
        <ListItem fontSize={'xl'} pb={'4'} key={`${index}-${sectionName}`}>
          <ListIcon as={MdCheckCircle} color={'green.500'}/>
          {listItem} 
        </ListItem>
        )
      })
    )
  };


export default function Home() {

  return (
    <>
      <Head>
        <title>Capital Stone | Kansas local stone, stucco, and concrete block construction contractors</title>
        <meta name="description" content="Capital Stone is a Residential and commercial contractor based in Wichita Kansas but travels all over the United States as well as licensed and insured. Contact us for any project no matter the size or the location in the United States. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Capital Stone | Stucco and Stone Contractor" />
        <meta property="og:description" content="Learn more about our previous clients, and contact us today!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image.JPG" />
        <meta property="og:url" content="https://www.csapitalstonellc.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className={styles.heroSection}>
          <div className={styles.heroCard}>
            <Container>
              <Heading fontFamily={'adamina'} textAlign={'center'}>Welcome to Capital Stone</Heading>
              <Text py={4} px={4}>Kansas leading export in Stucco, Stone,
                and foundation repair on commercial and residential
                projects. Guaranteed!!
              </Text>
              <Container display={'flex'}  flexDirection={{base: 'column', sm: 'row'}} alignItems={'center'} justifyContent={{base: 'center', sm: 'space-evenly'}} >
                <Button as='a' href='/#contact' variant={'outline'} color={'var(--primary-white)'} _hover={{ bg: 'var(--primary-blue)'}} mb={{base: '20px', sm: '0'}} w={'175px'}>Get a Free Estimate</Button>
                <Button as='a' href='/#projects' bg={'var(--primary-blue)'} _hover={{ bg: 'rgba(0, 0, 0, 0)', border: '1px solid white', color: 'var(--primary-white)'}} w={'175px'}>View Projects</Button>
              </Container>
            </Container>
          </div>
        </div>
        <PreviousClients/>
        <Section3/>
        <Section4/>
        <Section5/>
        <ServicesWeOffer/>
        <ContactForm/>
      </main>
    </>
  )
}

export function Section3(){
  return(<>
    <div className={styles.section3} id='projects'>
          <Image src='/curves/curve-1.png'
            width={1440}
            height={170}
            alt="background curve"
            quality={'100'}
            className={styles.curveOne}
          />
            <Image src='/stone-images/IMG-3313.jpg'
              width={600}
              height={600}
              alt="image one"
              data-aos='fade-up'
              className={styles.section3Image}
            />
          <Image src='/bg/index-bg-1.png'
              width={500}
              height={500}
              alt="image one"
              className={styles.section3bg}
            />
          <div className={styles.section3TextContainer}>
            <Container data-aos='fade-up'>
              <Heading fontFamily={'adamina'} fontSize={'3xl'} textAlign={'center'} py={5}>Stone Projects</Heading>
              <List>
                <NewListCreator sectionName='Stone' list={stoneList}/>
              </List>
            </Container>
          </div>
        </div>
  </>)
}

export function Section4(){
  return(<>
      
    <div className={styles.section4}>
      <div className={styles.section4TextContainer}>
        <Container data-aos='fade-up' color={'white'}>
          <Heading fontFamily={'adamina'} fontSize={'3xl'} textAlign={'center'} py={5}>Stucco Specialty</Heading>
          <List>
            <NewListCreator sectionName='Stucco' list={stuccoList}/>
          </List>
        </Container>
      </div>
      <Image src='/curves/curve-2.png'
        width={1440}
        height={170}
        alt="background curve"
        quality={'100'}
        className={styles.curveTwo}
      />
      <Image src='/bg/index-bg-2.png'
              width={500}
              height={500}
              alt="image one"
              className={styles.section4bg}
      />
      <Image src='/image.JPG'
              width={600}
              height={600}
              alt="image one"
              data-aos='fade-up'
              className={styles.section4Image}
            />
    </div>
  </>)
}

export function Section5(){
  return(<>
    <div className={styles.section5}>
      <Image src='/curves/curve-3.png'
        width={1440}
        height={170}
        alt="background curve"
        quality={'100'}
        className={styles.curveThree}
      />
      <Image src='/image.JPG'
        width={600}
        height={600}
        data-aos='fade-up'
        alt="image one"
        className={styles.section5Image}
      />
      <Image src='/bg/index-bg-3.png'
          width={500}
          height={500}
          alt="image one"
          className={styles.section5bg}
      />
      <div className={styles.section5TextContainer}>
        <Container data-aos='fade-up'>
          <Heading fontFamily={'adamina'} fontSize={'3xl'} textAlign={'center'} py={5}>Brick Projects</Heading>
          <List>
            <NewListCreator sectionName='Brick' list={brickList}/>
          </List>
        </Container>
      </div>
    </div>
  </>)
}
