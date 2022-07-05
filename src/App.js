import "./App.css";
import axios from "axios";
import useSWR from "swr";

import Error from "./component/Error";
import Loading from "./component/Loading";
import UserCard from "./component/UserCard";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function App() {
  const { data, error } = useSWR("https://randomuser.me/api?nat=tr", fetcher);

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div className="App">
      <div className="content">
        <h2>useSWR Example</h2>
        <UserCard user={data.results[0]} />
      </div>
    </div>
  );
}

export default App;
