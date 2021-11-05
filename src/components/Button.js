import styled from "styled-components";

export const StatusBtn = styled.button`
  background-color: #f2f4ff;
  padding: 0.5rem 1.6rem;
  border: none;
  border-radius: 1rem;
  color: #4661e6;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.9rem;
  cursor: pointer;
  text-transform: capitalize;
  &.active {
    background-color: #4661e6;
    color: #fff;
  }
`;
export const PrimaryButton = styled.button`
  background-color: #ad1fea;
  border: none;
  padding: 1.25rem 2.5rem;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  white-space: nowrap;
  width: ${(props) => (props.w100 ? "100%" : "auto")};
  &:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
