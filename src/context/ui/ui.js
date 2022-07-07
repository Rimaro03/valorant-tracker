import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);

  const value = { drawerOpen, setDrawerOpen, showSearchBox, setShowSearchBox, loadingOpen, setLoadingOpen };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
