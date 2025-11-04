'use client';

import React, { createContext, useContext } from 'react';
import type { ParamConfig } from '../rules/params';
import { DEFAULT_PARAM_CONFIG } from '../rules/params';

interface ConfigContextType {
  config: ParamConfig;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigContext.Provider value={{ config: DEFAULT_PARAM_CONFIG }}>
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
