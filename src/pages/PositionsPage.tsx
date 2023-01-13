import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPositions } from '../store';
import PositionList from '../components/organisms/PositionList';
import { ThunkDispatch } from 'redux-thunk';
import { Positions } from '../Interfaces';

interface RootState {
  positions: Positions;
}

const PositionsPage = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, any>>();

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  return (
    <div className='positions-page'>
      <h1>Job List</h1>
      <PositionList />
    </ div>
  );
};

export default PositionsPage;
