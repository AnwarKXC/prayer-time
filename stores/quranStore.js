export const useQuranStore = defineStore( "quran", () => {
	const url = ref( '' )
	const title = ref( '' )
	const playlist = ref( '' )
	const img = ref( '' )


	function play( urls, titles, playlists, imgs ) {
		url.value = urls
		title.value = titles
		playlist.value = playlists
		img.value = imgs
	}

	return {
		url,
		title,
		playlist,
		img,
		play
	}
} )



// HMR
if (
	import.meta.hot ) {
	import.meta.hot.accept( acceptHMRUpdate( useQuranStore,
		import.meta.hot ) )
}