import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

type EmailInfo = {
  name: string,
  phone: string,
  email: string,
  details: string,
  project: string,
}


export default function WelcomeEmail({name, phone, email, details, project}:EmailInfo){
return(
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={{...container, }}>
        <Heading style={{...h1, textAlign: 'center'}}>New Contact Form Filled From <br/>captialstonellc.com</Heading>
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType, }}>
              Name:
            </Text>
            <Text style={{...text, ...contactInfo}}>
              Full Name
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Phone Number:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              Phone Nujmba
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Email:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              Email
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Project Type:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              Type
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Project Details:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              Extra Details 
            </Text>
        </Section>  
      </Container>
    </Body>
  </Html>
)
};

const contactInfo = {
  marginTop: '0px',
}

const infoType = {
  fontSize: '20px',
  margin: '0',
  borderBottom: '1px solid rgba(0,0,0,0.8)',
}

const formInfo = {
  backgroundColor: 'rgb(241,241,244)',
  marginBottom: '10px',
  padding: '3px 10px',
}

const main = {
  backgroundColor: 'rgb(249, 249, 249)',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};


const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
