import React from 'react';
import {motion} from "framer-motion";
import './listitem.scss'


function ListItem({title, count, increase, icon}) {
    const listItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <motion.div className='listItem' variants={listItem}>
            <img src={icon} alt="" className='listItem__img'/>
            <p className='listItem__title'>{title}</p>
            <span className='listItem__count'>{count}</span>
            <p className='listItem__increaseTitle'>Додано за останню добу</p>
            <span className='listItem__increase'>{increase !== 0 && '+'} {increase}</span>
        </motion.div>
    );
}

export default ListItem;