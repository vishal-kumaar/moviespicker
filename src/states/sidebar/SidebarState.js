import React, { useState } from "react";
import SidebarContext from "./SidebarContext";

export default function SidebarState({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  };
  
  return (
    <SidebarContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
