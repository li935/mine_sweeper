import styled from "styled-components";

export const MineButtonAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const ResetButtonWrapper = styled.div`
  margin-right: ${props => props['margin'] || 5}px;
`

export const RecordButtonWrapper = styled.div`
  margin-left: ${props => props['margin'] || 5}px;
`