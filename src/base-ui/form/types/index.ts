type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  otherOptions?: any[]
  // 针对其它
  options?: any
  // label-width?: string
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
