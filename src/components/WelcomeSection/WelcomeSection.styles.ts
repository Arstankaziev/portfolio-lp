import { Button } from 'components/DefaultButton/DefaultButton.styles'
import styled from 'styled-components'

export const Container = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 35px;
   @media (min-width: 900px) {
      flex-direction: row-reverse;
      align-items: flex-start;
      justify-content: space-between;
   }
`

export const Content = styled.aside`
   flex: 1;

   & h1 {
      margin-bottom: 20px;
   }

   & hr {
      margin-bottom: 20px;
      border: none;
   }

   & p {
      margin-bottom: 27px;
   }

   @media (min-width: 900px) {
      display: flex;
      flex-direction: column;
      max-width: 900px;

      & h1 {
         margin-bottom: 40px;
         text-align: left;
      }

      & p {
         margin-bottom: 47px;
         text-align: left;
      }

      & ${Button} {
         margin-right: auto;
      }
   }
`

export const ProfileImage = styled.div`
   flex: 0.7;

   overflow: hidden;
   border-radius: 50%;

   min-width: 170px;
   max-width: 300px;

   filter: drop-shadow(-5px 7px 0px #99c3cf);

   & img {
      object-fit: cover;
      width: 100%;
   }
`