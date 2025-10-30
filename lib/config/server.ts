import { cookies } from 'next/headers';
import { DEFAULT_PARAM_CONFIG } from '../rules/params';
import type { ParamConfig } from '../rules/params';

export function getServerConfig(): ParamConfig {
  const cookieStore = cookies();
  const configCookie = cookieStore.get('seo-playground-config');

  if (!configCookie) {
    return DEFAULT_PARAM_CONFIG;
  }

  try {
    const parsed = JSON.parse(decodeURIComponent(configCookie.value));
    const merged: ParamConfig = {
      ...DEFAULT_PARAM_CONFIG,
      ...parsed,
      robotsToggles: {
        ...DEFAULT_PARAM_CONFIG.robotsToggles,
        ...parsed.robotsToggles,
      },
    };
    return merged;
  } catch (e) {
    console.error('Failed to parse config cookie', e);
    return DEFAULT_PARAM_CONFIG;
  }
}
