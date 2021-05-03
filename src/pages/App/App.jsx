import { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as recordsAPI from "../../utilities/records-api";
import AuthPage from "../AuthPage/AuthPage";
import NewRecordPage from "../NewRecordPage/NewRecordPage";
import RecordIndexPage from "../RecordIndexPage/RecordIndexPage";
import NavBar from "../../Components/NavBar/NavBar";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [records, setRecords] = useState([]);
  const history = useHistory();

  async function testSomething() {
    console.log("HEELLLOOOO!!!!!");
  }

  useEffect(() => {
    history.push("/");
  }, [records, history]);

  useEffect(() => {
    async function getRecords() {
      const records = await recordsAPI.getAll();
      setRecords(records);
    }
    getRecords();
  }, []);

  async function handleAddRecord(newRecordData) {
    const newRecord = await recordsAPI.create(newRecordData);
    setRecords([...records, newRecord]);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/add">
              <NewRecordPage handleAddRecord={handleAddRecord} user={user} />
            </Route>
            <Route exact path="/">
              <RecordIndexPage records={records} />
            </Route>
            <Redirect to="/" />
          </Switch>
          <button onClick={testSomething}>Test Something</button>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
