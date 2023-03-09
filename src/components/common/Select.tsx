import { chakra } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import ReactSelect, { GroupBase, StylesConfig } from 'react-select'

const Select = chakra(ReactSelect)

const customStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
  control: (provided, state) => {
    return {
      ...provided,
      color: '#fff',
      backgroundColor: '#1A293D',
      borderColor: '#62614F',
      borderRadius: '0px 15px 0px 15px',
      padding: '5px 5px',
      overflow: 'hidden',
    }
  },
  option: (provided, state) => ({
    ...provided,
    color: '#fff',
    backgroundColor: state.isSelected ? '#223651' : '#1A293D',
    padding: '10px 15px',
  }),
  singleValue: (provided, state) => {
    return { ...provided, color: '#fff', backgroundColor: '#1A293D', }
  },
}

const CustomSelect: NextComponentType<NextPageContext, {}, any> = (props) => (
  <Select
    styles={customStyles}
    {...props}
  />
)

export default CustomSelect
