import { environment } from 'src/environments/environment'

export class GoogleSignInService {

    /** Init Google SDK  */
  static  initGoogleSDK(): Promise<gapi.auth2.GoogleAuth> {

        return new Promise((resolve, reject) => {
            (<any>window)["googleSDKLoaded"] = () => {
                gapi.load('auth2', () => {
                    resolve(
                        gapi.auth2.init({
                            client_id: environment.googleClinetId,
                            scope: "email profile"
                        })
                    )
                }) 
            }

            (function () {
                let elemnt = document.createElement("script");
                elemnt.src="https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
                document.body.insertAdjacentElement("beforeend",elemnt)
            })()
        });
    }



}//End Class