'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ParamConfig } from '../rules/params';
import { DEFAULT_PARAM_CONFIG } from '../rules/params';

interface ConfigContextType {
  config: ParamConfig;
  updateConfig: (newConfig: ParamConfig) => void;
  resetConfig: () => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<ParamConfig>(DEFAULT_PARAM_CONFIG);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('seo-playground-config');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const merged = {
          ...DEFAULT_PARAM_CONFIG,
          ...parsed,
        };
        setConfig(merged);
      } catch (e) {
        console.error('Failed to parse stored config', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateConfig = (newConfig: ParamConfig) => {
    setConfig(newConfig);
    localStorage.setItem('seo-playground-config', JSON.stringify(newConfig));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_PARAM_CONFIG);
    localStorage.removeItem('seo-playground-config');
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <ConfigContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within ConfigProvider');
  }
  return context;
}
