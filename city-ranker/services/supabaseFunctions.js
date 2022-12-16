import { supabase } from './supabaseClient';

export async function verifySession() {
    const result = await supabase.auth.getSession();
    return result !== null ? true : false;
}

export async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
}

export async function logOut() {
    const { error } = await supabase.auth.signOut()
    location.reload()
}

export async function getProfile(user) {
    const { data, error } = await supabase.from('profiles').select('*').eq('id', user.user.id)
    return data;
}

export async function initializeProfile(user) {
    const { data, error } = await supabase
        .from('profiles')
        .insert([
            { id: `${user.user.id}`, username: `${user.user.email}` }
        ])

}

export async function setInitialCityList() {
    const data = await supabase.auth.getSession();
    if (data.data.session) {
        const profile = await getProfile(data.data.session);
        const cityList = await profile[0].city_list;
        return cityList;
    }
    return JSON.stringify([
        { imageURL: 'https://images.pexels.com/photos/432361/pexels-photo-432361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Portland, OR USA', walkScore: '62', bikeScore: '49', transitScore: '83', id: 0 },
        { imageURL: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Seattle, WA USA', walkScore: '74', bikeScore: '60', transitScore: '71', id: 1 },
        { imageURL: 'https://images.pexels.com/photos/3876958/pexels-photo-3876958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Tucson, AZ USA', walkScore: '43', bikeScore: '35', transitScore: '66', id: 2 }
    ])
}

export async function updateUserCityList(cityList) {
    const user = await supabase.auth.getSession();
    if (user.data.session) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .update({ city_list: JSON.stringify(cityList) })
                .match({ id: user.data.session.user.id })

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        }
    }
    return;
}

export function refreshPage() {
    window.location.reload(false);
}