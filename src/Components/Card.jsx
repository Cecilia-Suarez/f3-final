import React from "react";
import { Link } from "react-router-dom";
import doctor from '../assets/doctor.jpg'
import cardStyle from '../Styles/Card.module.css'
import { useContextGlobal } from "../Context/global.context";

const Card = ({ dentist }) => {

  const {name, username, id} = dentist
  const {dispatch, favs} = useContextGlobal()

  const findFav = favs.find((fav => fav.id == dentist.id))

  const addOrRemoveFav = () => {
    if (findFav){
      dispatch({ type: 'DELETE_FAV', payload: dentist.id });
    } else {
      dispatch({type: 'ADD_FAV', payload: dentist})
    }
  }

  return (
    <div className={cardStyle.card}>
      <button onClick={addOrRemoveFav} className={cardStyle.favButton}>{findFav ? '❤️' : '🤍'}</button>
      <Link to={'/detail/' + id} >
        <img src={doctor} alt="" className={cardStyle.img}/>
        <h4>{name} {username}</h4>
      </Link>
    </div>
  );
};

export default Card;
