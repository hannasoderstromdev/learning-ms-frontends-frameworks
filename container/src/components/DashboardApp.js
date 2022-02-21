import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/Dashboard";

const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
