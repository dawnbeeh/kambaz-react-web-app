import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="fs-2 fw-bold mb-3">Dashboard</h1>
      <hr />
      <h2 className="fs-3 fw-bold my-3">Published Courses (12)</h2>
      <hr />
      
      <Row className="g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/1234/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS1234 React JS</Card.Title>
                <Card.Text className="text-secondary small">Full Stack software developer</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/CS5010/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS5010 Introduction to Programming for Data Science</Card.Title>
                <Card.Text className="text-secondary small">Offers an introductory course on fundamentals of programming and data structures.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/CS3520/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CS3520 Programming in C++</Card.Title>
                <Card.Text className="text-secondary small">Examines how to program in C++ in a robust and safe manner.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/CS4100/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark"> CS4100 Artificial Intelligence</Card.Title>
                <Card.Text className="text-secondary small">Introduces the fundamental problems, theories, and algorithms of the AI field.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/MATH5010/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">MATH5010 Foundations of Statistical Theory</Card.Title>
                <Card.Text className="text-secondary small">Presents a comprehensive foundational overview of the probability theory.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/CE2320/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">CE2320 Engineering Thermodynamics</Card.Title>
                <Card.Text className="text-secondary small">Covers the first and second laws of thermodynamics.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/PHYS1151/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">PHYS1151 Physics for Engineering 1</Card.Title>
                <Card.Text className="text-secondary small">Covers calculus-based physics.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Link to="/Kambaz/Courses/NU6302/Home" className="text-decoration-none">
            <Card className="h-100" style={{ maxWidth: "280px" }}>
              <Card.Img variant="top" src="/images/reactjs.png" style={{ height: "160px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title className="fs-5 fw-bold text-dark">NU6302 Health Policy and Law</Card.Title>
                <Card.Text className="text-secondary small">Examines health policy and health laws. </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
