import { motion } from 'framer-motion'
import * as S from './MenuToggle.styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Path = (props: any) => (
   <motion.path
      {...props}
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="square"
   />
)

interface MenuToggleProps {
   handleOnClick: () => void
}

const MenuToggle = ({ handleOnClick }: MenuToggleProps) => (
   <S.Button onClick={handleOnClick}>
      <svg width="23" height="23" viewBox="0 0 23 23">
         <Path
            variants={{
               closed: { d: 'M 2 2.5 L 20 2.5' },
               open: { d: 'M 3 16.5 L 17 2.5' }
            }}
         />
         <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
               closed: { opacity: 1 },
               open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
         />
         <Path
            variants={{
               closed: { d: 'M 2 16.346 L 20 16.346' },
               open: { d: 'M 3 2.5 L 17 16.346' }
            }}
         />
      </svg>
   </S.Button>
)

export default MenuToggle
