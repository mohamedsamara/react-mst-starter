import { useContext } from "react";

import { MobXProviderContext } from "mobx-react";

const useStore = () => {
  return useContext(MobXProviderContext).store;
};

export default useStore;
