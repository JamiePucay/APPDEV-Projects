import { useState } from "react";

export default function AdminPanel(props) {
    const [devlogs, setDevlogs] = useState([]);  // Initialize devlogs as an empty array
    function addDevlog() {
        let devlog = {
            date: new Date().getFullYear() + "-" +
            (new Date().getMonth() + 1) + "-" +
            new Date().getDate(),
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        };
    
    setDevlogs(d => [...d, devlog]);
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    }

    const renderAccounts = () => {
        return props.accounts.map((account) => (
            <div key={account.id}>
                <h2>{account.username}</h2>
                <p>{account.role}</p>
            </div>
        ));
    };

    const renderDevLogHistory = () => {
        return devlogs.map((devlog, index) => (
            <div key={index}>
                <h2>{devlog.title}</h2>
                <p>{devlog.date}</p>
                <p>{devlog.content}</p>
            </div>
        ));
  };

    if (!props.isLoggedIn) {
        return <p>Please log in to access the admin panel.</p>;
    } else {
        return (
            <div>
                <h1>This is the Admin Panel</h1>
                <p>These are the active accounts:</p>
                {renderAccounts()}
                <br />
                <hr />
                <h4>Admin Devlogs</h4>
                Title <input type="text" name="title" id="title" />
                <br />
                <br />
                Content:
                <br />
                <textarea name="content" id="content" cols="50" rows="10"></textarea>
                <br />
                <button type="submit" onClick={addDevlog}>Submit</button>
                <h4>Devlog History</h4>
                {renderDevLogHistory()}
            </div>
        );
    }
}
