"use client";

import React, { useState } from "react";
import LoadingContext from "./LoadingContext";

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  return (
    <LoadingContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}