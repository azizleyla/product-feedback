import cuid from "cuid";
import { createContext, useReducer, useState } from "react";
import data from "../data";

const DataContext = createContext({
  requests: [],
  user: {},
});

const initialState = {
  requests: data.productRequests,
  user: data.currentUser,
};

function dataReducer(state, action) {
  if (action.type === "ADD_COMMENT") {
    const request = state.requests.find((product) => {
      return product.id === action.payload.productId;
    });

    console.log(action);
    request.comments.push({
      id: cuid(),
      content: action.payload.content,
      user: action.payload.user,
    });

    return {
      ...state,
      requests: [...state.requests],
    };
  }

  return state;
}

export const DataContextProvider = (props) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  function addComment(comment, productId) {
    // const { content } = comment;
    // const request = requests.find((product) => {
    //   return product.id === productId;
    // });
    // request.comments.push({
    //   id: cuid(),
    //   content,
    //   user,
    // });
    // setRequests([...requests]);
  }

  return (
    <DataContext.Provider value={{ reducerState: state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
