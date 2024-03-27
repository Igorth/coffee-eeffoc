import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1160px;
  padding: 32px 30px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${(props) => props.theme['purple-light']};

    svg {
      color: ${(props) => props.theme.purple};
    }
    span {
      color: ${(props) => props.theme['purple-dark']};
    }
    border-radius: 6px;
    padding: 10px 8px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 6px;
    position: relative;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme.yellow};
  }
`
