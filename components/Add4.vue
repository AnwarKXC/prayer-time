<template>
	<div class=" bg-white rounded-[10px] border border-gray-200 px-4 py-6">
		<div class=" grid md:grid-cols-2 gap-4 ">
			<div class=" cent">
				<div class="grid gap-2 max-md:justify-items-center">
					<p class="max-md:text-center text-zinc-700 text-[15px] font-normal  ">
						احصل على تنبيه مواقيت الصلاة على هاتفك مجانًا.</p>
					<h2 class="h__primary max-md:text-center">فاتتك صلاتك مرة أخرى؟ يمكن أن يساعدك تطبيق
						براير ناو.</h2>
					<div class="flex gap-5 items-center mt-4">
						<NuxtLink to="https://play.google.com/store/apps" target="_blank">
							<Image isrc="/svgs/google-store.svg" ialt="logo" iclass="" />
						</NuxtLink>
						<NuxtLink to="https://apps.apple.com/ug/developer/apple/id284417353?mt=12"
							target="_blank">
							<Image isrc="/svgs/app-store.svg" ialt="logo" iclass="" />
						</NuxtLink>
					</div>
				</div>
			</div>
			<div>
				<Image isrc="/banner-ads-bg-bottom.png" ialt="logo" iclass="" />
			</div>

		</div>
	</div>
</template>

<script setup>

</script>

<style  scoped></style>