import { Module2 } from "../../models/modules.ts";
import NavigationButton from "../../../components/navigation/NavigationButton.tsx";
import { useState } from "react";

interface ProductBannerProps {
  productInformation: Module2;
  imageRendered: (isRendered: boolean) => void;
}

const ProductBanner = ({
  productInformation,
  imageRendered,
}: ProductBannerProps) => {
  // state of the image load, we do not want to render the text and then wait for the image
  const [imageLoaded, setImageLoaded] = useState(false);

  /**
   * When image is loaded we set its state to true so rest of component can render
   */
  const handleImageLoad = () => {
    setImageLoaded(true);
    imageRendered(true);
  };
  return (
    <div className="bg-light mx-auto w-100 mt-3 d-flex flex-column flex-md-row justify-content-center gap-6">
      {/* Title and description */}

      <div className="col-12 col-md-6 ms-5 text-start">
        {imageLoaded && (
          <>
            <p className="fs-1 mb-3">{productInformation?.subtitle}</p>
            <div className="mt-3 d-flex flex-column justify-content-center">
              <p className="w-75">
                Discover our premium natural health product -{" "}
                {productInformation?.title}, carefully crafted to enhance your
                wellbeing.
              </p>
            </div>
            <div className="mt-5">
              <NavigationButton
                link={productInformation?.linkUrl}
                title={productInformation?.linkTitle}
              />
            </div>
          </>
        )}
      </div>

      <div className="col-12 col-md-6 d-flex rounded mt-3 mb-3 justify-content-center">
        <img
          className="rounded w-90"
          src={productInformation?.imageUrl}
          alt=""
          onLoad={handleImageLoad}
          onError={(e) => {
            e.currentTarget.src = "/sprout.png";
            e.currentTarget.style.width = "125px";
            e.currentTarget.style.height = "125px";
            setImageLoaded(true);
            imageRendered(true);
          }}
        />
      </div>
    </div>
  );
};

export default ProductBanner;
