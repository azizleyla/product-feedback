import { createContext } from "react";
import data from "../data";

const DataContext = createContext({
    requests: [],
    user: {}
})

export const DataContextProvider = (props) => {
    return (
        <DataContext.Provider value={{ requests: data.productRequests, user: data.currentUser }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContext