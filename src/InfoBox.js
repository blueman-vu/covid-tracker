import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

function InfoBox ({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        <Typography className='infoBox__title' color= 'textSecondary'> {title}</Typography>
        <h2 className='infoBox__cases'> {cases} </h2>
        <Typography className='infoBox_total' color='textSecondary'>
          {total} total
        </Typography>
      </CardContent>
    </Card>
  )
}

InfoBox.propTypes = {
  title: PropTypes.string,
  cases: PropTypes.number,
  total: PropTypes.number
}
export default InfoBox
