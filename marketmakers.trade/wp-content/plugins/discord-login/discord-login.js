jQuery(document).ready(function($) {
    discordLogin()
});

function discordLogin() {
    $('#discord-login-button').on('click', function() {
        const redirect_uri = discord_login_vars.redirect_uri;
        const client_id = discord_login_vars.client_id;

        if (document.querySelector('.page-template-page-checkout')) {
            localStorage.setItem('checkoutPage', 'true');
        }

        const auth_url = 'https://discord.com/api/oauth2/authorize?client_id=' + client_id +
            '&redirect_uri=' + redirect_uri +
            '&response_type=code' +
            '&scope=identify%20email' +
            '&state=' + 'login';

        window.location.href = auth_url;
    });

    $('.connect-discord').on('click', function() {
        const redirect_uri = discord_login_vars.redirect_uri;
        const client_id = discord_login_vars.client_id;

        localStorage.setItem('discordConnect', 'true');

        if (document.querySelector('.page-template-page-checkout')) {
            localStorage.setItem('connectDiscord', 'true');
        }

        const auth_url = 'https://discord.com/api/oauth2/authorize?client_id=' + client_id + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code' + '&scope=identify%20email%20guilds%20guilds.join';

        window.location.href = auth_url;
    });

    $('.connect-discord-checkout').on('click', function() {
        setTimeout(() => {
            const redirect_uri = discord_login_vars.redirect_uri;
            const client_id = discord_login_vars.client_id;

            localStorage.setItem('discordConnect', 'true');

            if (document.querySelector('.page-template-page-checkout')) {
                localStorage.setItem('connectDiscord', 'true');
            }

            const auth_url = 'https://discord.com/api/oauth2/authorize?client_id=' + client_id + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code' + '&scope=identify%20email%20guilds%20guilds.join';

            window.location.href = auth_url;
        }, 300);
    });
}