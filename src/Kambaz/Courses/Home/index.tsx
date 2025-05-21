import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="row" id="wd-home">
      <div className="col-12 col-xl-8 mb-3">
        <Modules />
      </div>
      <div className="d-none d-xl-block col-xl-4">
        <CourseStatus />
      </div>
    </div>
  );
}
