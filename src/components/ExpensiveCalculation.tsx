import { useMemo} from "react";

const ExpensiveCalculation = ({ num }: { num: number }) => {
  const computeFactorial = (n: number): number => {
    console.log("Computing factorial...");
    return n <= 1 ? 1 : n * computeFactorial(n - 1);
  };

  const factorial = useMemo(() => computeFactorial(num), [num]);

  return (
    <div>
      Factorial of {num} is {factorial}
    </div>
  );
};

export default ExpensiveCalculation;
