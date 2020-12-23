import axios from "axios";
import {
  GET_ASSIGNMENTS_LIST_SUCCESS,
  GET_ASSIGNMENTS_LIST_FAIL,
  GET_ASSIGNMENT_DETAIL_SUCCESS,
  GET_ASSIGNMENT_DETAIL_FAIL,
  CREATE_ASSIGNMENT_SUCCESS,
  CREATE_ASSIGNMENT_FAIL,
  GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
  GET_GRADED_ASSIGNMENTS_LIST_FAIL
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
  // if (localStorage.getItem("access")) {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `JWT ${localStorage.getItem("access")}`,
  //       Accept: "application/json",
  //     },
  //   };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/assignments/${id}/`,
      // config
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
  // } else {
  //   dispatch({
  //     type: GET_ASSIGNMENT_DETAIL_FAIL,
  //   });
  // }
};




// CREATE ASSIGNMENT 

export const createGradedASNT = (asnt) => async (dispatch) => {
  // if (localStorage.getItem("access")) {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `JWT ${localStorage.getItem("access")}`,
  //     Accept: "application/json",
  //   },
  // };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/graded-assignments/create/`,
      // config,
      asnt
    );

    dispatch({
      type: GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: GET_GRADED_ASSIGNMENTS_LIST_FAIL,
    });
  }
  // } else {
  //   dispatch({
  //     type: GET_ASSIGNMENT_DETAIL_FAIL,
  //   });
  // }
};



// CREATE ASSIGNMENT 

export const createASNT = (asnt) => async (dispatch) => {
  // if (localStorage.getItem("access")) {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `JWT ${localStorage.getItem("access")}`,
  //     Accept: "application/json",
  //   },
  // };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/assignments/`,
      // config,
      asnt
    );

    dispatch({
      type: CREATE_ASSIGNMENT_SUCCESS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: CREATE_ASSIGNMENT_FAIL,
    });
  }
  // } else {
  //   dispatch({
  //     type: GET_ASSIGNMENT_DETAIL_FAIL,
  //   });
  // }
};



