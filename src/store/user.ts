import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'id',
  state: () => {
    return {
      token: localStorage.getItem('token') || '',
      role: localStorage.getItem('role') || '1',
      userInfo: {},
    }
  },
  actions: {
    setRole(type: string) {
      this.role = type
    },
    setUserInfo(data: any) {
      this.userInfo = data.user_info
      this.token = data.token
      this.role = data.user_info.role || '1'
      localStorage.setItem('token', this.token)
      localStorage.setItem('role', this.role)
    },
  },
})
