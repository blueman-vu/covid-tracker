import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import './InfoBox.css'

function InfoBox ({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
    >
      <CardContent>
        <Typography className='infoBox__title' color= 'textSecondary'> {title}</Typography>
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}> {cases} </h2>
        <Typography className='infoBox_total' color='textSecondary'>
          {total} total
        </Typography>
      </CardContent>
    </Card>
  )
}

InfoBox.propTypes = {
  title: PropTypes.string,
  cases: PropTypes.string,
  total: PropTypes.string,
  active: PropTypes.bool,
  isRed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}
export default InfoBox
