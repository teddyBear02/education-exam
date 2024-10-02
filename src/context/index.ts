import { RoleDataType } from '@/models/store/user.type';
import { createContext, useContext } from 'react';


export type AppContextProps = {
  loading: boolean,
  setLoading: (value: boolean) => void
  accountRole: RoleDataType | null
  setAccountRole: (d: RoleDataType) => void
}

const defaultContext = {
    loading: false,
    setLoading: () => {
    },
  accountRole: RoleDataType.USER,
  setAccountRole: () => {
  },
};

const AppContext = createContext<AppContextProps>(defaultContext);

export const ContextProvider = AppContext.Provider;

export const useAppContext = () => useContext(AppContext);

export default AppContext;