import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

interface CourseNavigationProps {
  courseId?: string;
}

export default function CourseNavigation({ courseId }: CourseNavigationProps) {
  const location = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item
          key={link}
          as={Link}
          to={`/Kambaz/Courses/${courseId}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`border-0 ${
            location.pathname.includes(`/${link}`) ? "active" : "text-danger"
          }`}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}