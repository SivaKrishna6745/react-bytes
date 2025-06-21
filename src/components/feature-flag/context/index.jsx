import { createContext, useEffect, useState } from 'react';
import fetchFeatureFlagsServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);
const FeatureFlagsGlobalState = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    const fetchFeatureFlags = async () => {
        setLoading(true);
        try {
            const response = await fetchFeatureFlagsServiceCall();
            console.log(response);
            setEnabledFlags(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchFeatureFlags();
    }, []);
    return <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>{children}</FeatureFlagsContext.Provider>;
};

export default FeatureFlagsGlobalState;
