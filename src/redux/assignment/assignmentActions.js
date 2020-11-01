import axios from "axios";
import {
  GET_ASSIGNMENTS_LIST_FAIL,
  GET_ASSIGNMENTS_LIST_SUCCESS,
  GET_ASSIGNMENT_DETAIL_FAIL,
  GET_ASSIGNMENT_DETAIL_SUCCESS,
  // CREATE_ASSIGNMENT_FAIL,
  // CREATE_ASSIGNMENT_SUCCESS
} from "./assignmentTypes";

// GET ASSIGNMENT

export const getASNTS = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/assignments/`,
        config
      );

      dispatch({
        type: GET_ASSIGNMENTS_LIST_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: GET_ASSIGNMENTS_LIST_FAIL,
      });
    }
  } else {
    dispatch({
      type: GET_ASSIGNMENTS_LIST_FAIL,
    });
  }
};



// GET ASSIGNMENT DETAIL


export const getASNTSDetail = (id) => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/assignments/${id}/`,
        config
      );

      dispatch({
        type: GET_ASSIGNMENT_DETAIL_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      dispatch({
        type: GET_ASSIGNMENT_DETAIL_FAIL,
      });
    }
  } else {
    dispatch({
      type: GET_ASSIGNMENT_DETAIL_FAIL,
    });
  }
};




// // CREATE ASSIGNMENT 

// const createASNTStart = () => {
//   return {
//     type: CREATE_ASSIGNMENT_START
//   };
// };

// const createASNTSuccess = assignment => {
//   return {
//     type: CREATE_ASSIGNMENT_SUCCESS,
//     assignment
//   };
// };

// const createASNTFail = error => {
//   return {
//     type: CREATE_ASSIGNMENT_FAIL,
//     error: error
//   };
// };

// export const createASNT = (asnt) => {
//   return dispatch => {
//     dispatch(createASNTStart());
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: `JWT ${localStorage.getItem("access")}`,
//       Accept: "application/json",
//     };
//     axios
//       .post(`http://127.0.0.1:8000/assignments/`, asnt)
//       .then(res => {
//         dispatch(createASNTSuccess());
//       })
//       .catch(err => {
//         dispatch(createASNTFail());
//       });
//   };
// };