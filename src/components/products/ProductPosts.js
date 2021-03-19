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

export const PostProductList = props => (
  <List
    {...props}
    title='List of Products'
    filters={<PostFilter />}
    perPage={5}
  >
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='description' />
      <TextField source='quantity' />
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Edit {record ? `"${record.name}"` : ''}</span>
}

export const PostProductEdit = props => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <TextInput source='description' />
      <TextInput source='quantity' />
    </SimpleForm>
  </Edit>
)

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='name' alwaysOn />
  </Filter>
)

export const PostProductCreate = props => (
  <Create {...props} title='Add a new Product'>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='description' />
      <TextInput source='quantity' />
    </SimpleForm>
  </Create>
)
