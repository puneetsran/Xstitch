import React from 'react';
import { SwatchesPicker } from 'react-color';


export default function ColorPicker(props) {
  return <SwatchesPicker onChangeComplete={props.onChangeComplete}/>
}