import { createContext } from 'react';

type AppContextState = { isMenuOpen: boolean }

const appCtxDefaultValue = {
    state: { isMenuOpen: false },
    setState: (state: AppContextState) => {} // noop default callback
};
  

const HeaderContext = createContext(appCtxDefaultValue)
export default HeaderContext;