import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const Checkout = () => {
  const { cart, getCartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: user?.name || '',
      email: user?.email || '',
      address: '',
      city: '',
      postalCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
      cardNumber: Yup.string().required('Required').min(16, 'Invalid card number'),
      expiryDate: Yup.string().required('Required').matches(/^\d{2}\/\d{2}$/, 'Invalid format (MM/YY)'),
      cvv: Yup.string().required('Required').matches(/^\d{3,4}$/, 'Invalid CVV')
    }),
    onSubmit: async (values) => {
      setIsProcessing(true);
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
      toast.success('Order placed successfully!');
      navigate('/order-confirmation');
    }
  });

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-6 text-2xl font-bold">Checkout</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-lg font-semibold">Shipping Information</h3>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  {...formik.getFieldProps('fullName')}
                  className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-sm text-red-600">{formik.errors.fullName}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...formik.getFieldProps('email')}
                  className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-sm text-red-600">{formik.errors.email}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  {...formik.getFieldProps('address')}
                  className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                />
                {formik.touched.address && formik.errors.address && (
                  <div className="text-sm text-red-600">{formik.errors.address}</div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('city')}
                    className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className="text-sm text-red-600">{formik.errors.city}</div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('postalCode')}
                    className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                  />
                  {formik.touched.postalCode && formik.errors.postalCode && (
                    <div className="text-sm text-red-600">{formik.errors.postalCode}</div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  {...formik.getFieldProps('cardNumber')}
                  placeholder="1234 5678 9012 3456"
                  className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                />
                {formik.touched.cardNumber && formik.errors.cardNumber && (
                  <div className="text-sm text-red-600">{formik.errors.cardNumber}</div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('expiryDate')}
                    placeholder="MM/YY"
                    className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                  />
                  {formik.touched.expiryDate && formik.errors.expiryDate && (
                    <div className="text-sm text-red-600">{formik.errors.expiryDate}</div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    type="text"
                    {...formik.getFieldProps('cvv')}
                    placeholder="123"
                    className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm"
                  />
                  {formik.touched.cvv && formik.errors.cvv && (
                    <div className="text-sm text-red-600">{formik.errors.cvv}</div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors ${
                  isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isProcessing ? 'Processing...' : `Pay $${getCartTotal().toFixed(2)}`}
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex justify-between font-bold">
                  <p>Total</p>
                  <p>${getCartTotal().toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;