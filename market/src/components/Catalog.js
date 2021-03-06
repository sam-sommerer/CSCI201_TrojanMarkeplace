import React, { useState, useEffect } from 'react'
import {
  Container,
  Table,
  Spinner,
  Button,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ALL_ITEMS_SERVICE_ADDRESS } from '../Paths'
// import ItemCard from './ItemCard'
// import { ItemModal } from './ItemModal'
import { BUY_ITEM_SERVICE_ADDRESS } from '../Paths'

export const Catalog = ({ username, searchitems }) => {
  // const [modalItemID, setModalItemID] = useState(-1)
  const [items, setItems] = useState(searchitems || [])
  const [page, setPage] = useState(1)
  const [Loaded, setLoaded] = useState(false)
  // const handleClick = itemid => {
  //   setModalItemID(itemid)
  // }

  const handleBuy = item => {
    // console.info('POST ' + BUY_ITEM_SERVICE_ADDRESS, {
    //   itemid: item.itemId,
    //   username: username,
    // })
    fetch(BUY_ITEM_SERVICE_ADDRESS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemid: item.itemId,
        username: username,
      }),
    }).then(res => {
      if (res.status === 200) {
        alert('Successful. Waiting for seller approval now.')
      } else {
        alert('Item is not available.')
      }
    })
  }

  useEffect(() => {
    if (searchitems) return
    const query = sessionStorage.getItem('username')
      ? '?name=' + sessionStorage.getItem('username')
      : ''
    // console.info('GET ' + ALL_ITEMS_SERVICE_ADDRESS + query)
    fetch(ALL_ITEMS_SERVICE_ADDRESS + query)
      .then(res => res.json())
      .then(res => {
        setLoaded(true)
        setItems(res.filter(e => e.sellerName !== username))
      })
  }, [username])

  // const closeModal = useCallback(() => {
  //   setModalItemID(-1)
  // }, [])

  const handlePageChange = newPage => {
    setPage(newPage)
    window.scrollTo(0, 0)
  }

  // const itemCards =
  //   items &&
  //   items.slice((page - 1) * 20, page * 20).map(item => (
  //     <Col key={page + '.' + item.itemid}>
  //       <ItemCard username={username} item={item} handleClick={handleClick} />
  //     </Col>
  //   ))

  const catalogTable =
    items &&
    items.slice((page - 1) * 20, page * 20).map(item => (
      <tr key={item.itemid}>
        <OverlayTrigger
          trigger='hover'
          placement='auto-start'
          overlay={
            <Popover>
              <Popover.Content>{item.description}</Popover.Content>
            </Popover>
          }
        >
          <td style={{ width: '50%' }}>{item.name}</td>
        </OverlayTrigger>
        <td style={{ width: '20%' }}>${item.price}</td>
        <td style={{ width: '20%' }}>{item.sellerName}</td>
        {/* <td>{item.description}</td> */}
        <td style={{ width: '10%' }}>
          <Button onClick={() => handleBuy(item)} disabled={!username}>
            Buy now
          </Button>
        </td>
      </tr>
    ))
  return (
    <>
      <Container fluid='lg' className='my-5'>
        {username ? (
          <Button as={Link} to={'/create'} className='mb-3'>
            Create new listing
          </Button>
        ) : (
          ''
        )}
        {Loaded ? (
          items.length !== 0 ? (
            <>
              <Table hover>
                <thead>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Seller</th>
                  {/* <th>Description</th> */}
                  <th></th>
                </thead>
                <tbody>{catalogTable}</tbody>
              </Table>
              {page !== 1 ? (
                <Button
                  onClick={() => handlePageChange(page - 1)}
                  className='mr-3'
                >
                  Previous
                </Button>
              ) : (
                ''
              )}
              {page !== Math.ceil(items.length / 20) ? (
                <Button onClick={() => handlePageChange(page + 1)}>Next</Button>
              ) : (
                ''
              )}
            </>
          ) : (
            <p className='loading-spinner'>No item for you. Sad.</p>
          )
        ) : (
          <Spinner
            animation='border'
            variant='primary'
            className='loading-spinner'
          />
        )}
      </Container>
      {/* <ItemModal username={username} itemid={modalItemID} close={closeModal} /> */}
    </>
  )
}
