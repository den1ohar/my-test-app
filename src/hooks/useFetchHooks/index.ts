import { useEffect, useState } from "react";

const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const useFetchHooks = () => {
  const [result, setResult] = useState<any>({
    status: "loading"
  });

  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${googleApiKey}`)
      .then((response) => response.json())
      .then((response) => setResult({ status: "loaded", payload: response }))
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default useFetchHooks;
