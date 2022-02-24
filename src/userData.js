const fakeUserData = {
    id: '001',
    email: 'h.potter@hogwarts.com',
    firstName: 'Harry',
    lastName: 'Potter',
}

export const fetchUser = (email, password) => new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve(fakeUserData)
        } catch (error) {
            reject(error);
        }
    }, 1000);
});