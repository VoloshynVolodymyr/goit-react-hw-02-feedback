import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: 'flex';
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.mainBgColor};
    width: 100%;
`

export const Button = styled('button')`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.mainButtonColor};
  border-radius: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(25)};
  font-weight: bold;
`
export const ButtonWrapper = styled.div`
    display: 'flex';
    flex-direction: row;
`
export const StatisticsWrapper = styled.div`
    display: 'flex';
    flex-direction: column;
`

export const StatisticsItem = styled.p`
font-size: ${props => props.theme.spacing(4)};
font-weight: bold;
min-width: ${props => props.theme.spacing(60)};
padding-left: ${props => props.theme.spacing(30)};
color: ${props => props.theme.colors.titleColor};
width: ${props => props.theme.spacing(25)};
`

export const TitleH1 = styled.h1`
    color: ${props => props.theme.colors.titleColor};
`
export const TitleH2 = styled.h2`
    color: ${props => props.theme.colors.titleColor};
`


// export default Button;