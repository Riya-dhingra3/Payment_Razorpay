import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { RAZORPAY_KEY_ID } from '@env'; // Ensure you have added @env for secure environment variables

const App = () => {
  const handlePayment = () => {
    const amount = 100; // INR in paise: ₹1 = 100 paise
    const currency = 'INR';
    console.log(RAZORPAY_KEY_ID);
    const options = {
      description: 'Buy BMW CAR',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: RAZORPAY_KEY_ID, // Razorpay Key ID from your .env file
      amount: amount * 100, // Multiply by 100 to convert to smallest currency unit
      name: 'Test User',
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9999999999',
        name: 'Test User',
      },
      theme: { color: '#F37254' },
    };

    RazorpayCheckout.open(options as any)
      .then((data) => {
        alert(`Payment Successful: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        console.log(error);
        alert(`Error: ${error.code} | ${error.description}`);
        console.log(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Razorpay Integration</Text>
      <Text
        onPress={handlePayment}
        style={styles.payButton}
      >
        Pay Now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    margin: 10,
    textAlign: 'center',
  },
});

export default App;
