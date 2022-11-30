

const lista = document.getElementById('uli');

DataGit = async() => {
    try {
        const resp = await fetch('https://api.github.com/users/SebastianM29/repos')
        const result =await resp.json()


       result.map((item) => {
       let li = document.createElement('li')
       li.className = 'repo_git'
       li.innerHTML = `
       <strong>${item.name.toUpperCase()}</strong>
       <a href="${item.clone_url}"color="red">URL: ${item.clone_url}</a>`



lista.appendChild(li)
})



    


} catch (error) {
        return error
        
    }


}
DataGit();