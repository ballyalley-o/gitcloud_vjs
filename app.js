//Initialize Github
const github = new Github
const ui = new UI

 //search for the user dom
const searchUser = document.getElementById('searchUser');


//add event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userKeyup = e.target.value;

    if (userKeyup !== '') {
        //make http call
        github.getUser(userKeyup)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert
                } else {
                    //show profile
                    ui.showProfile(data.profile)
                }
            })
    } else {
        //clear profile
    }
})
