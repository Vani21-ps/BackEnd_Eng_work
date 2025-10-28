const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,   // Read from keyboard
    output: process.stdout  // Write to console
});
rl.question('Enter username: ', (username) => {
    // After first answer, ask second question
    const userData = fs.readFileSync('user.txt', 'utf8');
const users = userData.split('\n').map(line => line.split(',')[0]);
    if (users.includes(username)) {
        rl.question('Enter product: ', (product) => {
            console.log(`User: ${username}, Product: ${product}`);
            fs.appendFileSync("OrderHistory.txt", `User: ${username}, Product: ${product}\n`);
            rl.close();
        });
    } else {
        console.log("Invalid username");
        rl.close();
    }
});