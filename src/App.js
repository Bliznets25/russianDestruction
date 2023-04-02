import './App.css';
import Header from "./components/header/Header";
import List from "./components/list/List";
import useAxios from "./customHook/useAxios";
import {useEffect, useState} from "react";

function App() {

    const [background, setBackground] = useState(JSON.parse(localStorage.getItem('background')) || false );
    // you don't need to parse it here, you can do it in the useEffect below
    // false is not very good default value, because it's not clear what it means. Better to use null

    useEffect(() => {
     localStorage.setItem('background', JSON.stringify(background))
    }, [background]);

    useEffect(() => {
    const savedBackground = JSON.parse(localStorage.getItem('background'))
        if (savedBackground) {
            setBackground(savedBackground)
        }
    }, []);


    /* 
        const data1 = useAxios('https://russianwarship.rip/api/v2/terms/ua');
        const data2 = useAxios('https://russianwarship.rip/api/v2/statistics/latest');

        it will be much more readable

        data1 and data2 are not good names, because they don't have any useful information
    */

    const [data1, data2] = useAxios('https://russianwarship.rip/api/v2/terms/ua', 'https://russianwarship.rip/api/v2/statistics/latest');
    // using axios is compliteky fine, but you can also use fetch API, which is built into the browser
    const mergetData = Object.entries(data1?.data || {}).map(([key, value]) => {
        const item = data2?.data.stats[key]
        const increase = data2?.data.increase[key]
        return {
            title: value.title, //name of destruction
            count: item, //count
            icon: value.icon, //icon
            increase: increase //plus daily destruction
        } // the comments above are not needed, because the code is self-explanatory
    })

    const date = data2?.data.date // there will be no need to use optional chaining if you properly handle errors
    const day = data2?.data.day // also, you can use destructuring here to avoid repeating data2?.data like this: const {date, day} = data2?.data

  return (
    <div className={background ? 'App' : 'App2'}> {/* App and App2 are bad class names because they don't have any useful information. Better to call them ua-bg and ru-bg */}
        <Header date={date} day={day} background={background} setBackground={setBackground}/>
        <List mergetData={mergetData}/>
    </div>
  );
}
export default App;
