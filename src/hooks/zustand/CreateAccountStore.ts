import { create } from "zustand";
import { connectedUser } from "../../Config/Auth";

interface ProfileApi {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface PurchaseApi {
  confirmed: boolean;
}

interface AddressApi {
  street: string;
  zipCode: string;
  city: string;
  country: {
    code: string;
    label: string;
    phone: string;
  };
}

interface AccountApi {
  profile: ProfileApi;
  purchase: PurchaseApi;
  address: AddressApi;
}

interface CreateAccountState {
  account: AccountApi;
  setAccount: (account: AccountApi) => void;
  setProfile: (profile: ProfileApi) => void;
  setPurchase: (purchase: PurchaseApi) => void;
  setAddress: (address: AddressApi) => void;
}

const useCreateAccountStore = create<CreateAccountState>((set, get) => {
  const user = connectedUser();

  // TODO: get user address

  const initAccount: AccountApi = {
    profile: {
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      email: user?.email ?? "",
      password: "",
    },
    purchase: {
      confirmed: false,
    },
    address: {
      street: "",
      zipCode: "",
      city: "",
      country: {
        code: "",
        label: "",
        phone: "",
      },
    },
  };
  return {
    account: initAccount,
    setAccount: (account) => set((prev) => ({ ...prev, account })),
    setProfile: (profile) => get().setAccount({ ...get().account, profile }),
    setPurchase: (purchase) => get().setAccount({ ...get().account, purchase }),
    setAddress: (address) => get().setAccount({ ...get().account, address }),
  };
});

export default useCreateAccountStore;
