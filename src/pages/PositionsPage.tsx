import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPositions, searchPositions } from '../store';
import PositionList from '../components/organisms/PositionList';
import { ThunkDispatch } from 'redux-thunk';
import { Positions } from '../Interfaces';

interface RootState {
  positions: Positions;
}

const PositionsPage = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, void, any>>();
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const handleSearch = () => {
    dispatch(searchPositions({ jobDescription, location, fullTimeOnly }));
  };

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  return (
    <>
      <div className='job-search'>
        <div className="input-box-container">
          <div className="input-box-item">
            <label className='search-item'>Job Description</label>
            <input className='input-box' type="text" placeholder="Filter by title, companies, expertise" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
          </div>
          <div className="input-box-item">
            <label className='search-item'>Location</label>
            <input className='input-box' type="text" placeholder="Filter by city, state, zip code or country" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <input className='search-item' type="checkbox" checked={fullTimeOnly} onChange={(e) => setFullTimeOnly(e.target.checked)} />
          <label className='search-item'>Full Time Only</label>
          <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className='positions-page'>
        <h1>Job List</h1>
        <PositionList />
      </ div>
    </>
  );
};

export default PositionsPage;
