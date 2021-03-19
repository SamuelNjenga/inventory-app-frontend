import * as React from 'react'
import {
  List,
  Datagrid,
  DateField,
  TextField,
  ReferenceField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  ReferenceInput,
  SelectInput,
  Filter
} from 'react-admin'

export const PostSupplierProductList = props => (
  <List {...props} title='List of SupplierProducts' filters={<PostFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <ReferenceField source='supplierId' reference='suppliers'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField source='productId' reference='products'>
        <TextField source='name' />
      </ReferenceField>
      <DateField source='createdAt' label='Date and Time Of Supply' showTime />
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Edit {record ? `"${record.id}"` : ''}</span>
}

export const PostSupplierProductEdit = props => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <ReferenceInput source='supplierId' reference='suppliers'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ReferenceInput source='productId' reference='products'>
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='id' alwaysOn />
  </Filter>
)

export const PostSupplierProductCreate = props => (
  <Create {...props} title='Add SupplierProduct'>
    <SimpleForm>
      <ReferenceInput source='supplierId' reference='suppliers'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ReferenceInput source='productId' reference='products'>
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
