import React, { FC } from 'react';
import s from './Card.module.css';

const Card = () => {
  return (
    <>
      <div className={s.navigationContainer}>
        <div>
        <h1>TOMOE</h1>
        <ul>
          <li><a>portfalio</a></li>
          <li><a>Product</a></li>
          <li><a>Activity</a></li>
          <li><a>Tech stack</a></li>
        </ul>
          </div>
      </div>
    </>
  );
};

export default Card;
