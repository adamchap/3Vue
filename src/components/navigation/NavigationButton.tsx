import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

interface NavigationButtonProps {
  link: string;
  title: string;
}

/**
 * Button specific to navigation
 */
const NavigationButton = ({ link, title }: NavigationButtonProps) => {
  /**
   * Mock function since the endpoint is a placeholder
   */
  const handleRouting = () => {
    console.info(
      "since the url is a placeholder, the link would typically route us"
    );
    console.info("url is: ", link);
  };
  return (
    <div>
      <Link to={link}>
        <Button className="btn btn-dark text-white" onClick={handleRouting}>
          <div className="d-flex gap-3">
            {title}
            <MoveRight />
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default NavigationButton;
