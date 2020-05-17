// INIT github and ui classes
const github = new GitHub;
const ui = new UI;

//Search Username
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found')
            {

            } else {
                ui.showProfile(data.profile);

            }
        })
    } else{
        ui.clearProfile();
    }
});