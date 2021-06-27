
// для follow / unfollow
export const followUnfollow = (users, userId, followOrUnfollow) => {
    const newArray = users.map((user) => {
        if (user.id === userId) {
            return {...user, followed: followOrUnfollow};
        }
        return user;
    });

    return newArray;
}