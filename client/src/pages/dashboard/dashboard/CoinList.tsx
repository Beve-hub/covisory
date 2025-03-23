import { useEffect, useRef } from "react";



const GeckoCoinList = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "350",
        defaultColumn: "overview",
        screener_type: "crypto_mkt",
        displayCurrency: "USD",
        colorTheme: "light",
        locale: "en",
        isTransparent: true,
      });
      
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(script);
      }
    }, []);
  
    return (
        <div className="bg-[var(--card-color)] ">
      <div className="tradingview-widget-container w-full h-full bg-transparent">
        <div ref={containerRef} className="tradingview-widget-container__widget"></div>
        <div className="text-center text-blue-500 mt-2">
          <a
            href="https://www.tradingview.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
        
          </a>
        </div>
      </div>
      </div>
  );
};

export default GeckoCoinList;
