document.getElementById('git_data').onclick = get_user_data
text_field = document.getElementById('username')

function get_user_data() {
    fetch(`https://api.github.com/users/${text_field.value}`)
    .then(response => response.json() )
    .then(user_data => {
        console.log(user_data)
        let avatar_url = user_data.avatar_url
        let name = user_data.name
        let followers = user_data.followers

        if (document.getElementById('main_container')){
            document.getElementById('main_container').remove()
        }

        const container = document.createElement('div')
        container.id = 'main_container'
        document.body.appendChild(container)

        const header = document.createElement('h1')
        header.innerText = `${name} has ${followers} followers!`
        container.appendChild(header)

        const avatar = new Image()
        avatar.src = avatar_url
        container.appendChild(avatar)
    })
    .catch(err => console.log(err))
}