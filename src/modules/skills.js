import skills from "../data/skills";

const ACTION_HANDLERS = {};
const initialState = {
  skills: skills
};
export const skillsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
