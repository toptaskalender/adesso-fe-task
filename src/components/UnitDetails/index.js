import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { startPageTitleChange } from '../../store/action-creators';

import { getUpperCaseUnitName, getUnitData } from '../../utils';

import './index.scss';

function UnitDetails() {
  const { unit: unitName } = useParams();
  const unitData = useSelector(state => getUnitData(state, unitName));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startPageTitleChange(getUpperCaseUnitName(unitName)));
  }, [dispatch, unitName]);

  return (
    <div className="unit-details">
      <div className="unit-details__table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>{unitData.id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{unitData.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{unitData.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Min. Required Age</TableCell>
                <TableCell>{unitData.age}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wood Cost</TableCell>
                <TableCell>{unitData.cost.Wood}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Food Cost</TableCell>
                <TableCell>{unitData.cost.Food}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Gold Cost</TableCell>
                <TableCell>{unitData.cost.Gold}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Build Time</TableCell>
                <TableCell>{unitData.build_time}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reload Time</TableCell>
                <TableCell>{unitData.reload_time}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hit Points</TableCell>
                <TableCell>{unitData.hit_points}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Attack</TableCell>
                <TableCell>{unitData.attack}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Accuracy</TableCell>
                <TableCell>{unitData.accuracy}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default UnitDetails;
