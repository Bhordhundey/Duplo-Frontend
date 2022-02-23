import { Button, ButtonProps, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { white } from '../../../theme/default';
import CustomCircleLoader from '../Loader/CustomCircleLoader';
import customButtonStyle from './customButtonStyle';

export interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  text?: string | undefined;
  width?: number;
  height?: number;
  default?: boolean;
  show?: boolean;
  fontSize?: number;
  className?: string;
  id: string;
  backgroundColor?: string;
  textColor?: string;
  style?: any;
  bordered?:boolean,
  fontWeight?:any,
  borderColor?:string,
  disabled?:boolean,
  buttonType?:'cancel'|'normal',
  themeLoadingColor?:boolean
}
const CustomButton = ({
  show = true,
  id,
  backgroundColor,
  style,
  textColor,
  fontSize,
  loading,
  text,
  className,
  width,
  height = 55,
  bordered,
  borderColor,
  fontWeight,
  buttonType,
  disabled,
  themeLoadingColor,
  ...rest
}: CustomButtonProps) => {
  const classes = customButtonStyle();
  const appTheme = useTheme()
  return (
    <>
      {show && (
        <Button
          className={clsx(classes.root, classes.label, className, ' cursor-pointer')}
          classes={{
            disabled: disabled && !loading ? classes.disabled : disabled && loading ?classes.disablednormal: classes.enabled,
            root: rest.default ? classes.default : ''
          }}
          id={id}
          disabled={disabled}
          style={{
            ...style,
            ...{
              border:bordered && `1.9px solid ${borderColor||appTheme.palette.secondary.main}`,
              fontWeight:bordered ?fontWeight||300:fontWeight,
              width: width, height: height, fontSize: fontSize, color: textColor }
          }}
          {...rest}
          disableElevation
        >
          {text}
          {loading && (
            <div style={{ marginTop: '6px' }} className="ms-2">
              <CustomCircleLoader color={themeLoadingColor ? appTheme.palette.primary.main : white} />
            </div>
          )}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
