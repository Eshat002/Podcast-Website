import React, { useEffect, useState } from "react";

const useIsLocal = () => {
  const [isLocal, setIsLocal] = useState(true);
  useEffect(() => {
    try {
      const isLocalhost =
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "localhost";
      setIsLocal(isLocalhost);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return isLocal;
};

export default useIsLocal;
