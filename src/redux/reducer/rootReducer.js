import { combineReducers, rootReducer } from "redux";

const defaultState = {
  activeId: "0",
  arrNow: ["0"],
  arrMemory: [],
  answer: "",
  answerShort: ""
};

export const pushReducer = (state = defaultState, action) => {
  console.log(state.arrNow);
  if (action.activeId === "AC") {
    return defaultState;
  }
  if (
    //kai yra nulis kad ji pakeistu tik kitas skaicius
    state.arrNow[0] === "0" &&
    (action.activeId === "0" ||
      action.activeId === undefined ||
      action.activeId === "/" ||
      action.activeId === "*" ||
      action.activeId === "+" ||
      action.activeId === "=")
  ) {
    return defaultState;
  }
  if (
    state.arrNow.length === 1 &&
    state.arrNow[0] === "0" &&
    action.activeId !== "."
  ) {
    //kad 0 pakeistu o nedarasytu ispradziu
    const newState = Object.assign({}, state, {
      activeId: action.activeId,
      arrNow: [action.activeId],
      arrMemory: [action.activeId]
    });
    return newState;
  }

  if (
    (state.arrNow === "/" &&
      (action.activeId === "/" ||
        action.activeId === "*" ||
        action.activeId === "+" ||
        action.activeId === "-")) || //kad nunulotu now
    (state.arrNow === "*" &&
      (action.activeId === "/" ||
        action.activeId === "*" ||
        action.activeId === "+" ||
        action.activeId === "-")) ||
    (state.arrNow === "+" &&
      (action.activeId === "/" ||
        action.activeId === "*" ||
        action.activeId === "+" ||
        action.activeId === "-")) ||
    (state.arrNow === "-" &&
      (action.activeId === "/" ||
        action.activeId === "*" ||
        action.activeId === "+" ||
        action.activeId === "-"))
  ) {
    const newState = Object.assign({}, state, {
      activeId: action.activeId,
      arrNow: action.activeId,
      arrMemory: state.arrMemory.slice(0, -1).concat(action.activeId),
      answer: "",
      answerShort: ""
    });
    return newState;
  }

  if (
    action.activeId === "/" || //kad nunulotu now
    action.activeId === "*" ||
    action.activeId === "+" ||
    action.activeId === "-"
  ) {
    const newState = Object.assign({}, state, {
      activeId: action.activeId,
      arrNow: action.activeId,
      arrMemory: state.arrMemory.concat(action.activeId),
      answer: "",
      answerShort: ""
    });
    return newState;
  }

  if (
    action.activeId === "=" &&
    (state.arrNow === "/" ||
      state.arrNow === "*" ||
      state.activeId === "+" ||
      state.activeId === "-" ||
      state.activeId === ".")
  ) {
    state.arrMemory.pop();  //blogai sitas
    const newState = Object.assign({}, state, {
      activeId: action.activeId,
      arrNow: [],
      arrMemory: [],
      answer: state.arrMemory.concat(
        action.activeId,
        eval(state.arrMemory.join(""))
      ),
      answerShort: eval(state.arrMemory.join(""))
    });
    return newState;
  }
  if (action.activeId === "=") {
    //paspaudus = skaiciuokjam
    const newState = Object.assign({}, state, {
      activeId: action.activeId,
      arrNow: [],
      arrMemory: [],
      answer: state.arrMemory.concat(
        action.activeId,
        eval(state.arrMemory.join(""))
      ),
      answerShort: eval(state.arrMemory.join(""))
    });
    return newState;
  }

  return {
    activeId: action.activeId,
    arrNow: state.arrNow.concat(action.activeId),
    arrMemory: state.arrMemory.concat(action.activeId)
  };
};
