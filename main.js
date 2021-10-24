// variáveis: let ou const
// variável const não pode ser mudado seu valor
// só a variável let pode ser mudado seu valor
// camelCase, PascalCase e snake_case
const LinksSocialMedia = {
  github: 'M3NDESDEV',
  youtube: 'UCmFap0BoyuMaPeOw5guG08w',
  instagram: 'm3ndesdevx_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
