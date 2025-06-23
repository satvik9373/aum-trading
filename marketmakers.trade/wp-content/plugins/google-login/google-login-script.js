jQuery(document).ready(function($) {
    googleLogin()
});

function googleLogin() {
    $('#google-login-button').on('click', function() {
        const redirect_uri = google_login_vars.redirect_uri;
        const client_id = google_login_vars.client_id;

        if (document.querySelector('.page-template-page-checkout')) {
            localStorage.setItem('checkoutPage', 'true');
        }

        window.location.href = 'https://accounts.google.com/o/oauth2/auth?' +
            'client_id=' + client_id +
            '&redirect_uri=' + encodeURIComponent(redirect_uri) +
            '&response_type=code' +
            '&scope=email%20profile';
    });
}