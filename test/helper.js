
// perform code that needs to be run before entire test

before(() => {
    process.stdout.write(`->> Welcome to the testing program. \
We will now begin testing all the specs. <<-\n\n`)
});

after(() => {
    process.stdout.write(`->> Thank you for running tests. \
Tests have now finished running. <<-\n\n`)
});