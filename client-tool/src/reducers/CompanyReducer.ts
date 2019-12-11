import {ActionType, getType} from 'typesafe-actions';

import * as actions from "../actions";
import {Company, Node} from "keeperapi";

type Action = ActionType<typeof actions>;

export interface CompanyState {
    readonly company?: Company;
    readonly lastError?: {
        node: Node,
        message: string
    };
}

const initialState = {
};

export const companyReducer = (state: CompanyState = initialState, action: Action): CompanyState => {

    switch (action.type) {

        case getType(actions.logoutAction):
            return {
                ...state,
                company: undefined
            };

        case getType(actions.loadedAction):
            return {
                ...state,
                company: action.payload,
                lastError: undefined
            };

        case getType(actions.epicFailureAction):
            console.log(action.payload.error || action.payload || "unknown error");
            return {...state};

        case getType(actions.nodeConversionErrorAction):
            return {
                ...state,
                lastError: {
                    node: action.payload.node,
                    message: action.payload.error.message || action.payload.error
                }
            };

        case getType(actions.progressAction):
            let error = action.payload ? undefined : state.lastError;
            return {
                ...state,
                lastError: error
            };

        default:
            return state;
    }
};
