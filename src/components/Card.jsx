import React from 'react'

const Card = (props) => {

    const {name,texto} = props;

    return (
      <div className="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
          <div className="container">
            <h4><b>{name}</b></h4>
            <p>{texto}</p>
          </div>
      </div>
    )
}

export default Card
