import React, {Component} from "react";
import {Label, Input} from "reactstrap";
import classnames from 'classnames';
import faUnicode from 'fontawesome';

const getSwitchColorClass = (color='secondary', outline, alt) => {
  const className = ['switch', color];

  if (outline)
    className.push('outline');

  if (alt)
    className.push('alt');

  return className.join('-');
};

const getSwitchLabelProps = (onText, offText, onIcon, offIcon) => {
  const props = {};

  if (onText || offText) {
    props['data-on'] = onText || 'On';
    props['data-off'] = offText || 'Off';
  } else if (onIcon || offIcon) {
    props['data-on'] = faUnicode(onIcon) || faUnicode('check');
    props['data-off'] = faUnicode(offIcon) || faUnicode('times');
  }

  return props;
};

const Switch = props => {
  const {
    color,
    make3d,
    pill,
    outline,
    alt,
    size,
    onText,
    offText,
    onIcon,
    offIcon,
    ...inputProps
  } = props;

  const switchType = make3d ? '3d' : 'default';
  const colorClass = getSwitchColorClass(color, outline, alt);

  const labelClassName = classnames('switch', `switch-${switchType}`, colorClass, {
    'switch-pill': pill && !make3d,
    'switch-text': onText || offText,
    'switch-icon': onIcon || offIcon,
    [`switch-${size}`]: size,
  });

  const switchLabelProps = getSwitchLabelProps(onText, offText, onIcon, offIcon);

  return (
    <Label className={labelClassName}>
      <Input
        type="checkbox"
        className="switch-input"
        {...inputProps}
      />
      <span className="switch-label" {...switchLabelProps}></span>
      <span className="switch-handle"></span>
    </Label>
  );
};

export default Switch;
