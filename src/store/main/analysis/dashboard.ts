import { Module } from 'vuex'

import { IDashboardState } from './type'
import { IRootState } from '@/store/types'

import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodCount(state, payload) {
      state.categoryGoodsCount = payload
    },
    changeCategoryGoodFavor(state, payload) {
      state.categoryGoodsFavor = payload
    },
    changeCategoryGoodSale(state, payload) {
      state.categoryGoodsSale = payload
    },
    changeAddressGoodCount(state, payload) {
      state.addressGoodsSale = payload
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult: any = await getCategoryGoodsCount()
      commit('changeCategoryGoodCount', categoryGoodsCountResult.data)
      const categoryGoodsFavorResult: any = await getCategoryGoodsFavor()
      commit('changeCategoryGoodFavor', categoryGoodsFavorResult.data)
      const categoryGoodsSaleResult: any = await getCategoryGoodsSale()
      commit('changeCategoryGoodSale', categoryGoodsSaleResult.data)
      const addressGoodsSaleResult: any = await getAddressGoodsSale()
      commit('changeAddressGoodCount', addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule
