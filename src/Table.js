import React from 'react'
import './Table.css'
import PropTypes from 'prop-types'

function Table ({ countries }) {
  return <div className="table">
    <table>
      <tbody>
        {countries.map(({ country, cases }) => (
          <tr key={country}>
            <td>{country}</td>
            <td><strong>{cases}</strong></td>
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
