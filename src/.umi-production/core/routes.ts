// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/1/Desktop/xiangmu2/zero-element-demo-page/node_modules/_@umijs_runtime@3.5.23@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/Connection/index copy 2",
    "exact": true,
    "component": require('@/pages/Connection/index copy 2.js').default
  },
  {
    "path": "/Connection",
    "exact": true,
    "component": require('@/pages/Connection/index.js').default
  },
  {
    "path": "/Connection/JarItem",
    "exact": true,
    "component": require('@/pages/Connection/JarItem/index.js').default
  },
  {
    "path": "/connection_snapshot_ruler",
    "exact": true,
    "component": require('@/pages/connection_snapshot_ruler/index.js').default
  },
  {
    "path": "/connection_snapshot_ruler/JarItem",
    "exact": true,
    "component": require('@/pages/connection_snapshot_ruler/JarItem/index.js').default
  },
  {
    "path": "/dev/logs",
    "exact": true,
    "component": require('@/pages/dev/logs/index.js').default
  },
  {
    "path": "/dev/logs/JarItem",
    "exact": true,
    "component": require('@/pages/dev/logs/JarItem/index.js').default
  },
  {
    "path": "/helloworld",
    "exact": true,
    "component": require('@/pages/helloworld/index.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/list",
    "exact": true,
    "component": require('@/pages/list.js').default
  },
  {
    "path": "/nagation",
    "exact": true,
    "component": require('@/pages/nagation/index.js').default
  },
  {
    "path": "/nihao",
    "exact": true,
    "component": require('@/pages/nihao.js').default
  },
  {
    "path": "/Standalone",
    "exact": true,
    "component": require('@/pages/Standalone/index.js').default
  },
  {
    "path": "/Standalone/JarItem",
    "exact": true,
    "component": require('@/pages/Standalone/JarItem/index.js').default
  },
  {
    "path": "/Standalone/Sandbox",
    "exact": true,
    "component": require('@/pages/Standalone/Sandbox.js').default
  },
  {
    "path": "/Standalone/StandaloneBody",
    "routes": [
      {
        "path": "/Standalone/StandaloneBody",
        "exact": true,
        "component": require('@/pages/Standalone/StandaloneBody/index.js').default
      }
    ],
    "component": require('@/pages/Standalone/StandaloneBody/_layout.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
