export const checkBudget = (budget, bleft) => {
  let clss;

  if (budget / 4 > bleft) {
    clss = "alert alert-danger";
  } else if (budget / 2 > bleft) {
    clss = "alert alert-warning";
  } else {
    clss = "alert alert-success";
  }

  return clss;
};
