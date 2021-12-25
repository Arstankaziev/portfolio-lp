import { Button } from 'components/Hamburger/MenuToggle/MenuToggle.styles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Header = styled(motion.nav)`
   position: relative;
   height: 50px;
   display: flex;
   justify-content: flex-end;
   margin: 15px 10px 10px;
   margin-bottom: 35px;

   @media (min-width: 900px) {
      margin: 20px 50px 140px;
      & ${Button} {
         display: none;
      }
   }
`

export const LinkList = styled.ul`
   font-size: 1.2rem;
   font-weight: 500;

   align-items: center;

   list-style: none;
   display: flex;
   gap: 30px;
`

export const Link = styled.li`
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
