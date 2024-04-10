import NavMenu from "@/components/NavMenu";
import React from "react";

export default function Provider({ children }) {
  return (
    <div>
      <NavMenu />
      {children}
    </div>
  );
}
