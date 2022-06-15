export interface IRootState {
  name: string
  age: number
}

export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
