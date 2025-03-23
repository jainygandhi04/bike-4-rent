import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FloatButton } from "antd";
import Loading from "./components/Loading";
import "./App.css";

// Lazy load major components
const App1 = lazy(() => import("./components/App1"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));


function App() {
  const [loading, setLoading] = useState(true);

  // Loader for splash screen
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='bg-slate-50'>
          <Suspense fallback={<Loading />}>
          <Routes>
  <Route path="/*" element={<App1 />} />

 
</Routes>

          </Suspense>
          <FloatButton.BackTop type='primary' visibilityHeight={50} />
        </div>
      )}
    </>
  );
}

export default App;
