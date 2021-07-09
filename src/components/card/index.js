import React, { useEffect, useState } from 'react';
import Button from './../button/index';

const Card = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    total < 0 && setTotal(0);
  }, [total]);

  function operacao(operador) {
    setTotal(eval(`${total} ${operador} 1`));
  }

  return (
    <div className="card mb-4">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <p>Meu texto do card</p>
        <Button onClick={() => operacao('+')}>Adicionar</Button>
        <Button
          className="btn btn-danger"
          disabled={total <= 0}
          onClick={() => operacao('-')}
        >
          subtrair
        </Button>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Card;
