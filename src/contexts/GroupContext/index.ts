import { NormilizedData } from './../../utils/normilizeData';
import { createContext } from "react";

export const groupContext = createContext<NormilizedData>([[], []])