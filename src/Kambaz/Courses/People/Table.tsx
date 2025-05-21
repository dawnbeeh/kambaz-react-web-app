import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">Student</td>
                        <td className="wd-last-activity">2025-05-01</td>
                        <td className="wd-total-activity">10:21:32</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tisha</span>{" "}
                        <span className="wd-last-name">Kotadia</span></td>
                        <td className="wd-login-id">001234562K</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2025-05-15</td>
                        <td className="wd-total-activity">12:00:32</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Heet</span>{" "}
                        <span className="wd-last-name">Kanani</span></td>
                        <td className="wd-login-id">001234563K</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2025-05-20</td>
                        <td className="wd-total-activity">04:52:32</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Dawnbee</span>{" "}
                        <span className="wd-last-name">Hwang</span></td>
                        <td className="wd-login-id">001234564H</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">Student</td>
                        <td className="wd-last-activity">2025-05-20</td>
                        <td className="wd-total-activity">09:53:44</td></tr>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Jose</span>{" "}
                        <span className="wd-last-name">Annunziato</span></td>
                        <td className="wd-login-id">001234565A</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">Teacher</td>
                        <td className="wd-last-activity">2025-05-19</td>
                        <td className="wd-total-activity">15:43:25</td></tr>
                </tbody>
            </Table>
        </div>);
}