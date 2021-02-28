import React from 'react'
import { hot } from 'react-hot-loader'
import { Image, Icon, Button, Segment, Form } from 'semantic-ui-react'

import { formatPrice } from 'helpers/index'
import dict from './dictionary'
import logo from 'assets/logo.png'

import './AppHeader.css'
import './AppHeader.mobile.css'
import './AppHeader.desktop.css'

type Props = {
  totalPrice: number
}

const AppHeader = ({ totalPrice }: Props) => (
  <>
    <Segment attached="top">
      <div className="AppHeader AppHeader-mobile">
        <div>
          <Icon name="list alternate" size="big" />
        </div>
        <div className="logoContainer">
          <Image src={logo} size="medium" />
        </div>
        <div>
          <Icon name="shopping cart" size="big" />
        </div>
      </div>
      <div className="AppHeader AppHeader-desktop">
        <div className="logoContainer">
          <Image src={logo} size="medium" />
        </div>
        <div className="optionsContainer">
          <div>
            <Form.Input />
          </div>
          <div>
            <Button content={dict.buttons.search} />
          </div>
          <div>
            <Button
              icon="shopping cart"
              label={{
                basic: true,
                pointing: 'left',
                content: formatPrice(totalPrice),
              }}
            />
            {/* <Icon name="shopping cart" size="big" /> */}
          </div>
          <div>
            <Button content={dict.buttons.checkout} />
          </div>
        </div>
      </div>
    </Segment>
    <div className="AppHeader-desktop">
      <Segment attached>
        <div className="menu">
          {dict.menu.items.map((item, i) => (
            <a key={i} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </Segment>
    </div>
  </>
)

export default hot(module)(AppHeader)
