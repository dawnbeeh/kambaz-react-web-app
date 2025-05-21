import { useNavigate } from "react-router-dom";
import { FormControl, Button } from "react-bootstrap";
export default function Profile() {
  const navigate = useNavigate();
  return (
    <div id="wd-profile-screen" className="mx-auto" style={{ maxWidth: 320 }}>
      <h1 className="mb-3">Profile</h1>
      <FormControl defaultValue="dawnbeeh" placeholder="username" className="mb-2" />
      <FormControl defaultValue="123" placeholder="password" type="password" className="mb-2" />
      <FormControl defaultValue="Dawnbee" placeholder="First Name" className="mb-2" />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
      <FormControl defaultValue="2001-02-03" type="date" className="mb-2" />
      <FormControl defaultValue="dawnbeeh@wonderland.com" type="email" className="mb-2" />
      <FormControl defaultValue="User" className="mb-2" />
      <Button className="w-100 mb-2" variant="danger" onClick={() => navigate("/Kambaz/Account/Signin")}>Signout</Button>
    </div>
  );
}
