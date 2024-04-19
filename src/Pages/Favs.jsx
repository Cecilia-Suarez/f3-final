import React from "react";
import Card from "../Components/Card";
import cardGridStyle from '../Styles/Card.module.css'
import { useContextGlobal } from "../Context/global.context";
import detailStyle from '../Styles/Detail.module.css'

const Favs = () => {

  const {favs} = useContextGlobal()

  return (
    <div className={detailStyle.container}>
      <h1>Dentists Favs</h1>
      <div className={cardGridStyle.cardGrid}>
        {favs.map(fav => <Card dentist={fav} key={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
