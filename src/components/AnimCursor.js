import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
  return (
    <AnimatedCursor 
    innerSize={10}
    outerSize={30}
    color='238, 36, 194'
    outerAlpha={0.4}
    innerScale={0.7}
    outerScale={5}

    clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="password"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'i',
        'p',
        'h2',
        'h1',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default AnimCursor