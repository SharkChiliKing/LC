import { ColorPicker as AntdColorPicker, InputNumber } from "antd";
import "./ColorPicker.less";
import { UIContainer, UIContainerProps } from "../ui-container/UIContainer";
import { useState } from "react";

interface ColorPickerProps extends UIContainerProps {
  value?: string;
  defaultValue?: string;
  showText?: boolean;
  disabled?: boolean;
  onChange?: (color: string) => void;
}

export default function ColorPicker(props: ColorPickerProps) {
  const {
    value,
    defaultValue,
    showText,
    disabled,
    onChange,
    ...containerProps
  } = props;

  const [mode, setMode] = useState("single");
  const [num, setNum] = useState(1);

  const _onChange = (color: any) => {
    // const value = color.toHexString();
    var value = "";
    if (color.colors) {
      setMode("gradient");
      value = `linear-gradient(${
        num > 1 ? num + "deg" : "to right"
      }, ${color.colors[0].color.toHexString()}, ${color.colors[1].color.toHexString()})`;
    } else {
      setMode("single");
      value = color.toHexString();
    }
    onChange && onChange(value);
  };

  return (
    <UIContainer {...containerProps} className={"lc-color-pick"}>
      {mode != "single" ? (
        <>
          <InputNumber
            value={num}
            onChange={(e: any) => {
              setNum(e);
            }}
            min={1}
            max={360}
          ></InputNumber>
        </>
      ) : (
        <></>
      )}
      <AntdColorPicker
        size={"small"}
        format={"hex"}
        disabled={disabled}
        value={value}
        mode={["single", "gradient"]}
        defaultValue={defaultValue}
        showText={showText}
        onChange={_onChange}
      />
    </UIContainer>
  );
}
