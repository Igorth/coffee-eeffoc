import { Aside, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import eeffocLogo from '../../assets/logo-eeffoc.png'
import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={eeffocLogo} alt="Coffee Delivery" />
      </Link>
      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Montreal, CA</span>
        </div>
        <NavLink to="/cart" title="Cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}
