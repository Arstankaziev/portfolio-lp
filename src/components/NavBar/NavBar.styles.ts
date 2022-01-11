import { Button } from 'components/Hamburger/MenuToggle/MenuToggle.styles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled(motion.nav)`
   position: absolute;
   z-index: 3;
   top: 0;
   left: 0;
   right: 0;
   height: 10vh;

   display: flex;
   align-items: center;
   justify-content: flex-end;
   margin: 0px 10px;

   @media (min-width: 900px) {
      margin: 0px 50px;
      & ${Button} {
         display: none;
      }
   }
`

export const LinkList = styled.ul`
   display: flex;

   font-size: 1.2rem;
   font-weight: 500;

   align-items: center;

   list-style: none;
   gap: 30px;

   @media (max-width: 900px) {
      display: none;
   }
`

export const Link = styled.li`
   color: ${({ theme }) => theme.text.light};
   &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      cursor: pointer;
   }
`

export const Background = styled(motion.div)`
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   width: 300px;
   background: #99c3cf;
`
