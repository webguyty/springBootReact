import React, {useState, useEffect} from 'react'

import Header3 from '../Header3'
import InputText from './InputText'
import InputCheckText from './InputCheckText'
import InputSelect from './InputSelect'
import SubmitBtn from '../SubmitBtn'
import Notification from '../Notification'

const Form = () => {
  const [formState, setFormState] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    isEmail: false,
    isPhone: false,
    supervisor: ''
  })

  const [supervisorList, setSupervisorList] = useState(['Select...', 'two', 'three'])

  // Notification state - display error or success
  const [notification, setNotification] = useState({
    message: '',
    display: true,
    isError: false,
    timer: false,
  })

  // Handle change for text, checkbox, and select input
  const handleChange = e => {
    switch (e.target.type) {
      case 'text': setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}))
        break
      case 'checkbox': setFormState(prevState => ({...prevState, [e.target.name]: e.target.checked}))
        break
      case 'select-one': setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}))
        break
      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formState);
    console.log(notification);
    // 
    // Validation
    // 

    if (notification.isError) return

    // Make sure an email or phone is provided
    if (!formState.fname && !formState.lname) {
      setNotification(prevState => ({...prevState,
        message: 'Must include first name and last name',
        display: true,
        timer: true,
        isError: true
      }))
      return
    }

    // Phone or email preference
    if (!formState.isEmail && !formState.isPhone) {
      setNotification(prevState => ({...prevState,
        message: 'Must include phone number or email preference',
        display: true,
        timer: true,
        isError: true
      }))
      return
    }

    // Make sure a valid phone number if that is preference
    if (formState.isPhone) {
      if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formState.phone)) {
        setNotification(prevState => ({...prevState,
          message: 'Phone number must be 10 digits',
          display: true,
          timer: true,
          isError: true
        }))
        return
      }
    }

    // Make sure a valid phone number if that is preference
    if (formState.isEmail) {
      if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formState.email.toLowerCase())) {
        setNotification(prevState => ({...prevState,
          message: 'Email address must be valid',
          display: true,
          timer: true,
          isError: true
        }))
        return
      }
    }

    // Delete uneeded fields from response
    const properties = {...formState}
    !properties.isEmail && delete properties.email
    !properties.isPhone && delete properties.phone

    // 
    // Succesful Submission
    // 

    setNotification(prevState => ({...prevState,
      message: 'Thank you for filling out the notification form!',
      display: true,
      timer: true,
      isError: false
    }))

    setFormState({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      isEmail: false,
      isPhone: false,
      supervisor: ''
    })
  }

  useEffect( () => {
   console.log('Loaded');
  }, [])
  
  return (
    <div className='notif'>
      <Header3 title='Notification Form' cn='notif_header'/>
      <div className="notif_body">
        {notification.display && <Notification notification={notification} setNotification={setNotification} />}
        <form onSubmit={handleSubmit}>
          {/* Grid 2x1 */}
          <div className="notif_grid notif_grid-2x">
            <InputText 
              label='First Name' 
              nameText='fname'
              id='notif_fname'
              formState={formState}
              handleChange={handleChange}
              cn='notif_inputText'
              setNotification={setNotification}
            />
            <InputText 
              label='Last Name' 
              nameText='lname'
              id='notif_lname'
              formState={formState}
              handleChange={handleChange}
              cn='notif_inputText'
              setNotification={setNotification}
            />
          </div>
          {/* Grid 2x1 */}
          <p className='notif_preference'>How Would you like to be notified?</p>
          <div className="notif_grid notif_grid-2x">
            <InputCheckText 
              label='Email' 
              nameText='email'
              nameCheck='isEmail'
              id='notif_email'
              formState={formState}
              handleChange={handleChange}
              placeholder='johnsmith@gmail.com'
              cn='notif_inputCheckText'
              setNotification={setNotification}
            />
            <InputCheckText 
              label='Phone Number' 
              nameText='phone'
              nameCheck='isPhone'
              id='notif_phone'
              formState={formState}
              handleChange={handleChange}
              placeholder='(805) 652-6844'
              cn='notif_inputCheckText'
              setNotification={setNotification}
            />
          </div>
          <div className="notif_select">
            <InputSelect 
              label='Supervisor' 
              name='supervisor'
              id='notif_supervisor'
              formState={formState}
              handleChange={handleChange}
              list={supervisorList}
            />
          </div>
          <SubmitBtn title='SUBMIT' />
        </form>
      </div> {/* End notif_body*/}
    </div>
  )
}

export default Form