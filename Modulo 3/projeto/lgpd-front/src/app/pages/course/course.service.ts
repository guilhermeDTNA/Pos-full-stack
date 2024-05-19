import { ErrorHandler, Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

export interface Params {
  [key: string]: any;
}

export interface GetOptions {
  url: string;
  params?: Params;
  data?: any;
}

export interface ErrorResponse {
  id: string;
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  constructor(errorHandler: ErrorHandler) {
    this.errorHandler = errorHandler;

    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });
  }

  // Minuto: 12:30
}
