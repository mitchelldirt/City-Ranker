async function getUser() {
    try {
        setLoading(true)
        const { user } = session

        let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', user.id)
            .single()

        if (error && status !== 406) {
            throw error
        }

        if (data) {
            setUsername(data.username)
            setWebsite(data.website)
            setAvatarUrl(data.avatar_url)
        }
    } catch (error) {
        alert(error.message)
    } finally {
        setLoading(false)
    }
}