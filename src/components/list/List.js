import React from 'react';
import './list.scss'
import useAxios from "../../customHook/useAxios";
import ListItem from "../listItem/listItem";
import {motion} from "framer-motion";

function List() {
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
    const list = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }


    const listItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div
            className='list'
            variants={list} initial='hidden'
            animate='visible'>
            <h2>станом на {data2?.data.date}</h2>
            <h2>День: {data2?.data.day}</h2>
            <div  className='list__items'>  {mergetData.map((item, index) => {
                const {title, count, increase, icon} = item
                return (
                    <motion.div variants={listItem}>
                        <ListItem title={title} count={count} increase={increase} icon={icon} />
                    </motion.div>
                )
            })}
            </div>
        </motion.div>
    );
}

export default List;

