import React from 'react'
import { Admin, Resource } from 'react-admin'
import { Dashboard } from '../../components/dashboard/Dashboard'
import simpleRestProvider from 'ra-data-simple-rest'
import StorefrontIcon from '@material-ui/icons/Storefront'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import ReceiptIcon from '@material-ui/icons/Receipt'
import ViewDayIcon from '@material-ui/icons/ViewDay'
import {
  PostSupplierCreate,
  PostSupplierEdit,
  PostSupplierList
} from '../../components/suppliers/SupplierPosts'
import {
  PostProductCreate,
  PostProductEdit,
  PostProductList
} from '../../components/products/ProductPosts'
import {
  PostSupplierProductCreate,
  PostSupplierProductEdit,
  PostSupplierProductList
} from '../../components/supplierProducts/SupplierProducts'
import {
  PostOrderCreate,
  PostOrderEdit,
  PostOrderList
} from '../../components/orders/OrderPosts'
import {
  PostOrderDetailCreate,
  PostOrderDetailEdit,
  PostOrderDetailList
} from '../../components/orderDetails/OrderDetails'
import { authProvider } from '../../helpers/authProvider'
import { API_BASE_URL } from '../../constants'

const App = () => (
  <Admin
    title='Inventory System Admin'
    dataProvider={simpleRestProvider(`${API_BASE_URL}`)}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource
      icon={LocalShippingIcon}
      name='suppliers'
      list={PostSupplierList}
      edit={PostSupplierEdit}
      create={PostSupplierCreate}
      options={{ label: 'List Of Suppliers' }}
    />
    <Resource
      icon={StorefrontIcon}
      name='products'
      list={PostProductList}
      edit={PostProductEdit}
      create={PostProductCreate}
      options={{ label: 'List Of Products' }}
    />
    <Resource
      icon={ViewDayIcon}
      name='supplierProducts'
      list={PostSupplierProductList}
      edit={PostSupplierProductEdit}
      create={PostSupplierProductCreate}
      options={{ label: 'List Of SupplierProducts' }}
    />
    <Resource
      icon={ReceiptIcon}
      name='orders'
      list={PostOrderList}
      edit={PostOrderEdit}
      create={PostOrderCreate}
      options={{ label: 'List Of Orders' }}
    />
    <Resource
      icon={ViewDayIcon}
      name='orderDetails'
      list={PostOrderDetailList}
      edit={PostOrderDetailEdit}
      create={PostOrderDetailCreate}
      options={{ label: 'List Of OrderDetails' }}
    />
  </Admin>
)

export default App
