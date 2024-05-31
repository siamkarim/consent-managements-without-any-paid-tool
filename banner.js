    //Cookies JS code
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  
    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
  
    // Function to erase a cookie
    function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
  
    // Event listener for the Accept button
    document.getElementById('btn-accept-all').addEventListener('click', function () {
        setCookie('cookiesAccepted', 'true', 365); // Set cookie for 1 year
        document.getElementById('cookie-consent-banner').style.display = 'none';
    });
  
    // Event listener for the Decline button
    document.getElementById('btn-reject-all').addEventListener('click', function () {
        eraseCookie('cookiesAccepted'); // Erase the cookie
        document.getElementById('cookie-consent-banner').style.display = 'none';
    });
  
    // Check if the cookie exists on page load
    window.onload = function () {
        if (getCookie('cookiesAccepted')) 
        {
            document.getElementById('cookie-consent-banner').style.display = 'none';
        }
    };
      