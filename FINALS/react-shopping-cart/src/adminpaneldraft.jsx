<<<<<<< HEAD

/* import { useState } from "react";
export default function adminPanel(props) {
    let accounts = props.accounts

    const [devlogs, setDevlogs] = useState();

    function addDevlog(){
        let devlog = {
            date: newDate().getFullYear() + "-" +
            (new Date().getMonth() + 1) + "-" +
            new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        }
        setDevlogs(d => [...d, devlog])
        document.getElementById("title").value = ""
        document.getElementById("content").value = ""

        const renderAccounts = () => {
            return (
                accouns.map((account)=> {
                    return (
                        <div>
                            <h2 key = {account.id}>{account.username}</h2>
                            <p>{account.role}</p>
                        </div>
                    )
                })
            )
        }
        const renderDevLogHistory = () => {
            return(
                devlogs.map((devlog) => {
                    return (
                        <div>
                            <h2>{devlog.title}</h2>
                            <p>{devlog.date}</p>
                            <p>{devlog.content}</p>
                        </div>
                    )
                })
            )
        }

        if (props.isLoggedIn === false){
            return <Login />
        } else {
            return(
            <div>
                <h1>This is the Admin Panel</h1>
                <p>These are the active accounts:</p>
                {renderAccounts}
                <br />
                <hr />
                <h4>Admin Devlogs</h4>
                Title <input type="text" name = "title"
                id="title" />
                <br />
                <br />
                Content:
                <br />
                <textarea name="content" id="content"
                cols="50" rows="10"></textarea>
                <br />
                <button type = "submit" onClick={addDevlog}>Submit</button>
                <h4>Devlog History</h4>
                {renderDevLogHistory}
            </div>
            )
        }
    }
}
=======

/* import { useState } from "react";
export default function adminPanel(props) {
    let accounts = props.accounts

    const [devlogs, setDevlogs] = useState();

    function addDevlog(){
        let devlog = {
            date: newDate().getFullYear() + "-" +
            (new Date().getMonth() + 1) + "-" +
            new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        }
        setDevlogs(d => [...d, devlog])
        document.getElementById("title").value = ""
        document.getElementById("content").value = ""

        const renderAccounts = () => {
            return (
                accouns.map((account)=> {
                    return (
                        <div>
                            <h2 key = {account.id}>{account.username}</h2>
                            <p>{account.role}</p>
                        </div>
                    )
                })
            )
        }
        const renderDevLogHistory = () => {
            return(
                devlogs.map((devlog) => {
                    return (
                        <div>
                            <h2>{devlog.title}</h2>
                            <p>{devlog.date}</p>
                            <p>{devlog.content}</p>
                        </div>
                    )
                })
            )
        }

        if (props.isLoggedIn === false){
            return <Login />
        } else {
            return(
            <div>
                <h1>This is the Admin Panel</h1>
                <p>These are the active accounts:</p>
                {renderAccounts}
                <br />
                <hr />
                <h4>Admin Devlogs</h4>
                Title <input type="text" name = "title"
                id="title" />
                <br />
                <br />
                Content:
                <br />
                <textarea name="content" id="content"
                cols="50" rows="10"></textarea>
                <br />
                <button type = "submit" onClick={addDevlog}>Submit</button>
                <h4>Devlog History</h4>
                {renderDevLogHistory}
            </div>
            )
        }
    }
}
>>>>>>> 5d0e1034a9ec9a023f9ea8375d84e1bd5e95f81b
*/