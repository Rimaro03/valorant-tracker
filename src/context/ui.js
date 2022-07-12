import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [loadingOpen, setLoadingOpen] = useState(false);
  const [showSchema, setShowSchema] = useState(false);
  const [schemaMap, setSchemaMap] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [matchDataOpen, setMatchDataOpen] = useState(false);
  const [selectedModes, setSelectedModes] = useState([]);

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
    loadingOpen,
    setLoadingOpen,
    showSchema,
    setShowSchema,
    schemaMap,
    setSchemaMap,
    snackOpen,
    setSnackOpen,
    matchDataOpen,
    setMatchDataOpen,
    selectedModes,
    setSelectedModes
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
