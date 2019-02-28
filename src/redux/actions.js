

export const hendleNumber = id => {
    return {
      type: "number",
      activeId: id
    };
  };

  export const hendleDecimal = id => {
    return {
      type: "decimal",
      activeId: id
    };
  };

  export const hendleEquals = id => {
    return {
      type: "equals",
      activeId: id
    };
  };

  export const hendleSubstract = id => {
    return {
      type: "substract",
      activeId: id
    };
  };
  export const hendleAction = id => {
    return {
      type: "action",
      activeId: id
    };
  };

