import siteSettings from './siteSettings'
import page from './page'
import productCategory from './productCategory'
import product from './product'
import mainNavigation from './mainNavigation'
import homePage from './homePage'
import categoryPage from './categoryPage'
import cataloguePage from './cataloguePage'
import contactPage from './contactPage'
import footerContent from './footerContent'
import {navColumn} from './objects/navColumn'
import {navLinkNested, navSubGroup} from './objects/navLink'

export const schemaTypes = [
  navSubGroup,
  navLinkNested,
  navColumn,
  siteSettings,
  homePage,
  mainNavigation,
  categoryPage,
  cataloguePage,
  contactPage,
  footerContent,
  page,
  productCategory,
  product,
]
