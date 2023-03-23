import { Navbar, Container, Row, Col, Image } from 'react-bootstrap';
import penny from './penny.jpg';

export default function App() {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>Penny&apos;s Memory</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="pt-5" style={{ backgroundColor: '#f0ebf8' }}>
        <Container fluid="md">
          <Row xs={1} s={1} md={1} lg={2}>
            <Col className="d-flex align-items-md-center flex-column">
              <p>
                My girl Penny was only 6 years old. She was taken from us as a
                result of canine lymphoma. We understand the shock and pain of
                this terrible disease. The Facebook community &quot;Fighting
                Canine Lymphoma&quot; offered much comfort when we needed it
                most. Mia Fallon, an aspiring woodworker, wants to memorialize
                Penny&apos;s memory by offering free boxes, so that every
                beloved dog can have a nice resting place. It&apos;s been 1 year
                since our baby passed, but her memory lives on.
              </p>
              <p className="h5 mb-5">
                If you are interested, please fill out this form and thank you
                all for your support during this difficult time.
              </p>
              <Image rounded fluid src={penny} />
            </Col>
            <Col className="d-flex justify-content-md-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdfelXES-AzEynFqqyXL5C-Q1RmcmejiM6OC8N9WApj4NAevQ/viewform?embedded=true"
                height="1350"
                width="100%"
                style={{ borderWidth: '1px', margin: 0 }}>
                Loading…
              </iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
