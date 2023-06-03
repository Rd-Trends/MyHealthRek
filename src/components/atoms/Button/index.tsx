"use client";

import React from "react";
import styles from "./button.module.scss";
import { ButtonGenre, ButtonProps, ButtonSize, ButtonVariant } from "@/types";
const Button = ({
  children,
  genre = ButtonGenre.Button,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Medium,
  outline = false,
  ...attribs
}: ButtonProps) => {
  return (
    <button
      className={styles.btn}
      data-size={size}
      data-genre={genre}
      data-variant={variant}
      data-outline={outline}
      {...attribs}
    >
      {children}
    </button>
  );
};

export default Button;
