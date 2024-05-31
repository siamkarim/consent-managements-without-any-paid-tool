 
      window.dataLayer = window.dataLayer || [];

      function gtag() {
          dataLayer.push(arguments);
      }

      if (localStorage.getItem('consentMode') === null) {
          gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'personalization_storage': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'denied',
          });
      } else {
          gtag('consent', 'default', JSON.parse(localStorage.getItem('consentMode')));
      }

      if (localStorage.getItem('userId') != null) {
          window.dataLayer.push({
              'user_id': localStorage.getItem('userId')
          });
      }


  
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5ZK559W');