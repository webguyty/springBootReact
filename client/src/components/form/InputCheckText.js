import PropTypes from 'prop-types'

const InputCheckText = ({label, nameCheck, nameText, id, formState, handleChange, cn, placeholder, setNotification}) => {
  return (
    <div className={`inputText ${cn}`}>
      <div className='inputCheck'>
        <input id={id} name={nameCheck} checked={formState[nameCheck]} type="checkbox" onChange={handleChange}/>
        <label htmlFor={id}>{label}</label>
      </div>
      <input type="text" 
        name={nameText}  
        value={formState[nameText]} 
        onChange={handleChange} 
        placeholder={placeholder}
      />
    </div>
)}

InputCheckText.propTypes = {
  label: PropTypes.string.isRequired,
  nameCheck: PropTypes.string.isRequired,
  nameText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  formState: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  cn: PropTypes.string,
  placeholder: PropTypes.string,
  setNotification: PropTypes.func.isRequired
}
export default InputCheckText