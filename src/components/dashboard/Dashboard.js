import * as React from 'react'
import { Title } from 'react-admin'
import { Card, CardContent, CardHeader } from '@material-ui/core'

export const Dashboard = () => (
  <Card>
    <Title title='Welcome to the Inventory System' />
    <CardHeader title='Welcome to the Inventory System' />
    <CardContent>
      A Convenient, Reliable application for managing the inventory data.
    </CardContent>
  </Card>
)
