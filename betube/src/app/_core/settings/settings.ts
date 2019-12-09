export const settings = {
    domain: 'http://movie0706.cybersoft.edu.vn',
    accessToken: 'accessToken',
    groupID: 'GP01',
    userLogin: 'userLogin',
    displayLoading: function(){
        document.getElementById('loading').style.display = "block";
    },
    hiddenLoading: function(){
        setTimeout(() => {
           window.scrollTo(0,0);
           document.getElementById('loading').style.display = "none"; 
        }, 1000);
    }
}
