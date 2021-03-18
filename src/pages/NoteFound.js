import { Typography } from '@material-ui/core'
import React from 'react'

const NotFound = () => {
  const center = {
    textAlign: 'center'
  }

  return (
    <div style={center} >
      <Typography variant="h1">404</Typography>
      <Typography>This is the 404 Page.</Typography>
    </div>
  )
}

export default NotFound
