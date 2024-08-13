import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')){
    return true;
  }else{
    alert('You are not authorized to access this page');
    var router: Router= new Router();
    router.navigate(['/login']
    )
    return false;
    
  }
};
