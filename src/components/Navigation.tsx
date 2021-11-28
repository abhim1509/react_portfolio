import { Link } from "react-router-dom";
import navigationStyle from "@/styles/navigation";

const Navigation = () => {
  return (
    <>
      <div style={navigationStyle}>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        <div>
          <Link to={`/projects`}>Projects</Link>
        </div>

        <div>
          <Link to={`/about`}>About</Link>
        </div>

        <div>
          <Link to={`/contact`}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
