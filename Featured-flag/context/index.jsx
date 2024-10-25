import { createContext, useEffect, useState } from "react";
import feautureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlag, setEnabledFlag] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await feautureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlag(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enabledFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
