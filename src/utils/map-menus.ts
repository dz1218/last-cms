import { IBreadcrumb } from '@/base-ui/breadcrumb'
import menu from '@/router/main/system/menu/menu'
import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // console.log(allRoutes)

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []

  for (const menu of userMenus) {
    const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
    if (findMenu) {
      breadcrumbs.push({ name: menu.name })
      // breadcrumbs.push({ name: menu.name, path: menu.url })
      breadcrumbs.push({ name: findMenu.name })
      // breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
    }
  }
  console.log(breadcrumbs)
  return breadcrumbs
}

export { firstMenu }
