import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Ages from '../Ages';
import Costs from '../Costs';
import List from '../List';

import { startPageTitleChange } from '../../store/action-creators';

import './index.scss';

function Units() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startPageTitleChange('Units'));
  }, [dispatch]);

  return (
    <div className="units">
      <Ages />
      <Costs />
      <List />
    </div>
  );
}

export default Units;
