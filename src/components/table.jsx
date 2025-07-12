import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import suitcase from '../assets/suitcase.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    borderBottom: '2px solid #2a2a2a',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    color: '#ffffff',
    borderBottom: '2px solid #2a2a2a',
    padding: '8px 12px',
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: '#1c1c1c',
}));

function createData(name, calories, fat, carbs, protein, nameColor, proteinColor) {
  return { name, calories, fat, carbs, protein, nameColor, proteinColor };
}

const rows = [
  createData('REDINGTON', '', 26.20, '8.82%', 323.10, '#16a34a', '#16a34a'),
  createData('CRISIL', 3, 102.50, '1.72%', 6049.50, '#16a34a', '#16a34a'),
  createData('MUTHOOTFIN', 30, -3.50, '-0.14%', 2579.70, '#dc2626', '#dc2626'),
  createData('KIMS', 15, -12.70, '-1.88%', 664.05, '#dc2626', '#dc2626'),
  createData('APOLLOHOSP', '', 208.50, '2.94%', 7310.00, '#16a34a', '#16a34a'),
  createData('UNHEALTH-SM', '', -1.10, '-0.65%', 168.30, '#dc2626', '#dc2626'),
  createData('MAXHEALTH', 1, 8.60, '0.68%', 1275.10, '#16a34a', '#16a34a'),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 430,
        marginLeft: '15px',
        backgroundColor: '#1c1c1c',
        boxShadow: 'none',
        border: '3px solid #2a2a2a',
        borderRadius: '4px',
      }}
    >
      <Table size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={5}>Default (7)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const isUp = [0, 1, 4, 6].includes(index); // 1,2,5,7 in 0-based index
            const ChevronIcon = isUp ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;
            const chevronColor = isUp ? '#16a34a' : '#dc2626';

            return (
              <StyledTableRow key={row.name}>
                <StyledTableCell style={{ color: row.nameColor }}>{row.name}</StyledTableCell>

                <StyledTableCell align="right">
                  <span className="flex items-center justify-end gap-1">
                    {row.calories}
                    <img src={suitcase} className="h-4 w-4" />
                  </span>
                </StyledTableCell>

                <StyledTableCell align="right">{row.fat}</StyledTableCell>

                <StyledTableCell align="right">
                  <span className="flex items-center justify-end gap-1" style={{ color: chevronColor }}>
                    {row.carbs}
                    <ChevronIcon sx={{ fontSize: 14 }} />
                  </span>
                </StyledTableCell>

                <StyledTableCell align="right" style={{ color: row.proteinColor }}>
                  {row.protein}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
