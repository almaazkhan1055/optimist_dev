import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { data } from "./data";
import PreLoader from "./components/PreLoader";
import { useSelector } from "react-redux";

const App = () => {
  const { headerData, footerData } = data;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const isHeaderFooterActive = useSelector(
    (state) => state.headerFooter.isHeaderFooterActive
  );

  return (
    <Router>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-[--testimonial-bg]">
          <PreLoader />
        </div>
      ) : (
        <>
          {isHeaderFooterActive && <Header headerData={headerData} />}
          <div className={`${isHeaderFooterActive && "pt-[60px]"}`}>
            <AppRoutes data={data} />
          </div>
          {isHeaderFooterActive && <Footer footerData={footerData} />}{" "}
        </>
      )}
    </Router>
  );
};

export default App;
