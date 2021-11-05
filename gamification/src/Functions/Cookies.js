export function setCookie (key, value) {
    
    localStorage.setItem(key, JSON.stringify(value))
    return value;
    
}

export function getCookie(key) {
    
    return  JSON.parse(localStorage.getItem(key));
  
}


export function deleteAllCookies() {
    
    localStorage.clear();
    return true;
  
}

export function deleteCookie(key) {
    
    localStorage.removeItem(key);  
    return true;

}