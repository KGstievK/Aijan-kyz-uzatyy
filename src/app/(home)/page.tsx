"use client";

import Home from "@/components/pages/Home";
import React from "react";
import { usePathname } from "next/navigation";

const page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
