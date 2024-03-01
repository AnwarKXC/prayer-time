<template>
	<div class=" min-h-[244px] bg-white rounded-xl border border-gray-200 main__banner">
		<div class="cent h-full">
			<div class=" relative md:grid grid-cols-4 p-4 gap-1">
				<div class="md:col-span-3 flex items-center size-full ">
					<div class="grid gap-4">
						<div class="  text-zinc-700 md:text-[15px] text-[13px] font-normal font-['Almarai']">
							احصل على تنبيه مواقيت الصلاة على هاتفك مجانًا.
						</div>
						<h2 class="h__primary max-w-[600px] max-md:max-w-[500px] leading-10"> {{ $t(
							'mobilebanner.heading' ) }}</h2>
						<div class="">
							<Button buttonText="header.headerbtn"
								buttonClass="bg-primary text-white btn__primary  "></Button>
						</div>
					</div>
				</div>
				<div
					class="flex md:justify-center justify-end items-center max-md:absolute rtl:left-0 ltr:right-0 bottom-0 max-md:size-[120px] max-xs:size-[90px]  size-full ltr:scale-x-[-1] transform p-1 md:w-full">
					<Image isrc="/banner-ads-bg-top.png" ialt="logo" iclass="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style  scoped></style>