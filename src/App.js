import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Card, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaRegFileAlt  } from 'react-icons/fa';

function App() {
  const [view, setView] = useState('coding');

  const codingProjects = [
    { 
      title: 'Printforgers.com', 
      description: 'A 3D printing ecommerce platform I developed where users can upload 3D-model files, receive quotes and customize their order. Also handles shipping and payments via API integration.', 
      features: 'File Upload and Quotation, Customization Options, Shipping Integration, Order Verification, Admin Panel',
      techUsed: 'React, Node.js, MySQL, Shippo API, Stripe.js, PrusaSlicer',
      link: 'https://printforgers.com',
      image: '/project-images/PrintforgersScreenshot.png'
    },
    {
      title: 'College Capstone Fitness Project',
      description: 'Group project where I led a team of six to create a fitness app that allows users to create accounts, set fitness goals, track nutrition, and log workouts.',
      features: 'User Authentication, Fitness Goal Tracking, Nutrition Recommendations, Workout Logging, Team Leadership',
      techUsed: 'React, Node.js, MySQL',
      link: 'https://capstone.parkert.dev',
      image: '/project-images/CapstoneScreenshot.png'
    },
    {
      title: 'Gigahorse Max Farm Viewer',
      description: 'An information viewer I made used by real people that displays maximum farm sizes using the chia-gigahorse software.',
      features: 'Data Collection, Backend APIs, Frontend Display, Automated CSV Updates',
      techUsed: 'React, Node.js, Express, MySQL',
      link: 'https://gh-max-farm.parkert.dev',
      image: '/project-images/GigahorseScreenshot.png'
    },
    {
      title: '3D Printing Application',
      description: 'A precursor to Printforgers.com for STL file uploads, print previews, quotes, and order management.',
      features: 'File Input, Backend Processing, 3D Preview, Order and Payment Handling',
      techUsed: 'React, Node.js, Stripe.js, PrusaSlicer',
      link: 'https://print.parkert.dev',
      image: '/project-images/PrintAppScreenshot.png'
    },
    {
      title: 'Transcoding Application',
      description: 'File processor I made that transcodes videos to H.265/HEVC format with progress indicators and file size comparisons.',
      features: 'File Upload, Video Transcoding, Real-time Progress, File Size Comparison, Download Options',
      techUsed: 'React, Node.js, HandBrake',
      link: 'https://transcoder.parkert.dev',
      image: '/project-images/TranscoderAppScreenshot.png'
    },
    {
      title: 'Home Page Application',
      description: 'A customizable homepage I made that shows real weather data based on zip code and saves your personalized settings.',
      features: 'Weather API Integration, Customizable Backgrounds, Personal Settings, Search Bar',
      techUsed: 'React, Node.js, OpenWeather API',
      link: 'https://home.parkert.dev',
      image: '/project-images/HomepageAppScreenshot.png'
    },
    {
      title: 'Fitbit Application',
      description: "Fitbit application that fetches data from an API regarding the user's computer and displays it on a Fitbit smartwatch.",
      features: 'Javascript, Companion App, API Data Fetching, Smartwatch Display',
      techUsed: 'Fitbit SDK, JavaScript, API Integration',
      link: 'https://gallery.fitbit.com',
      image: '/project-images/FitbitAppScreenshot.png'
    }
  ];

  const itProjects = [
    {
      title: 'Smart Birdfeeder',
      description: '3D printed a smart birdfeeder. Uses a raspberry pi and webcam to run an RTSP server which is monitored by Frigate. When birds are detected on stream, AI is used for recognizing different bird species.',
      features: 'AI Recognition, Docker Deployment, Real-time Monitoring',
      techUsed: 'Docker, TensorRT Frigate',
      image: '/project-images/BirdfeederPicture.jpg'
    },
    {
      title: 'Proxmox Virtualization Environment',
      description: 'Set up a Proxmox virtualization platform for hosting various projects in isolated containers.',
      features: 'VM Management, Snapshots, Backup and Restore',
      techUsed: 'Proxmox, LXC, KVM',
      image: '/project-images/ProxmoxScreenshot.png'
    },

    {
      title: 'Server Rack Setup',
      description: 'Configured a server rack to efficiently manage multiple services.',
      features: 'Power Management, Cooling Solutions, Cable Management',
      techUsed: 'Custom Hardware, Ubuntu, Raspberry Pi',
      image: '/project-images/ServerrackPicture.jpg'
    },
    {
      title: 'Nextcloud Server',
      description: 'Set up a personal cloud storage solution for file sharing and collaboration.',
      features: 'File Sharing, Collaboration Tools, Calendar and Contacts Integration',
      techUsed: 'Nextcloud, Ubuntu, SSL',
      image: '/project-images/NextcloudScreenshot.png'
    },
    {
      title: 'Nginx Reverse Proxy',
      description: 'Configured a reverse proxy setup directing traffic to my multiple web applications on different servers.',
      features: 'Traffic Management, Networking, SSL Termination',
      techUsed: 'Nginx, Apache, Ubuntu, Certbot, TLS',
    },
    {
      title: 'Home Lab Automation',
      description: 'Wrote many automated scripts for managing and maintaining home lab servers.',
      features: 'Automated Backups, System Updates, Resource Monitoring',
      techUsed: 'Bash, d2c.sh, Cron Jobs',
    },
    {
      title: 'Network Security Implementation',
      description: 'Implemented security measures for home network and servers.',
      features: 'Firewall Configuration, VPN Setup, Intrusion Detection',
      techUsed: 'UFW, Port Forwarding, Fail2Ban',
    },

  ];
  

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Parker Throneberry</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-5">
        <h1 className="text-center mb-5">Projects</h1>
        <div className="text-center mb-4">
          <ToggleButtonGroup type="radio" name="projectView" defaultValue="coding" onChange={(val) => setView(val)}>
            <ToggleButton id="coding" value="coding">Coding Projects</ToggleButton>
            <ToggleButton id="it" value="it">IT Projects</ToggleButton>
          </ToggleButtonGroup>
        </div>
        
        <Row>
          {(view === 'coding' ? codingProjects : itProjects).map((project, index) => (
            <Col key={index} md={12} className="mb-4">
              <Card className="d-flex flex-column flex-md-row">
                <Col md={8} sm={12} className="d-flex">
                  <Card.Body className="flex-grow-1">
                    <Card.Title className="text-center">{project.title}</Card.Title>
                    <Card.Text><strong>Description: </strong>{project.description}</Card.Text>
                    <Card.Text><strong>Features: </strong>{project.features}</Card.Text>
                    <Card.Text><strong>Technology Used: </strong>{project.techUsed}</Card.Text>
                    {project.link && (
                      <div className="d-flex justify-content-center">
                        <Button variant="primary" href={project.link} target="_blank">
                          View Project
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Col>
                <Col md={4} sm={12} className="d-flex align-items-center justify-content-center">
                  {project.image && (
                    <img src={project.image} alt={`${project.title} screenshot`} className="img-fluid" />
                  )}
                </Col>
              </Card>

            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5" id="about">
        <h1 className="text-center mb-5">About Me</h1>
        <p className="text-center">
          My name is Parker Throneberry, I'm a passionate developer specializing in programming and IT.<br/>
          I enjoy working with various technologies and am always eager to learn and take on new challenges.<br/>

        </p>
      </Container>

      <Container className="text-center my-5" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out on Linkedin, Check out my Github, or click the third icon to view my resume.</p>
        <div className="d-flex justify-content-center">
          <a href="https://github.com/pht1207" target="_blank" rel="noreferrer" className="mx-2">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/pht1207/" target="_blank" rel="noreferrer" className="mx-2">
            <FaLinkedin size={40} />
          </a>
          <a href="/Parker_Throneberry_Resume.pdf" target="_blank" rel="noreferrer" className="mx-2">
            <FaRegFileAlt  size={40} />
          </a>

        </div>
      </Container>

      <footer className="text-center py-4 bg-dark text-white">
        <Container>
          <p>&copy; 2024 Parker Throneberry</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
