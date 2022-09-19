import  myData  from "../../data/data.json";


export const requestUsers=()=>{
  return{
      type:'LOAD',
      payload:myData
  }
}

export const myLike=(id)=>{
  return{
      type:'LIKE_DISLIKE_ACTION',
      payload:{id}
  }
}

export const myComment=(comment, id)=>{
  return{
      type:'COMMENT_ACTION',
      payload: {comment, id}
  }
}

