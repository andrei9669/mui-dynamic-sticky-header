import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import React from 'react';

import { StyledTableContainer } from './styles';
import TableHeadComponent from './TableHeadComponent';

const rows = new Array(50).fill('').map((_, i) => i);

const TableContent: React.FC = () => {
  return (
    <>
      <StyledTableContainer>
        <Table stickyHeader cellSpacing={0} cellPadding={0}>
          <TableHeadComponent />
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row}>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
                <TableCell>hello</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </>
  );
};

export default TableContent;
