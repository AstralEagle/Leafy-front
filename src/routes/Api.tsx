import axios from "axios";
import { API_URL } from "./Url";

interface PaymentApi {
  amount: number;
  onSuccess: (response: any) => void;
  onError: (e: Error) => void;
}

export const secret =  ({amount, onSuccess, onError}: PaymentApi) => {
  return axios.post(API_URL + '/secret', { amount })
  .then(onSuccess)
  .catch(onError);
};