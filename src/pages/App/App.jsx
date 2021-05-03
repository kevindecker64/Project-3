import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as recordsAPI from "../../utilities/records-api";
import AuthPage from "../AuthPage/AuthPage";
import NewRecordPage from "../NewRecordPage/NewRecordPage";
import RecordIndexPage from "../RecordIndexPage/RecordIndexPage";
import NavBar from "../../Components/NavBar/NavBar";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [records, setRecords] = useState([
    {
      title: "Black Sabbath",
      artist: "Black Sabbath",
      year: 1976,
      forSale: true,
      condition: "Very Good",
      price: 6.66,
      sellerName: "Test McTest",
      sellerInfo: { email: "test@test.com", phoneNum: "222-222-2222" },
    }, {
      title: "One Night Stand - Live at the Harlem Square Club",
      artist: "Sam Cooke",
      year: 1963,
      forSale: false,
    }
  ]);

  useEffect(() => {
    async function getRecords() {
      const records = await recordsAPI.getAll();
      setRecords(records);
    }
    getRecords();
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/add">
              <NewRecordPage />
            </Route>
            <Route exact path="/">
              <RecordIndexPage records={records} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
