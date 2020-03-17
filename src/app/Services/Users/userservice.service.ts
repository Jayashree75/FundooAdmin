import { Injectable } from '@angular/core';
import{HttpserviceService} from '../Http/httpservice.service'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpservice:HttpserviceService) { }
  Login(data)
  {
    return this.httpservice.post('api/Admin/AdminLogin',data)
  }
  GetStatistics()
  {
    return this.httpservice.get('api/Admin',true)
  }
 
  GetAllUsername(key)
  {
    return this.httpservice.get('api/Admin/AllUser?keyword='+key,true )
  }
  GetAllUser()
  {
    return this.httpservice.get('api/Admin/AllUser',true)
  }
  
}
