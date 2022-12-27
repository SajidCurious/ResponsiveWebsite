import React, { useEffect, useState } from "react";

const GoTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  // scroll data
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    //   conditions for arrow button to appear
    if (winScroll > listenToScroll) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {/* {isVisible && ( */}
      <div className="goToTop" onClick={goToBtn}>
        <i class="fa-sharp fa-solid fa-arrow-up"></i>
      </div>
      {/* )} */}
    </>
  );
};

export default GoTopBtn;
