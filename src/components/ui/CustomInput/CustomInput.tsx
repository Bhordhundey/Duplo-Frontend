import { TextField } from "@material-ui/core";
import clsx from "clsx";
import React, { FC } from "react";
import customInputStyle from "./customInputStyle";
export interface CustomInputProps {
  type?: string;
  value?: string;
  placeholder?: string;
  text?: string;
  id?: string;
  inputHeight?: number | string;
  className?: string;
  name: string;
  inputWidth?: number | string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  fontWeight?: React.CSSProperties["fontWeight"];
  fontSize?: React.CSSProperties["fontSize"];
  inputContainerclassName?: string;
  borderRadius?:number,
  backgroundColor?:string,
  defaultValue?:string,
  labelText?:string,
  handleClick?:()=>void,
}

const CustomInput: FC<CustomInputProps> = ({
  value,
  placeholder = "",
  type = "text",
  id = "",
  inputHeight,
  className,
  name,
  handleChange,
  inputWidth,
  multiline,
  fontWeight,
  inputContainerclassName,
  backgroundColor,
  handleClick,
  labelText,
  defaultValue
}) => {
  const classes = customInputStyle();
  
  return (
    <div className={classes.inputContainer}>
      {labelText && (
        <label
         className={clsx(classes.inputLabel)}
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      <TextField
        id={id}
        InputProps={{
          autoFocus: true,
          className: className,
          style: {
            marginTop: 0,
            backgroundColor:backgroundColor,
        
          
          borderWidth: '2px',
          borderImageWidth: 5,
          borderImageSlice: 5
          },
          classes: {
            root: classes.root ,
            input:  classes.input  
            
          },
        }}
        className={inputContainerclassName}
        inputProps={{
          className: "mt-0",
          defaultValue:defaultValue,
          style: {
            height: inputHeight,
            width: inputWidth,
            fontWeight: fontWeight,
            fontSize: 15,
            paddingTop:11,

            marginTop: 0,
          },
        }}
        name={name}
        onClick={handleClick}
        onChange={handleChange}
        autoComplete="new-password" //to disable autocomplete
        variant="outlined"
        value={value}
        multiline={multiline}
        margin="normal"
        placeholder={placeholder}
        type={type}
        fullWidth
      />
      
    </div>
  );
};
export default CustomInput;
