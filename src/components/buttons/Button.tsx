import React, { MouseEventHandler } from "react";
// import styled from "styled-components";
import '@mantine/core/styles.css';
import { Button as MantineButton } from '@mantine/core';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  color?: "red" | "blue" | "green" | "yellow" | "orange";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

// const StyledButton = styled.button<ButtonProps>`
//   border: 0;
//   line-height: 1;
//   font-size: 15px;
//   cursor: pointer;
//   font-weight: 700;
//   font-weight: bold;
//   border-radius: 10px;
//   display: inline-block;
//   color: ${(props) => (props.primary ? "#fff" : "#000")};
//   background-color: ${(props) => (props.primary ? "#FF5655" : "#f4c4c4")};
//   padding: ${(props) =>
//     props.size === "small"
//       ? "7px 25px 8px"
//       : props.size === "medium"
//       ? "9px 30px 11px"
//       : "14px 30px 16px"};
// `;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  color,
  onClick,
  ...props
}) => {
  return (
    <MantineProvider theme={theme}>

        <MantineButton
        // type="button"
        // onClick={onClick}
        // primary={primary}
        // disabled={disabled}
        color={color}
        size={size}
        {...props}
      >
        {text}
      </MantineButton>
    </MantineProvider>
  );
};

export default Button;
