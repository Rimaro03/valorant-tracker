import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Player = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem("playerInfo")) {
      navigate("/");
    }
  }, []);
  return <div>player</div>;
};
