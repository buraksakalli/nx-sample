import styled from 'styled-components';
import { Button } from 'components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export function Index() {
  return (
    <StyledPage>
      <p>Hello from NX</p>
      <Button link="#" title="Test" />
    </StyledPage>
  );
}

export default Index;
