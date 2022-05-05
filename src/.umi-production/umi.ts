// @ts-nocheck
import './core/polyfill';
import '../global.js';
import { plugin } from './core/plugin';
import './core/pluginRegister';
import { createHistory } from './core/history';
import { ApplyPluginsType } from 'C:/Users/1/Desktop/xiangmu2/zero-element-demo-page/node_modules/_@umijs_runtime@3.5.23@@umijs/runtime';
import { renderClient } from 'C:/Users/1/Desktop/xiangmu2/zero-element-demo-page/node_modules/_@umijs_renderer-react@3.5.23@@umijs/renderer-react';
import { getRoutes } from './core/routes';



import { _onCreate } from './plugin-locale/locale';
_onCreate();

const getClientRender = (args: { hot?: boolean; routes?: any[] } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    const opts = plugin.applyPlugins({
      key: 'modifyClientRenderOpts',
      type: ApplyPluginsType.modify,
      initialValue: {
        routes: args.routes || getRoutes(),
        plugin,
        history: createHistory(args.hot),
        isServer: process.env.__IS_SERVER,
        rootElement: 'root',
        defaultTitle: `demo-page`,
      },
    });
    return renderClient(opts);
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.5.23',
    };
  

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    const ret = require('./core/routes');
    if (ret.then) {
      ret.then(({ getRoutes }) => {
        getClientRender({ hot: true, routes: getRoutes() })();
      });
    } else {
      getClientRender({ hot: true, routes: ret.getRoutes() })();
    }
  });
}
