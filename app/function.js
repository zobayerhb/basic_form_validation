// BASIC FORM VALIDATION FUNCTION

// Alert check

const showAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn btn-close"></button></p>`;
};

// EMAIL CHECK
const emailCheck = (email) => {
  let pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{2,5}$/;
  return pattern.test(email);
};

// Bangladeshi cell Number check
const cellCheck = (cell) => {
  let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
  return pattern.test(cell);
};
