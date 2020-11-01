import {
  GET_ASSIGNMENTS_LIST_FAIL,
  GET_ASSIGNMENTS_LIST_SUCCESS,
  // GET_ASSIGNMENT_DETAIL_FAIL,
  // GET_ASSIGNMENT_DETAIL_SUCCESS,
  // CREATE_ASSIGNMENT_FAIL,
  // CREATE_ASSIGNMENT_SUCCESS
} from "./assignmentTypes";


const initialState = {
  assignmentes: [],
};


export default function Assignment(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ASSIGNMENTS_LIST_SUCCESS:

      return {
        ...state,
        assignmentes: payload,
      };
    case GET_ASSIGNMENTS_LIST_FAIL:
      return {
        ...state,
        assignments: "null",
      };
    default:
      return state;
  }
}


