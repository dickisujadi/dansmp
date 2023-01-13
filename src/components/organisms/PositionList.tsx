import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Position, Positions } from '../../Interfaces';
import Loading from '../atoms/Loading';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchPosition } from '../../store';

interface RootState {
  positions: Positions;
}

const PositionList = () => {
  const { positions, loading, error } = useSelector((state: { positions: Positions }) => state.positions);
  const dispatch = useDispatch<ThunkDispatch<RootState, void, any>>();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleClick = (id: string) => {
    dispatch(fetchPosition(id));
  }

  return (
    <div>
      {positions.map((position: Position) => (
        <div key={position.id} className='position-container'>
          <p className='position-title-location' >
            <Link to={'/details'} onClick={() => {handleClick(position.id)}}>
              {position.title}
            </Link>
            <span className='position-location'>
              {position.location}
            </span>
          </p>

          <p className='position-company-type'>
            <span className='position-company'>{position.company} - </span><span className='position-type'>{position.type}</span>
            <span className='position-created'>
              {position.created_at}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default PositionList;
