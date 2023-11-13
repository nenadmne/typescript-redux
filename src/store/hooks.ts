import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFuntion = () => AppDispatch;

export const useCartDispatch: DispatchFuntion = useDispatch;