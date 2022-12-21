import { Stack } from "@mui/material"
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from "./SearchBar"
const Navbar = () => (
  <Stack 
    direction='row' 
    alignItems='center' 
    p={1} 
    sx={{position: 'sticky', background:'#000', top: 0, justifyContent:'space-between'}}
  >
    <Link to="/" style={{display:'flex', alignItems:'center',marginLeft:'20px'}}>
      <img src={logo} alt='logo' height={46} marginLeft='10px'/>
    </Link>
    <SearchBar />
  </Stack>
  )


export default Navbar