import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

const useCalculateTotal = () => {
  const itemsInCart = useAppSelector((state) => state.shoppingCart.itemsInCart);

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const subtotals = itemsInCart.map((item) => item.subtotal);
    const total = subtotals.reduce((partialSum, a) => partialSum + a, 0);
    return total;
  };

  useEffect(() => {
    setTotal(calculateTotal());
    // eslint-disable-next-line
  }, [itemsInCart]);

  return { total };
};

export default useCalculateTotal;
