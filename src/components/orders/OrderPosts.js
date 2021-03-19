import * as React from 'react'
import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  Filter,
  DateField
} from 'react-admin'

export const PostOrderList = props => (
  <List {...props} title='List of Orders' filters={<PostFilter />} perPage={5}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='orderNumber' />
      <DateField source='createdAt' label='Date and Time Of Order' showTime />
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Edit {record ? `"${record.orderNumber}"` : ''}</span>
}

export const PostOrderEdit = props => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='orderNumber' />
    </SimpleForm>
  </Edit>
)

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='orderNumber' alwaysOn />
  </Filter>
)

export const PostOrderCreate = props => (
  <Create {...props} title='Add a new Order'>
    <SimpleForm>
      <TextInput source='orderNumber' />
    </SimpleForm>
  </Create>
)
