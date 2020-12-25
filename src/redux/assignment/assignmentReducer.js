import {
  GET_ASSIGNMENTS_LIST_SUCCESS,
  GET_ASSIGNMENTS_LIST_FAIL,
  GET_ASSIGNMENT_DETAIL_SUCCESS,
  GET_ASSIGNMENT_DETAIL_FAIL,
  CREATE_ASSIGNMENT_SUCCESS,
  CREATE_ASSIGNMENT_FAIL,
  GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
  GET_GRADED_ASSIGNMENTS_LIST_FAIL,
  CREATE_GRADED_ASSIGNMENTS_LIST_SUCCESS,
  CREATE_GRADED_ASSIGNMENTS_LIST_FAIL
} from "./assignmentTypes";


const initialState = {
  assignmentes: [],
  gradidAssignmentes: [],
  assignmentesDetail: {},
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
    case GET_ASSIGNMENT_DETAIL_SUCCESS:
      return {
        ...state,
        assignmentesDetail: payload,
      };
    case GET_ASSIGNMENT_DETAIL_FAIL:
      return {
        ...state,
        assignmentesDetail: "null",
      };
    case GET_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return {
        ...state,
        gradidAssignmentes: payload,
      };
    case GET_GRADED_ASSIGNMENTS_LIST_FAIL:
      return {
        ...state,
        gradidAssignmentes: "null",
      };
    case CREATE_ASSIGNMENT_SUCCESS:
      return {
        ...state,
      };
    case CREATE_ASSIGNMENT_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}


