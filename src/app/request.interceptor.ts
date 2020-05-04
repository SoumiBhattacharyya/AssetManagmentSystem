import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

export class RequestInterceptor implements HttpInterceptor{

    intercept(req : HttpRequest<any>, handler : HttpHandler){
        // code to be executed before every request
        let userData = JSON.parse(localStorage.getItem('userData')); 
        if(userData){
            console.log(localStorage.getItem('userData'));
            let token = userData.token;
            var modifiedRequest = req.clone({
                headers: req.headers.append('Authorization',token)
            });
            return handler.handle(modifiedRequest);
        } else {
            return handler.handle(req);
        }        
    } 
}