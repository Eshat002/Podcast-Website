import React, { useState, useEffect } from "react";
import useIsLocal from "./useIsLocal";

const useImagePrefix = () => {
  const [imagePrefix, setImagePrefix] = useState("");
  const isLocal = useIsLocal();

  useEffect(() => {
    // const isLocalhost =
    //   window.location.hostname === "127.0.0.1" ||
    //   window.location.hostname === "localhost";
    const imagePrefixUrl = isLocal
      ? "http://127.0.0.1:8000"
      : "http://renderdomain.com/";
    setImagePrefix(imagePrefixUrl);
  }, []);

  return imagePrefix;
};

export default useImagePrefix;
