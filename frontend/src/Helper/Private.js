import React, { useEffect, useState } from "react";
// import axios from "axios";
import Http from "./Http";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrivateSpinner from "./PrivateSpinner";
const Private = ({ children }) => {
  const { userToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await Http.get(
          "/api/v1/auth/admin-auth",
           {
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Cache-Control": "no-cache",
            "If-None-Match": "<ETAG_VALUE>",
        
          },
          }
        );
        if (!res.data.ok) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setOk(true);
        }
      } catch (error) {}
    };
    if (userToken) authCheck();
  }, [userToken,navigate]);
  return ok ? <>{children}</> : <PrivateSpinner />;
};

export default Private;
