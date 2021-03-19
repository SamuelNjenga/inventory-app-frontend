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

export const PostOrderDetailList = props => (
  <List {...props} title='List of OrderDetails' filters={<PostFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <ReferenceField source='orderId' reference='orders'>
        <TextField source='orderNumber' />
      </ReferenceField>
      <ReferenceField source='productId' reference='products'>
        <TextField source='name' />
      </ReferenceField>
      <DateField
        source='createdAt'
        label='Date and Time Of Ordering'
        showTime
      />
    </Datagrid>
  </List>
)

const PostTitle = ({ record }) => {
  return <span>Edit {record ? `"${record.orderNumber}"` : ''}</span>
}

export const PostOrderDetailEdit = props => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <ReferenceInput source='orderId' reference='orders'>
        <SelectInput optionText='orderNumber' />
      </ReferenceInput>
      <ReferenceInput source='productId' reference='products'>
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label='Search' source='orderNumber' alwaysOn />
  </Filter>
)

export const PostOrderDetailCreate = props => (
  <Create {...props} title='Add OrderDetail'>
    <SimpleForm>
      <ReferenceInput source='orderId' reference='orders'>
        <SelectInput optionText='orderNumber' />
      </ReferenceInput>
      <ReferenceInput source='productId' reference='products'>
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
