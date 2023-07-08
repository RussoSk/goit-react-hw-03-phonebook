import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({ filter, onChange }) => {
    return (
      <label className={css.filterLabel}>
          Filter by name:
          <input type="text" value={filter} onChange={onChange} />
        </label>
    );
  };

  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  