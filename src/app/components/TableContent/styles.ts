import styled from 'styled-components';
import { TableContainer, Typography } from '@material-ui/core';

export const StyledTableContainer = styled(TableContainer)`
  display: flex;
  overflow: auto;
  max-height: 100%;
`;

export const StyledTypography = styled(Typography)`
  width: 100%;
  font-weight: bold;
  line-height: 1rem;
`;
