import styled from "styled-components";

export const Container = styled.section`
  max-width: 800px;
  margin: 36px auto 24px;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Wrap = styled.div`
  max-width: 300px;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: gray;
  text-align: center;
`
export const Input = styled.input`
  border: 1px solid forestgreen;
  border-radius: 8px 0 0 8px;
  padding: 8px;
  width: calc(300px - 44px);
  margin: 24px 0 16px;
  height: 42px;
`

export const Button = styled.button`
  border: 1px solid forestgreen;
  background-color: limegreen;
  color: white;
  border-radius: 0 8px 8px 0;
  padding: 8px;
  margin: 0 auto;
  height: 42px;
`

export const Error = styled.p`
  color: red;
  font-style: italic;
`

export const Form = styled.form`
  margin-bottom: 24px;
`

export const Card = styled.div`
  border: 1px solid forestgreen;
  background-color: limegreen;
  color: white;
  border-radius: 8px;
  width: 200px;
  margin: 24px auto;
`

export const CardImage = styled.div`
  background-color: white;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 120px;
  margin: 0 auto;
`

export const CardBody = styled.div`
  padding: 24px;
  background-color: limegreen;
`

export const Footer = styled.footer`
  padding: 32px 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
  }
  
  a {
    color: dodgerblue;
  }
`
