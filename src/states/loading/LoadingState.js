import React, { useState } from "react";
import LoadingContext from "./LoadingContext";

export default function LoadingState({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoadint = () => setLoading(false);
  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoadint }}>
      {children}
    </LoadingContext.Provider>
  );
}
