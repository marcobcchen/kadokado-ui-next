/** @jsxImportSource theme-ui */
import { Fragment, memo, ReactNode } from "react";
import { Button as ThemeUIButton, ButtonProps, Spinner } from "theme-ui";

interface Props {
  children: ReactNode;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  isLoading?: boolean;
  size?: "lg" | "sm";
  buttonType?: "primary" | "secondary";
  buttonStyle?: "filled" | "outlined";
}

/**
 * @name Button
 * @param props.prefixIcon 前綴icon
 * @param props.suffixIcon 後綴icon
 * @param props.isLoading loading 狀態
 * @param props.size 按鈕大小，預設 lg
 * @param props.buttonType 按鈕類型，預設 primary
 * @param props.buttonStyle 按鈕樣式，預設 filled
 * @description
 * 1) prefixIcon、suffixIcon 組件已預設 icon 大小，不需要再傳入  (sm: 16x16、lg: 24x24)
 * 2) loading 傳入時，會同時觸發顯示 spinner 和 disable button
 * 3) props 包含 ButtonProps，Theme-UI Button 元件可以使用的所有 props 都可以使用，也支援傳入 sx 修改按鈕樣式
 */
const Button = ({
  children,
  prefixIcon,
  suffixIcon,
  isLoading = false,
  size = "lg",
  buttonType = "primary",
  buttonStyle = "filled",
  ...buttonProps
}: Props & ButtonProps) => {
  return (
    <ThemeUIButton
      variant={`buttons.${buttonStyle}_${buttonType}`}
      sx={{ variant: `buttons.${size}` }}
      {...buttonProps}
      disabled={isLoading || buttonProps.disabled}
    >
      {isLoading ? (
        <Spinner variant="styles.spinner" size={24} />
      ) : (
        <Fragment>
          {prefixIcon}
          {children}
          {suffixIcon}
        </Fragment>
      )}
    </ThemeUIButton>
  );
};

export default memo(Button);
