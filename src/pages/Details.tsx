import { useSelector } from 'react-redux';
import { Positions } from '../Interfaces';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { fetchPosition } from '../store';
import Loading from '../components/atoms/Loading';

interface RootState {
  positions: Positions;
}

const Details = () => {
  const { positions, loading, error, position } = useSelector((state: { positions: Positions }) => state.positions);
//   const dispatch = useDispatch<ThunkDispatch<RootState, void, any>>();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
        <Link to={'/'} className='back-button'>Back</Link>
        <div className='details-box-container'>
            <div>
                <h1>{position.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{__html: position.description}} />
        </div>
    </>
  );
};

export default Details;
