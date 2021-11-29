import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = ({order}) => {
    const paypalConfig = {
        currency: 'MXN',
        env: 'sandbox',
        client: {
            sandbox: 'Ad5o2fbheXy4jmaa2B3wEiqxNSoSibtPDSvwS9C8AALf1xtQQIkxlvsgeI_6WN88ZbexRmjxgsq1pK7W',
            production: '--id--',
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'gold'
        }
    };
    const PayPalButton = paypal.Button.driver('react', {React, ReactDOM});

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount: {
                        total: order.total,
                        currency: paypalConfig.currency,
                    },
                    description: 'Compra en Shopping App',
                    custom: order.customer || '',
                    item_list: {
                        items: order.items
                    }
                }
            ],
            note_to_payer: 'Contactanos para cualquier aclaración',
        };
        return actions.payment.create ({payment});
    };
    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response =>{
            console.log(response);
            alert(`El pago fue procesado correctamente, ID: ${response.id}`);
        })
        .catch(error =>{
            console.log(error);
            alert('Ocurrió un error al momento de realizar el pago');
        });
    };
    const onError = (error) => {
        console.log(error);
        alert('El pago no fue realizado, vuelva a intentarlo');
    };
    const onCancel = (data, actions) => {
        alert('Pago no realizado, el usuario ha cancelado el proceso');
    };
    return (
        <PayPalButton
            env = {paypalConfig.env}
            client={paypalConfig.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(data, actions)=> onCancel(data, actions)}
            onError={(error)=>onError(error)}
            style={paypalConfig.style}
            commit
            locale="es_MX"
        />
    );
};
export default PaypalCheckoutButton;