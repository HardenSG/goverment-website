/**
 * 静态资源枚举
 */
export const STATIC_IMAGES = {
  material: {
    headerImage: ''
  }
}

/**
 * 后台地址枚举
 */
export const BACKEND_SERVICE_IP = {
  ONLINE: 'https://localhost:8080',
  OFFLINE: 'http://localhost:8080'
}

/**
 * 服务接口地址
 */
export const SERVICE_IP = process.env.ONLINE
  ? BACKEND_SERVICE_IP['ONLINE']
  : BACKEND_SERVICE_IP['OFFLINE']
