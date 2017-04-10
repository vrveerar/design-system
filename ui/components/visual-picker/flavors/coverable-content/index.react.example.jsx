// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';
import _ from 'lodash';
import { Fieldset, Legend, FormElementControl } from 'ui/components/radio-group/flavors/base/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

export let VisualPicker = props => {
  const uniqueId = _.uniqueId('visual-picker-');

  return (
    <div
      className={classNames(
        'slds-visual-picker',
        {
          'slds-visual-picker_large': props.size === 'large',
          'slds-visual-picker_medium': props.size == 'medium'
        }
      )}
    >
      <input
        type={props.type}
        id={uniqueId}
        name="options"
        defaultChecked={props.checked}
        disabled={props.disabled}
      />
      <label htmlFor={ uniqueId }>
        { props.icon ?
          <span
            className={classNames(
              'slds-visual-picker__figure slds-visual-picker__icon slds-align--absolute-center',
              props.className
            )}
          >
            <span className="slds-is-selected">
              <span className="slds-icon_container" title="description of icon when needed">
                <SvgIcon
                  className="slds-icon slds-icon--large slds-icon-action-check"
                  sprite="action"
                  symbol="check"
                />
                <span className="slds-assistive-text">Provide description of icon</span>
              </span>
            </span>
            <span className="slds-is-not-selected">
              <span className="slds-icon_container" title="description of icon when needed">
                <SvgIcon
                  className={classNames(
                    'slds-icon slds-icon-' +
                    props.sprite + '-' +
                    props.symbol + ' slds-icon--large',
                    { 'slds-icon-text-default': props.sprite === 'utility' }
                  )}
                  sprite={props.sprite || 'action'}
                  symbol={props.symbol}
                />
                <span className="slds-assistive-text">Provide description of icon</span>
              </span>
            </span>
          </span>
        :
          <span
            className={classNames(
              'slds-visual-picker__figure slds-visual-picker__text slds-align--absolute-center',
              props.className
            )}
          >
            {props.children}
          </span>
        }
        { props.label ?
          <span className="slds-visual-picker__body">
            {props.label}
          </span>
        : null }
        { !props.icon ?
          <span className="slds-icon_container slds-visual-picker__text-check">
            <SvgIcon
              className="slds-icon slds-icon-text-check slds-icon--x-small"
              sprite="utility"
              symbol="check"
            />
          </span>
        : null }
      </label>
    </div>
  );
};

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'radio-group',
    label: 'Radio group',
    element:
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPicker
            type="radio"
            icon={true}
            sprite="utility"
            symbol="connected_apps"
            label="Connected App"
            size="medium"
          />
          <VisualPicker
            type="radio"
            icon={true}
            sprite="utility"
            symbol="custom_apps"
            label="Custom App"
            size="medium"
          />
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'checkbox-group',
    label: 'Checkbox group',
    element:
      <Fieldset>
        <Legend>Add the following object(s)</Legend>
        <FormElementControl>
          <VisualPicker
            type="checkbox"
            icon={true}
            sprite="standard"
            symbol="account"
            label="Account"
            size="medium"
          />
          <VisualPicker
            type="checkbox"
            icon={true}
            sprite="standard"
            symbol="lead"
            label="Lead"
            size="medium"
          />
          <VisualPicker
            type="checkbox"
            icon={true}
            sprite="standard"
            symbol="orders"
            label="Orders"
            size="medium"
          />
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'disabled',
    label: 'Disabled option',
    element:
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPicker
            type="checkbox"
            icon={true}
            sprite="utility"
            symbol="connected_apps"
            label="Connected App"
            size="medium"
          />
          <VisualPicker
            type="checkbox"
            disabled={true}
            icon={true}
            sprite="utility"
            symbol="custom_apps"
            label="Custom App"
            size="medium"
          />
        </FormElementControl>
      </Fieldset>
  },
  {
    id: 'size-large',
    label: 'Size - Large Picker',
    element:
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPicker
            type="radio"
            icon={true}
            sprite="utility"
            symbol="connected_apps"
            label="Connected App"
            size="large"
          />
          <VisualPicker
            type="radio"
            icon={true}
            sprite="utility"
            symbol="custom_apps"
            label="Custom App"
            size="large"
          />
        </FormElementControl>
      </Fieldset>
  }
];