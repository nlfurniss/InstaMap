Instamap.Utils = {

    loggedInUser: function() {
        return ( Instamap.user.get('access_token') ) ? true: false;
    }

}