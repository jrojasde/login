import { Injectable } from '@angular/core';

import { auth } 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {

  public user: User;

  constructor( public afAuth : AngularFireAuth ) { }

  async  login( email: string, password: string ){

    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    return result;

  }

  register(){}

  logout(){}

  getCurrentUser(){}







}
