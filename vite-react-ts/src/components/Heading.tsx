import React, { ReactElement } from 'react'


type HeadingProps = {
  title: string}

type styledType = {
    [key:string]: string

}

const styled: styledType = {
    textAlign: 'center',
    margin: 'auto',
    padding: '10px'

}

const Heading = (props: HeadingProps): ReactElement => {
  return <h1 style={styled}>{props.title}</h1>
  
}

export default Heading