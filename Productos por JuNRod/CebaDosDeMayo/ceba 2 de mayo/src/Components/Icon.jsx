import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const SpanIcon = styled.span`
  height: 20px;
  width: 20px;
  padding-left: 0.4rem;
  float: right;
`;

export const Icon = ({ bandera }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    bandera ? setActive(true) : setActive(false);
  }, [bandera]);

  return (
    <SpanIcon>
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      )}
    </SpanIcon>
  );
};
