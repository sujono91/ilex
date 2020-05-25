import styled from 'styled-components';
import { Form, Button } from 'reactstrap';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-around;
  color: white;
  text-align: justify;
  background-color: #27435C;
`;

export const StyledButton = styled(Button)`
  height: 50%;
  margin-top: 2rem;
`;

export const DirectoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DirectoryItem = styled.div`
  flex: 1 0 10%;
  margin: 5px;
  height: 50px;
`;
