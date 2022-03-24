import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { letters } from '../../utls/validation'

const InputText = ({label, nameText, id, formState, handleChange, cn, placeholder, setNotification}) => {

  // Validate to make sure only letters are entered
  // If it fails validation set notification error
  useEffect(() => {
    if (!letters(formState.fname) || !letters(formState.lname)) {
      setNotification(prevState => ({...prevState,
        message: 'Names may only contain letters',
        display: true,
        timer: false,
        isError: true
      }))
    } else {
      setNotification(prevState => ({...prevState,
        message: '',
        display: false,
        timer: false,
        isError: false
      }))
    }
  }, [formState])
  
  
  return ( 
  <div className={`inputText ${cn}`}>
    <label htmlFor={id}>{label}</label>
    <input type="text" name={nameText} id={id} value={formState[nameText]} onChange={handleChange} placeholder={placeholder}/>
  </div>
)}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  nameText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  formState: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  cn: PropTypes.string,
  placeholder: PropTypes.string,
  setNotification: PropTypes.func.isRequired
}

export default InputText