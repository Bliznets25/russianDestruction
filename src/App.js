import './App.css';
import Header from "./components/header/Header";
import List from "./components/list/List";
import useAxios from "./customHook/useAxios";
import {useState} from "react";

function App() {

    const [background, setBackground] = useState(true);

    const [data1, data2] = useAxios('https://russianwarship.rip/api/v2/terms/ua', 'https://russianwarship.rip/api/v2/statistics/latest');
    const mergetData = Object.entries(data1?.data || {}).map(([key, value]) => {
        const item = data2?.data.stats[key]
        const increase = data2?.data.increase[key]
        return {
            title: value.title, //name of destruction
            count: item, //count
            icon: value.icon, //icon
            increase: increase //plus daily destruction
        }
    })

    const date = data2?.data.date
    const day = data2?.data.day

  return (
    <div className={background ? 'App' : 'App2'}>
        <Header date={date} day={day} background={background} setBackground={setBackground}/>
        <List mergetData={mergetData}/>
    </div>
  );
}
export default App;
