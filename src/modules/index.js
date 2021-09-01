import { combineReducers } from "redux";

// import workout_exercise_groups from "./workoutExerciseGroups";

const rootReducer = combineReducers({
//   workout_exercise_groups
});

export default (state, action) => {
  if (action.type === "SIGNING_OUT_COMPLETED") {
    Object.keys(state).forEach(keys => {
      if (keys !== "auth" && keys !== "countryCities") {
        state[keys] = {};
      }
    });
  }
  return rootReducer(state, action);
};
