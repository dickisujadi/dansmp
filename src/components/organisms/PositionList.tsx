import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Position, Positions } from '../../Interfaces';
import Loading from '../atoms/Loading';

const PositionList = () => {
  const { positions, loading, error } = useSelector((state: { positions: Positions }) => state.positions);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {positions.map((position: Position) => (
        <div key={position.id} className='position-container'>
          <p className='position-title-location'>
            {position.title}
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
