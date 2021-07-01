import React from 'react'
import './Table.css'
import PropTypes from 'prop-types'
import numeral from 'numeral'

function Table ({ countries }) {
  return <div className="table">
    <table>
      <tbody>
        {countries.map(({ country, cases }) => (
          <tr key={country}>
            <td>{country}</td>
            <td><strong>{numeral(cases).format('0,0')}</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

Table.propTypes = {
  countries: PropTypes.array
}

export default Table
