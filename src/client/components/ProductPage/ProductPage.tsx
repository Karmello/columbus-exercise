import React, { useState, SyntheticEvent } from 'react'
import { hot } from 'react-hot-loader'

import {
  Segment,
  Header,
  Divider,
  Button,
  Dropdown,
  DropdownProps,
} from 'semantic-ui-react'

import dict from './dictionary'
import './ProductPage.css'

const ProductPage = () => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number>(0)

  const onDropdownChange = (e: SyntheticEvent, data: DropdownProps) =>
    setActiveDropdownIndex(Number(data.value))

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
                <Header as="h3" content="565,00 kr" />
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
                <Button content={dict.buttons.buy} fluid floated="right" />
              </div>
            </div>
          </Segment>
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
    </Segment>
  )
}

export default hot(module)(ProductPage)
