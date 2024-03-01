<template>
	<nav aria-label="pagenation">
		<ul class="flex items-center max-sm:justify-center gap-2  md:h-8 h-[30px] text-sm">
			<li>
				<a href="#"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg hover:bg-primary duration-300 hover:text-white">
					<span class="sr-only">Previous</span>
					<svg class="md:w-2.5 w-2 md:h-2.5 h-2  rtl:rotate-180" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
							stroke-width="2" d="M5 1 1 5l4 4" />
					</svg>
				</a>
			</li>
			<li>
				<a href="#"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">1</a>
			</li>
			<li>
				<a href="#"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">2</a>
			</li>
			<li>
				<a href="#" aria-current="page"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">3</a>
			</li>
			<li>
				<a href="#"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">4</a>
			</li>
			<li>
				<a href="#"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">5</a>
			</li>
			<li>
				<a href="#"
					class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-e-lg hover:bg-primary duration-300 hover:text-white">
					<span class="sr-only">Next</span>
					<svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
							stroke-width="2" d="m1 9 4-4-4-4" />
					</svg>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>

</script>

<style  scoped></style>