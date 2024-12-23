//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.2.0.0 (NJsonSchema v11.1.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError } from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelToken,
} from "axios";

export class Client {
  private instance: AxiosInstance;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(baseUrl?: string, instance?: AxiosInstance) {
    this.instance = instance ? instance : axios.create();

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
  }

  /**
   * @return OK
   */
  people(
    request?: { id: string },
    cancelToken?: CancelToken | undefined,
  ): Promise<GetPersonResponse> {
    let url_ = this.baseUrl + "/api/People/{id}";
    if (request?.id === undefined || request?.id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + request?.id));
    url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
      method: "GET",
      url: url_,
      headers: {
        Accept: "text/plain",
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processPeople(_response);
      });
  }

  protected processPeople(response: AxiosResponse): Promise<GetPersonResponse> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      let resultData200 = _responseText;
      result200 = JSON.parse(resultData200);
      return Promise.resolve<GetPersonResponse>(result200);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers,
      );
    }
    return Promise.resolve<GetPersonResponse>(null as any);
  }

  /**
   * @return OK
   */
  peopleAll(
    cancelToken?: CancelToken | undefined,
  ): Promise<GetPersonResponse[]> {
    let url_ = this.baseUrl + "/api/People";
    url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
      method: "GET",
      url: url_,
      headers: {
        Accept: "text/plain",
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processPeopleAll(_response);
      });
  }

  protected processPeopleAll(
    response: AxiosResponse,
  ): Promise<GetPersonResponse[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      let resultData200 = _responseText;
      result200 = JSON.parse(resultData200);
      return Promise.resolve<GetPersonResponse[]>(result200);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        "An unexpected server error occurred.",
        status,
        _responseText,
        _headers,
      );
    }
    return Promise.resolve<GetPersonResponse[]>(null as any);
  }
}

export interface GetPersonResponse {
  id: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  createdAt?: Date;
  updatedAt?: Date;
  requestedById?: string | undefined;
}

export class ApiException extends Error {
  override message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any,
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any,
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any): obj is AxiosError {
  return obj && obj.isAxiosError === true;
}
