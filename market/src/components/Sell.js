import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { CREATE_ITEM_SERVICE_ADDRESS } from '../Paths'
export const Sell = ({ username }) => {
  const [form, setForm] = useState({})
  const [formLoading, setFormLoading] = useState(false)
  const history = useHistory()
  //   const handlePictures = ()
  const handleInput = event => {
    // if (event.target.name === 'picture') {
    //   setForm({ ...form, pictures: event.target.files })
    // } else {
    if (event.target.name === 'price') {
      setForm({ ...form, [event.target.name]: parseInt(event.target.value) })
    } else {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
    // }
  }
  // const validateFile = () => {
  //   const allowedExtensions = /[a-zA-Z0-9]+\.(jpg|png|jpeg)$/i
  //   console.log(form.pictures)
  //   for (let i = 0; i < form.pictures.length; i++) {
  //     if (!allowedExtensions.test(form.pictures[i].name)) {
  //       alert('Please upload valid pictures!')
  //       return false
  //     }
  //   }
  //   return true
  // }
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   if (event.currentTarget.checkValidity() && validateFile()) {
  //     setFormLoading(true)
  //     const data = new FormData(event.target)
  //     console.info('POST', CREATE_ITEM_SERVICE_ADDRESS)
  //     for (var pair of data.entries()) {
  //       console.log(pair[0] + ' - ' + pair[1])
  //     }
  //     fetch(CREATE_ITEM_SERVICE_ADDRESS, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'multipart/formdata',
  //       },
  //       body: data,
  //     }).then(res => {
  //       if (res.status === 200) {
  //         history.push('/')
  //       } else {
  //         alert('An error has occured.')
  //       }
  //       setFormLoading(false)
  //     })
  //   }
  // }
  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    if (event.currentTarget.checkValidity()) {
      setFormLoading(true)
      // const data = new FormData(event.target)
      // console.info('POST', CREATE_ITEM_SERVICE_ADDRESS, form)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ' - ' + pair[1])
      // }
      fetch(CREATE_ITEM_SERVICE_ADDRESS, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/formdata',
          'Content-Type': 'application/json',
        },
        // body: data,
        body: JSON.stringify({ ...form, username: username }),
      }).then(res => {
        if (res.status === 200) {
          alert('Successful')
          history.push('/')
        } else {
          alert('An error has occured.')
        }
        setFormLoading(false)
      })
    }
  }
  return (
    <Container fluid='md' className='mt-4'>
      <h2>Create new listing</h2>
      <Form onChange={handleInput} onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' name='name' required />
        </Form.Group>
        <Form.Group controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='number' name='price' required />
        </Form.Group>
        {/* <Form.Group controlId='picture'>
          <Form.File name='picture' multiple required label='Pictures' />
        </Form.Group> */}
        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={5} name='description' required />
        </Form.Group>
        <Button type='submit' disabled={formLoading}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
new FormData()
