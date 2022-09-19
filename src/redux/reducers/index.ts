import  myData  from "../../data/data.json";
import USER from "../constants";

const initalState = {
  usersData: myData,
  isLoading: false,
  isError: false,
};

const reducer = (state = initalState, action: { type: any; payload: { id: number; comment: any; }; }) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        usersData: action.payload,
        isLoading: false,
      };
      
      case 'LIKE_DISLIKE_ACTION': {
        const tempPostList = [...state.usersData];
        let id = action.payload.id;
        const findIndex = tempPostList.findIndex((data) => data.id === id);
        if (findIndex > -1) {
          if (tempPostList[findIndex].likes == 0) {
            tempPostList[findIndex].likes += 1;
          } else {
            tempPostList[findIndex].likes  = tempPostList[findIndex].likes + 1;
          }
        }
        return {
          ...state,
          postList: tempPostList,
        };
      }
      case 'COMMENT_ACTION': { 
        const tempPostList = [...state.usersData];
        let id = action.payload.id;
        const findIndex = tempPostList.findIndex((data) => data.id === id);
        if (findIndex > -1) {
          tempPostList[findIndex].comment.push(action.payload.comment)
        }
        return {
          ...state,
          postList: tempPostList,
        };
      }
    default:
      return state;
  }
};

export default reducer;