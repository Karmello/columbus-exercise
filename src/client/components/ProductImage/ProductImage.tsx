import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import { Image } from 'semantic-ui-react'

import paper1 from './paper1.jpg'
import paper2 from './paper2.jpg'
import paper3 from './paper3.jpg'

import './ProductImage.css'

const ProductImage = () => {
  const [activeImage, setActiveImage] = useState<string>(paper1)

  const onImageClick = (imagePath: string) => () => setActiveImage(imagePath)

  return (
    <div className="ProductImage">
      <Image src={activeImage} />
      <div className="switchSection">
        <div>
          <Image src={paper1} onClick={onImageClick(paper1)} />
        </div>
        <div>
          <Image src={paper2} onClick={onImageClick(paper2)} />
        </div>
        <div>
          <Image src={paper3} onClick={onImageClick(paper3)} />
        </div>
      </div>
    </div>
  )
}

export default hot(module)(ProductImage)
