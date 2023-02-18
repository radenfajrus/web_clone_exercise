import { Routes, Route } from "react-router-dom";
import React, { FC } from "react";

const NoLayout = ({ children }: any ) => {
  return (
    <div className="relative min-h-screen w-full">
      {children}
    </div>
  );
}

NoLayout.displayName = "/src/layouts/NoLayout.tsx";

export default NoLayout;
