import React, { useMemo } from 'react';
import Layout from '../components/Layout';
import { updateItem, removeItem } from '../reducers/cartReducer';
import { Button, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store?.cart?.cart);

  const total = useMemo(() => {
    let totalPrice = 0;
    cart?.forEach((cartItem) => {
      totalPrice += cartItem?.product?.price * cartItem?.quantity;
    });
    return totalPrice;
  }, [cart]);

  return (
    <Layout>
      <h1>Cart</h1>
      {cart?.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          onRemove={() => dispatch(removeItem(cartItem?.product?._id))}
          onUpdate={(updatedCartItem) => {
            dispatch(updateItem(updatedCartItem));
          }}
        />
      ))}
      <Card className="mt-2">
        <Card.Body>
          <div className=" d-flex align-items-center justify-content-between">
            <h6 className="m-0">Total Price: ${total}</h6>
            <Button className="btn-warning">
              <Link to="/checkout" className="text-dark">
                Checkout
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Layout>
  );
}

function CartItem({ cartItem, onRemove, onUpdate }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div style={{ width: 50 }}>
            <Image
              className="w-100"
              src={`http://localhost:4040/images/${cartItem?.product?.image}`}
              rounded
            />
          </div>
          <h6 className="m-0">{cartItem?.product?.title}</h6>{' '}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="m-0">${cartItem?.product?.price}</p>
          <div className="d-flex align-items-center">
            <Button
              className="btn-sm"
              onClick={() => {
                if (cartItem?.quantity > 1) {
                  onUpdate({ ...cartItem, quantity: cartItem?.quantity - 1 });
                }
              }}
            >
              -
            </Button>
            <p className="m-0 mx-3">{cartItem?.quantity}</p>
            <Button
              className="btn-sm"
              onClick={() =>
                onUpdate({ ...cartItem, quantity: cartItem?.quantity + 1 })
              }
            >
              +
            </Button>
          </div>

          <Button className="btn-sm btn-danger" onClick={onRemove}>
            Remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
