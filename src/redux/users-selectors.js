export const getUsersPage = (state) => {
  return state.usersPage.users;
};

export const getPageNumber = (state) => {
  return state.usersPage.pageNumber;
};

export const getUsersCount = (state) => {
  return state.usersPage.usersCount;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getIsFollowingProc = (state) => {
  return state.usersPage.isFollowingProc;
};
