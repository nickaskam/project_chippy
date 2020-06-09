const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
