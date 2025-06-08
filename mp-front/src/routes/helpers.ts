export const pathsPublic: { [key: string]: string } = {
  home: '/',
  productDetail: '/product/:id',
  login: '/login',
}

export const pathsPrivate: { [key: string]: string } = {
  accountSettings: '/account-settings',
  logout: '/',
}

export const paths: { [key: string]: string } = Object.assign({}, pathsPublic, pathsPrivate)

export const checkPathMatch = (pathname: string, paths: { [key: string]: string }) => {
  let isMatch = false

  const allPaths = Object.keys(paths).map((key) => paths[key])
  const pathFirstSection = pathname.split('/')[1]

  allPaths.forEach((path) => {
    if (path.slice(1) === pathFirstSection) {
      isMatch = true
    }
  })

  return isMatch
}
