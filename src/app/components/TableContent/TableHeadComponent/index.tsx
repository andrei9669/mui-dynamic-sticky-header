import { TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledTableCell = styled(TableCell)<{
  cellColor: string;
  stickyHeight: number;
}>`
  ${({ cellColor, stickyHeight }) => css`
    background-color: ${cellColor};
    top: ${stickyHeight}px;
  `}
`;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getHeight = (
  index: number,
  refs: React.RefObject<HTMLTableRowElement>[],
): number => {
  let height = 0;
  refs.some((ref, i) => {
    if (i >= index) {
      return true;
    }
    const h = ref?.current?.clientHeight;
    height += h ?? 0;
    return false;
  });
  return height;
};

const cells = new Array(18).fill('').map((_, i) => i);

const TableHeadComponent: React.FC = () => {
  const [stateRefs, setStateRefs] = useState(
    Array(1)
      .fill('')
      .map(() => React.createRef<HTMLTableRowElement>()),
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    const func = () => {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setStateRefs((prev) => prev.map((el) => el));
      }, 200);
    };
    window.addEventListener('resize', func);
    return () => {
      window.removeEventListener('resize', func);
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
    };
  }, []);

  // this is to trigger the height for rows
  useEffect(() => {
    setTimeout(() => {
      setStateRefs((prev) => prev.map((el) => el));
    }, 1);
  }, []);

  const col0 = getRandomColor();
  const col1 = getRandomColor();
  const col2 = getRandomColor();

  const getColor = (num: number): string => {
    const v = Math.floor(Number(num / 6)) + 1;
    switch (v) {
      case 1:
        return col0;
      case 2:
        return col1;
      case 3:
        return col2;
      default:
        return col0;
    }
  };

  return (
    <TableHead>
      <TableRow ref={stateRefs[0]}>
        <StyledTableCell
          stickyHeight={0}
          colSpan={6}
          cellColor={col0}
          scope="col"
          role="columnheader"
        >
          head0
        </StyledTableCell>
        <StyledTableCell
          stickyHeight={0}
          colSpan={6}
          cellColor={col1}
          scope="col"
          role="columnheader"
        >
          head1
        </StyledTableCell>
        <StyledTableCell
          stickyHeight={0}
          colSpan={6}
          cellColor={col2}
          scope="col"
          role="columnheader"
        >
          head2
        </StyledTableCell>
      </TableRow>
      <TableRow>
        {cells.map((cell, i) => (
          <StyledTableCell
            key={cell}
            stickyHeight={getHeight(1, stateRefs)}
            cellColor={getColor(i)}
            scope="col"
            role="columnheader"
          >{`cell${cell}`}</StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
