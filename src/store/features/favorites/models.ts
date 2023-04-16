import { Art } from '../../../models/Art';

export type InitialState = {
    loading: boolean;
    arts: Art[];
    error: string;
};
