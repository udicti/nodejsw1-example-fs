function getLogin(name){
    return`
    <div style="min-height: 100vh;
     display: flex; flex-direction: column; justify-content: 
     center; align-items: center">
    <form method="post" action="/users/login">
        <label>
        <p>${name}</p>
           <input name="username" type="text" placeholder="username">
        </label>
        <label>
        <p>Password</p>
           <input name="password" type="password" placeholder="username">
        </label>
        <button>Save</button>
    </form>
    </div>
    `
}

exports.loginUi = getLogin;
