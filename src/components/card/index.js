import React, { useEffect, useState } from 'react';

const Card = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(total);
    total < 0 && setTotal(0);
  }, [total]);

  return (
    <div className="card mb-4">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <p>Meu texto do card</p>
        <button className="btn btn-success" onClick={() => setTotal(total + 1)}>
          Adicionar
        </button>
        <button
          className="btn btn-danger"
          disabled={total <= 0}
          onClick={() => setTotal(total - 1)}
        >
          subtrair
        </button>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Card;
