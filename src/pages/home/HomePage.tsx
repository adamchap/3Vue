import { useEffect, useState } from "react";
import { ModulesData } from "../../models/modules.ts";
import { mockData } from "../../mockData/mockData.ts";
import { fetch3vueData } from "../../services/threeVueService.ts";
import ProductBanner from "./components/ProductBanner.tsx";
import ProductAccordian from "./components/ProductAccordian.tsx";

const HomePage = () => {
  // state of our data fetching process
  const [loading, setLoading] = useState(true);

  // state to control when we show other components.  we do not want to show
  // others until the banner image has rendered so the page does not jump around and re-render
  const [isImageRendered, setIsImageRendered] = useState(false);

  // since this data is not changing using useRef, also allows us to access data outside the useEffect
  const [healthProductData, setHealthProductData] = useState<
    ModulesData[] | null
  >(null);

  // want to fetch this data without any user interaction so it is in useEffect
  useEffect(() => {
    const loadModules = async () => {
      try {
        const data = await fetch3vueData();
        setHealthProductData(data);
      } catch (err) {
        console.error(err);
        // if we error for any reason we can at least use the mockData
        setHealthProductData(mockData);
      } finally {
        // updating our state value of fetching since the fetch is finished
        setLoading(false);
      }
    };
    loadModules();
  }, []);

  useEffect(() => {
    console.log("loading status: ", loading);
  }, [loading]);

  /**
   * Handles when image from banner is rendered.  We then can render the other components
   */
  const handleRenderedImage = (isRendered: boolean) => {
    setIsImageRendered(isRendered);
  };

  return (
    <div className="h-100">
      {/* only render when loaded and product is there */}
      {!loading && healthProductData && (
        <div>
          <ProductBanner
            productInformation={healthProductData?.[1]?.module2}
            imageRendered={handleRenderedImage}
          />
          {isImageRendered && (
            <div className="mt-2">
              <p className="fs-3 ms-5">Dive into the details below!</p>
              <ProductAccordian
                productDetails={healthProductData?.[0]?.module1}
              />
            </div>
          )}
        </div>
      )}

      {/* render this when loading and performing fetch - usually would be something like a spinner or skeleton etc */}
      {loading && <div></div>}
    </div>
  );
};

export default HomePage;
