import {HStack,Box} from "@chakra-ui/react"

import { Outlet, Link } from "react-router-dom";

export default function Nav(){

return (<>
<Box>
<nav>
        <HStack>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </HStack>
      </nav>


</Box>
<Outlet></Outlet>
<Box>
</Box>
</>)


}