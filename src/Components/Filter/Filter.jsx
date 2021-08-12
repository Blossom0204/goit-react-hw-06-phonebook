import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilter } from '../../redux/selectors'
import * as actions from '../../redux/actions'
import { Label, Input } from './Filter.styles'

export default function Filter() {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()

  const onChange = (e) => dispatch(actions.changeFilter(e.target.value))

  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  )
}
