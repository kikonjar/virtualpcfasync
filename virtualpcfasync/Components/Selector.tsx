import * as React from 'react';
import { Dropdown, IDropdownOption, IDropdownStyles } from '@fluentui/react';
import { useEffect, useState } from 'react';
import ObtenerLista from '../Helpers/Helper';

export interface ISelectorProps {
  optionList: IDropdownOption[];
  defaultValue?: string;
  onChange: (selectedOption?: IDropdownOption) => void;
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 700 },
};




export function SelectorFuncional(props: ISelectorProps) {
    const [ListaOpciones, setListaOpciones] = useState<Array<IDropdownOption>>([]);

    useEffect(() => {
        ObtenerLista().then((lista) => {
            setListaOpciones(lista);
        });
    })

    return <Dropdown
    placeholder="Select a template"
    options={ListaOpciones}
    styles={dropdownStyles}
    defaultSelectedKey={props.defaultValue}
    onChange={(e: any, option?: IDropdownOption) => {
      props.onChange(option);
    }}
    
  />
}


