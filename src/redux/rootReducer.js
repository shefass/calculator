const defaultState = {
  activeId: "0",
  arrNow: ["0"],
  arrMemory: [],
  answer: [],
  answerShort: []
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "clear":
      return defaultState;
    case "decimal":
      if (
        state.arrNow[0] === "/" ||
        state.arrNow[0] === "+" ||
        state.arrNow[0] === "-" ||
        state.arrNow[0] === "*" ||
        state.arrNow[0] === undefined ||
        state.arrNow.some(a => a === ".")
      ) {
        return {
          ...state
        };
      } else if (state.arrNow[0] === "0" && state.arrMemory.length < 2) {
        return {
          activeId: action.activeId,
          arrNow: state.arrNow.concat(action.activeId),
          arrMemory: state.arrNow.concat(action.activeId) //at first arrMemory empty
        };
      } else {
        return {
          activeId: action.activeId,
          arrNow: state.arrNow.concat(action.activeId),
          arrMemory: state.arrMemory.concat(action.activeId)
        };
      }
    case "equals":
      if (state.arrNow[0] === "0" && state.arrNow.length < 2) {
        return defaultState;
      } else if (
        state.arrNow === "/" ||         //this need for eval to work
        state.arrNow === "*" ||
        state.activeId === "+" ||
        state.activeId === "-" ||
        state.activeId === "."
      ) {
        let temp = state.arrMemory.slice(0, -1); 
        const calculation = eval(temp.join(""));
        return {
          ...state,
          activeId: action.activeId,
          arrNow: [],
          arrMemory: [],
          answer: [...temp, action.activeId, calculation],
          answerShort: [calculation]
        };
      } else {
        const calculation = eval(state.arrMemory.join(""));
        return {
          ...state,
          activeId: action.activeId,
          arrNow: [],
          arrMemory: [],
          answer: [
            ...state.arrMemory,
            action.activeId,
            calculation
          ],
          answerShort: [calculation]
        };
      }
    case "action":
      if (state.arrNow[0] === undefined) {   //after equal arrNow becomes empty
         return {
           ...state,
           activeId: action.activeId,
           arrNow: action.activeId,
           arrMemory: state.answerShort.concat(action.activeId),
           answer: [],
           answerShort: []         
          }
      }
      else if (
        state.arrNow.length === 1 &&
        state.arrNow[0] === "0" &&
        action.activeId === "-"
      ) {
        return {
          ...state,
          activeId: action.activeId,
          arrNow: action.activeId,
          arrMemory: [action.activeId]
        };
      } else if (state.arrNow[0] === "0" && state.arrNow.length < 2) {
        return defaultState;
      } else if (
        state.arrNow === "/" ||
        state.arrNow === "*" ||
        state.arrNow === "+" ||
        state.arrNow === "-"
      ) {
        return {
          ...state,
          activeId: action.activeId,
          arrNow: action.activeId,
          arrMemory: state.arrMemory.slice(0, -1).concat(action.activeId),
          answer: [],
          answerShort: []
        };
      } else {
        return {
          ...state,
          activeId: action.activeId,
          arrNow: action.activeId,
          arrMemory: state.arrMemory.concat(action.activeId),
          answer: [],
          answerShort: []
        };
      }
    case "number":
      if (state.arrNow.length === 1 && state.arrNow[0] === "0") {
        return {
          ...state,
          activeId: action.activeId,
          arrNow: [action.activeId],
          arrMemory: [action.activeId]
        };
      } else if (state.arrNow[0] === "-" && state.arrMemory.length < 2) {
        return {
          ...state,
          activeId: action.activeId,
          arrNow: state.arrNow.concat(action.activeId),
          arrMemory: state.arrMemory.concat(action.activeId)
        };
      } else if (
        state.arrNow.length < 2 &&
        (state.arrNow[0] === "-" ||
          state.arrNow[0] === "+" ||
          state.arrNow[0] === "*" ||
          state.arrNow[0] === "/")
      ) {
        return {
          ...state,
          activeId: action.activeId,
          arrNow: [action.activeId],
          arrMemory: state.arrMemory.concat(action.activeId)
        };
      } else {
        return {
          activeId: action.activeId,
          arrNow: state.arrNow.concat(action.activeId),
          arrMemory: state.arrMemory.concat(action.activeId)
        };
      }
    default:
      return state;
  }
};
