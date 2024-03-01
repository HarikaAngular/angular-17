import { Injectable } from '@angular/core';
import {API_URL} from '../../environments/environments'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc: HttpClient) { }
  getProducts()
  {
   return this.hc.get(`${API_URL}`)
  }
  getProduct(id: number)
  {
    return this.hc.get(`${API_URL}/${id}`)
  }
}
