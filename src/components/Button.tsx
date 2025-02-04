import { memo } from "react";

const Button = memo(({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>{children}</button>;
});

export default Button;
