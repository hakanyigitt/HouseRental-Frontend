import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HouseRental } from '../models/HouseRental';
import { Rental } from '../models/rentals';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor(private httpClient: HttpClient) { }
  
  getName():Observable<SingleResponseModel<string>>{
    let apiLink = environment.apiUrl+"loggeduser/adsoyad";
    return this.httpClient.get<SingleResponseModel<string>>(apiLink);
  }

  getProfileInfo():Observable<SingleResponseModel<User>>{
    let apiLink = environment.apiUrl+"loggeduser/getprofileinfo";
    return this.httpClient.get<SingleResponseModel<User>>(apiLink);
  }

  rentHouse(houseRental:HouseRental):Observable<ResponseModel>{
    let apiLink = environment.apiUrl+"houserentals/add";
    return this.httpClient.post<ResponseModel>(apiLink,houseRental);
  }

}
