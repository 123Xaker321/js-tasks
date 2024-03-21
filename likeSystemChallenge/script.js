let users;

function setUsers() {
    users = prompt("Введіть користувачів які лайкнули цей пост через кому").split(",");
}

function documentWriteUsers() {
    setUsers();
    if(users == ""){
        document.write(`no one likes this`);
        return;
    }
    switch (users.length) {
        case 1:
            document.write(`${users[0]} likes this`);
            break;
        case 2:
            document.write(`${users[0]} and ${users[1]} like this`);
            break;
        case 3:
            document.write(`${users[0]}, ${users[1]} and ${users[2]} like this`);
            break;
        default:
            document.write(`${users[0]}, ${users[1]} and ${users.length - 2} others like this`);
    }
}

documentWriteUsers();