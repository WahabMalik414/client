import React, { useState } from "react";
import Button from "./Button";
import HomeContent from "./homeContent";
import News from "./NewsContent";
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="flex bg-purple-100 h-20 items-center border-black border-2">
        <p className="ml-10 text-lg font-semibold">PALMSREPORT.com</p>
      </div>
      <div className="flex h-20 bg-purple-100 justify-left gap-5 pl-5 items-center">
      <Button isActive={activeIndex == 0} onShow={()=>setActiveIndex(0)} text="Home" />
        <Button isActive={activeIndex == 1} onShow={()=>setActiveIndex(1)} text="News" />
        <Button isActive={activeIndex == 2} onShow={()=>setActiveIndex(2)}  text="Issues" />
        <Button isActive={activeIndex == 3}  onShow={()=>setActiveIndex(3)} text="Voting" />
        <Button isActive={activeIndex == 4}  onShow={()=>setActiveIndex(4)} text="Financial" />
      </div>
      <div className="flex flex-col bg-purple-100">
      
              {activeIndex === 0 && <HomeContent/>}
              {activeIndex === 1 && <News/>}
        
      </div>
    </>
  );
}

export default App;
