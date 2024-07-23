import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  isAxiosError,
} from 'axios'

export class HttpClient {
  private readonly client: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create(config)

    this.client.interceptors.request.use(this.onRequest, this.onError)
    this.client.interceptors.response.use(this.onResponse, this.onError)
  }

  get<T>(url: string, params?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.client({
      url,
      params,
      method: 'GET',
      ...config,
    })
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.client({
      url,
      data,
      method: 'PUT',
      ...config,
    })
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.client({
      url,
      data,
      method: 'POST',
      ...config,
    })
  }

  delete<T>(url: string, params?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return this.client({
      url,
      params,
      method: 'DELETE',
      ...config,
    })
  }

  private onResponse(response: AxiosResponse) {
    return response.data
  }

  private onRequest(config: InternalAxiosRequestConfig) {
    // 토큰 처리 방식에 따라 헤더 추가 설정
    return config
  }

  private onError(error: AxiosError) {
    const response = error.response as AxiosResponse

    if (isAxiosError(error)) {
      console.error(response.data)
    }

    return Promise.reject(error)
  }
}
