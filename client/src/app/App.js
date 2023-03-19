import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { fetchOneUserApi } from "./services/users.service";
import Spinner from "react-bootstrap/esm/Spinner";
import { observer } from "mobx-react-lite";
import { getLastIndicatorsToTypesApi } from "./services/records.service";
import { arrayNameIndicators } from "./utils/infoParameters";

const App = observer(() => {
  const [loading, setLoading] = useState(true);
  const { user, indicators } = useContext(Context);

  useEffect(() => {
    fetchOneUserApi(1)
      .then((data) => {
        user.setUser(data);
      })
      .then(() => {
        getLastIndicatorsToTypesApi(user.user.id, arrayNameIndicators).then(currentIndicators => {
          indicators.setIndicators(currentIndicators)
        })
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner className="main_spinner" />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
});

export default App;
