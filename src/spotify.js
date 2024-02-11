
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint='https://accounts.spotify.com/authorize';

const redirectUrl='http://localhost:3000/'

const clientId='6652c8fb2ed446aab7d418a66ba712b6'

const scopes=[
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

export const getTokeFromUrl=()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts=item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{});
}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

//token-string represents autentication, path to prove that you are who you are