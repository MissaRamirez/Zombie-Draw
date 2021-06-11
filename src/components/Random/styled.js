import styled from 'styled-components';

export const FrameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  margin: auto;
  @media (orientation: portrait) {
    margin-top: 4vh;
  }
  color:
  ${props => props.disabled ? "#o00" : "#fff"};
  background-color:
  ${props => props.disabled ? "#6c757d" : "#007bff"};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  ${props => props.disabled ? "" :
    ":hover, :active {"+
    "color: #fff;"+
    "background-color: #0069d9;"+
    "border-color: #0062cc;"+
    "}"
  }
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;