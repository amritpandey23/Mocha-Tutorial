const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('completed');
    }, 1000);
});

module.exports = wait;