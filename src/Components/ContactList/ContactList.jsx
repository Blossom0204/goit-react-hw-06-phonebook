import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import { getVisibleContacts } from '../../redux/selectors'
import {
  ContactsList,
  ContactListItem,
  ContactListText,
  BtnDel,
} from './ContactList.styles'

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts)
  const dispatch = useDispatch()

  const onDelete = (id) => dispatch(actions.deleteContact(id))

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>
            {name}:&nbsp;{number}
          </ContactListText>
          <BtnDel onClick={() => onDelete(id)}>Delete</BtnDel>
        </ContactListItem>
      ))}
    </ContactsList>
  )
}
