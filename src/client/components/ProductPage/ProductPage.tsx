import React, { useState, SyntheticEvent } from 'react'
import { hot } from 'react-hot-loader'

import {
  Segment,
  Header,
  Divider,
  Button,
  Dropdown,
  DropdownProps,
  ButtonProps,
} from 'semantic-ui-react'

import { formatPrice } from 'helpers/index'
import { ProductImage } from 'components/index'
import dict from './dictionary'
import './ProductPage.css'

type Props = {
  totalPrice: number
  setTotalPrice: (newPrice: number) => void
}

const ProductPage = ({ totalPrice, setTotalPrice }: Props) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number>(0)

  const onDropdownChange = (e: SyntheticEvent, data: DropdownProps) =>
    setActiveDropdownIndex(Number(data.value))

  const onBuyClick = (e: SyntheticEvent, props: ButtonProps) =>
    setTotalPrice(totalPrice + Number(dict.mainSection.price.new))

  return (
    <Segment attached>
      <div className="ProductPage">
        <div className="linksMenuContainer">
          <Segment>
            {dict.linksMenu.items.map((item, i) => (
              <div key={i}>
                <a href={item.href}>{item.label}</a>
              </div>
            ))}
          </Segment>
        </div>
        <div>
          <Header as="h1" content={dict.mainSection.heading} />
          <Segment>
            <div className="buySection">
              <div>
                <Header as="h2">
                  {formatPrice(dict.mainSection.price.new)}
                  <Header.Subheader>
                    {formatPrice(dict.mainSection.price.old)}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Dropdown
                  selection
                  text={
                    dict.mainSection.dropdown.options[activeDropdownIndex].label
                  }
                  value={activeDropdownIndex}
                  options={dict.mainSection.dropdown.options.map((item, i) => ({
                    value: i,
                    label: item.label,
                  }))}
                  onChange={onDropdownChange}
                />
              </div>
              <div>
                <Button
                  content={dict.buttons.buy}
                  fluid
                  floated="right"
                  onClick={onBuyClick}
                />
              </div>
            </div>
          </Segment>
          <div className="productImageContainer">
            <div>
              <ProductImage />
            </div>
            <div>
              <Segment basic>
                {dict.mainSection.text.map((item, i) => (
                  <div key={i}>
                    {item}
                    <Divider hidden />
                  </div>
                ))}
              </Segment>
            </div>
          </div>
          <Divider hidden />
          <div className="textBlocksContainer">
            {dict.mainSection.blocks.map((item, i) => (
              <div key={i}>
                <Segment>
                  <Header>{item.header}</Header>
                  <div>{item.text}</div>
                </Segment>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Segment>
  )
}

export default hot(module)(ProductPage)
