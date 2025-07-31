function goBackInHistory() {
  history.back()
}

function setPageTitle(pageTitle) {
  document.title = pageTitle;
}

function logMobileEventOnWeb(mobileNumber) {
  if (ua) {
  	ua.initialize();
  	ua.notify('otp_verified', {'channel_id': 32 , 'mobile': mobileNumber});
//  	ua.event('page_view', {});

    }
}
