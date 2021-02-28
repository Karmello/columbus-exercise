import React from 'react'
import { hot } from 'react-hot-loader'

import {
  Segment,
  Image,
  Divider,
  Header,
  Icon,
  SemanticICONS,
} from 'semantic-ui-react'

import dict from './dictionary'
import logo from 'assets/logo.png'

import './AppFooter.css'

const AppFooter = () => (
  <Segment attached="bottom">
    <div className="AppFooter">
      <div>
        <Image src={logo} size="medium" />
        <Divider hidden />
        {dict.section1.text}
      </div>
      <div className="section2">
        <Header content={dict.section2.heading} />
        <div className="listsContainer">
          <div>
            {dict.section2.list1.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.href}>{item.label}</a>
                </li>
              </ul>
            ))}
          </div>
          <div>
            {dict.section2.list2.map((item, i) => (
              <ul key={i}>
                <li>
                  <a href={item.href}>{item.label}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <Divider hidden />
      </div>
      <div>
        <Header content={dict.section3.heading} />
        {dict.section3.list.map((item, i) => (
          <div key={i}>
            <Icon name={item.iconName as SemanticICONS} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  </Segment>
)

export default hot(module)(AppFooter)
