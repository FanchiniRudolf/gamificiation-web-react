export function setCookie (key, value) {
    
    localStorage.setItem(key, value)
    return value;
}

export function getCookie(key) {
    
    return  localStorage.getItem(key);
  
}


export function logOut(key) {
    
    //TODO erase all cookies
  
}