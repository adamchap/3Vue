import Accordion from "react-bootstrap/Accordion";
import NavigationButton from "../../../components/navigation/NavigationButton.tsx";
import { Module1 } from "../models/modules.ts";

interface ProductAccordian {
  productDetails: Module1;
}

const ProductAccordian = ({ productDetails }: ProductAccordian) => {
  return (
    <div className="container">
      <Accordion className="w-90 mx-auto">
        {productDetails?.subContent.map((details, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{details.title}</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex">
                <img
                  className="rounded me-3"
                  src={details.imageUrl}
                  alt={details.title}
                  style={{ width: "100px", height: "auto" }}
                  onError={(e) => {
                    e.currentTarget.src = "/sprout.png";
                    e.currentTarget.style.width = "125px";
                    e.currentTarget.style.height = "125px";
                  }}
                />
                <div>
                  <p>{details.description}</p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="d-flex justify-content-end mt-3">
        <NavigationButton
          link={productDetails?.linkUrl}
          title={productDetails?.linkTitle}
        />
      </div>
    </div>
  );
};

export default ProductAccordian;
