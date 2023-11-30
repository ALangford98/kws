import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import zapper from 'zapperjs';

//NOTES:
//Zapper Widget is not destrying. Cant see where its renedered but it remains on the app until it is reloaded
//Can find the Element in browser but have not tried to change the css s I dont know where it is
//Possibly not designed for use in React

//TODO:
//Find where the widget is rendered
//Figure out why itsss running in Strict mode (Renders things twice)
//Destroy/unload the widget after it is done being used 

function ZapperPayments() {
	const location = useLocation();
	const [paymentWidget, setPaymentWidget] = useState(null);

  // Calculate the total price including delivery
  const totalPrice = location.state.totalPrice;

  useEffect(() => {
    try {
      // Initialize the payment widget when the component mounts
      const newPaymentWidget = new zapper.payments.PaymentWidget(
		'body', {
			merchantId: 17212,
			siteId: 15076,
			amount: totalPrice,
			reference: 'YourReferenceHere', // replace with your own reference logic
		});

      // Set up the event listener for successful payments
      newPaymentWidget.on('payment', ({ status, paidAmount, zapperId, reference }) => {
        console.log(`Received payment of ${paidAmount} with reference ${reference}!`);
      });

      // Save the payment widget instance to state
      setPaymentWidget(newPaymentWidget);
    } catch (error) {
      console.error('Error initializing Zapper payment widget:', error);
    }

    // Clean up the payment widget when the component unmounts
    return () => {
      if (paymentWidget) {
        paymentWidget.update(0);      
	  }
    };
  }, [totalPrice]);

	console.log(totalPrice)

}

export default ZapperPayments;
