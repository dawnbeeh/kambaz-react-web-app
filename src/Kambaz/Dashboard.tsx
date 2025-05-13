import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/CS5010/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS5010 Introduction to Programming for Data Science </h5>
              <p className="wd-dashboard-course-title">
                Offers an introductory course on fundamentals of programming and data structures. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/CS3520/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS3520 Programming in C++ </h5>
              <p className="wd-dashboard-course-title">
                Examines how to program in C++ in a robust and safe manner. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/CS4100/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CS4100 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                Introduces the fundamental problems, theories, and algorithms of the AI field. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/MATH5010/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> MATH5010 Foundations of Statistical Theory </h5>
              <p className="wd-dashboard-course-title">
                Presents a comprehensive foundational overview of the probability theory. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/CE2320/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> CE2320 Engineering Thermodynamics </h5>
              <p className="wd-dashboard-course-title">
                Covers the first and second laws of thermodynamics. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/PHYS1151Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> PHYS1151 Physics for Engineering 1 </h5>
              <p className="wd-dashboard-course-title">
                Covers calculus-based physics. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/NU6302/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5> NU6302 Health Policy and Law </h5>
              <p className="wd-dashboard-course-title">
                Examines health policy and health laws. </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
