import React from 'react';
import './successContainer.css';
import { Title } from '../../commons/title';
import { CartList } from '../cartContainer/components/cartList';
import { PriceSummary } from '../../commons/priceSummary';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

const component = ({ products, card }) => {
  return (
    <div className="success">
      <div className="imgTitle">
        <FontAwesomeIcon className="icon" icon={faCheckCircle} />
        <Title classname="titleText" text="COMPRA EFETUADA COM SUCESSO" />
      </div>
      {card.cardNum && card.cardName && card.cardExp && (
        <>
          <Title text="PAGAMENTO" />
          <div className="paymentData">
            <div>{'****.****.****.' + card.cardNum.substring(card.cardNum.length - 4)}</div>
            <div>{card.cardName}</div>
            <div>{card.cardExp}</div>
          </div>
        </>
      )}
      <Title text="PRODUTOS" />
      <CartList items={products.items} />
      <PriceSummary
        subTotal={products.subTotal}
        shippingTotal={products.shippingTotal}
        discount={products.discount}
        total={products.total}
      />
    </div>
  );
};

const SuccessContainer = connect((state) => ({ products: state.products, card: state.card }))(
  component
);

export { SuccessContainer };
