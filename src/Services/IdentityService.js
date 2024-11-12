class IdentityService{
     CreateUser = async (data) =>{
    var response =  await fetch(`${process.env.REACT_APP_URI_API}/Identity/lutador`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        var responseJson =  await response.json();
return responseJson;    
    }
}

const identityServiceInstance = new IdentityService();
export default identityServiceInstance;