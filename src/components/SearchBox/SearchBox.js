import React from 'react'
import PropTypes from 'prop-types'

import styles from './SearchBox.css'

import Col from 'react-bootstrap/lib/Col'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import Button from 'react-bootstrap/lib/Button'

const SearchBox = ({text, id, onSubmit, onChange}) => (
  <div>
    <Form horizontal className={styles.searchBox + ' commentForm form-horizontal'} onSubmit={(e) => { e.preventDefault(); onSubmit(id) }}>
      <FormGroup controlId='formHorizontalName'>
        <Col sm={4} className={styles.label}>
          <ControlLabel> Username{id} </ControlLabel>
        </Col>
        <Col sm={8}>
          <FormControl
            type='text'
            autoComplete='off'
            placeholder='Enter Github Username'
            value={text}
            onChange={(e) => onChange(e.target.value, id)}
          />
        </Col>
      </FormGroup>
      <FormGroup controlId='formHorizontalSubmit'>
        <Col smOffset={4} sm={8}>
          <Button
            type='submit'
            className='btn btn-primary'
          >
            Submit
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
)

SearchBox.propTypes = {
  text: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchBox
