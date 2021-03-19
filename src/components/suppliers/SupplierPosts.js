import * as React from 'react'
import {
  List,
  Datagrid,
  TextField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  Filter
} from 'react-admin'

export const PostSupplierList = props => (
  <List
    {...props}
    title='List of Suppliers'
    filters={<PostFilter />}
    perPage={5}
  >
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Edit {record ? `"${record.name}"` : ''}</span>
}

export const PostSupplierEdit = props => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
    </SimpleForm>
  </Edit>
)

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='name' alwaysOn />
  </Filter>
)

export const PostSupplierCreate = props => (
  <Create {...props} title='Add a new Supplier'>
    <SimpleForm>
      <TextInput source='name' />
    </SimpleForm>
  </Create>
)
