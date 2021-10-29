import cuid from "cuid";
import { createContext, useState } from "react";
import data from "../data";

const DataContext = createContext({
  requests: [],
  user: {},
});

export const DataContextProvider = (props) => {
  const [requests, setRequests] = useState(data.productRequests);
  const [user, setUser] = useState(data.currentUser);

  function addComment(comment, productId) {
    const { content } = comment;

    const request = requests.find((product) => {
      return product.id === productId;
    });

    request.comments.push({
      id: cuid(),
      content,
      user,
    });

    setRequests([...requests]);
  }

  return (
    <DataContext.Provider
      value={{ requests: requests, user: user, addComment: addComment }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataContext;
