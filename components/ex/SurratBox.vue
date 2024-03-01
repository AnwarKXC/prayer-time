<template>
    <div class="content-widget mx-sm-0 rounded-sm-0">
        <div class="row p-4">
            <div class="col-lg-12 px-0">
                <div class="surat-search-bar">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.75 9C3.75 6.1005 6.1005 3.75 9 3.75C11.8995 3.75 14.25 6.1005 14.25 9C14.25 11.8995 11.8995 14.25 9 14.25C6.1005 14.25 3.75 11.8995 3.75 9ZM9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C10.5938 15.75 12.0585 15.1976 13.2133 14.2739L16.7192 17.7799C17.0121 18.0728 17.487 18.0728 17.7799 17.7799C18.0728 17.487 18.0728 17.0121 17.7799 16.7192L14.2739 13.2133C15.1976 12.0585 15.75 10.5938 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25Z"
                            fill="#3F434A" />
                    </svg>

                    <AppInput :placeholder="$t('suratbanner.seacrhbar')" @keyup="fetchPlaylistTrack" />
                </div>
            </div>
            <div class="col-lg-12 px-0">
                <div class="surat-box mt-4 mb-2">
                    <div class="surat-list" v-for="(track, index) in tracklist">
                        <div class="surat-list-content">
                            <div class="rtl">
                                <h5 class="fw-bolder mb-1">{{ track.name }}</h5>
                                <span>{{ track.description }}</span>
                            </div>
                            <div class="surat-list-point">
                                {{ this.count + 1 }}
                            </div>
                        </div>
                        <div class="surat-list-rc">
                            <span>{{ audioDuration(track.audio_url) }}</span>
                            <span>{{ this.time[index] }}</span>
                            <div class="d-flex align-items-center gap-3 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                    @click="myCopyText(index)" class="cursor-pointer" fill="none">
                                    <path
                                        d="M19.1267 6.83057H8.1981C7.8358 6.83057 7.48833 6.97449 7.23214 7.23068C6.97596 7.48687 6.83203 7.83433 6.83203 8.19664V19.1252C6.83203 19.4875 6.97596 19.835 7.23214 20.0912C7.48833 20.3474 7.8358 20.4913 8.1981 20.4913H19.1267C19.489 20.4913 19.8364 20.3474 20.0926 20.0912C20.3488 19.835 20.4927 19.4875 20.4927 19.1252V8.19664C20.4927 7.83433 20.3488 7.48687 20.0926 7.23068C19.8364 6.97449 19.489 6.83057 19.1267 6.83057ZM8.1981 19.1252V8.19664H19.1267V19.1252H8.1981Z"
                                        fill="#787D84" />
                                    <path
                                        d="M4.78237 13.6609H2.73326V2.73228H13.6618V4.78139C13.6618 4.96254 13.7338 5.13627 13.8619 5.26437C13.99 5.39246 14.1637 5.46443 14.3449 5.46443C14.526 5.46443 14.6998 5.39246 14.8278 5.26437C14.9559 5.13627 15.0279 4.96254 15.0279 4.78139V2.73228C15.0279 2.36998 14.884 2.02251 14.6278 1.76632C14.3716 1.51014 14.0241 1.36621 13.6618 1.36621H2.73326C2.37095 1.36621 2.02349 1.51014 1.7673 1.76632C1.51111 2.02251 1.36719 2.36998 1.36719 2.73228V13.6609C1.36719 14.0232 1.51111 14.3706 1.7673 14.6268C2.02349 14.883 2.37095 15.0269 2.73326 15.0269H4.78237C4.96352 15.0269 5.13725 14.955 5.26535 14.8269C5.39344 14.6988 5.4654 14.525 5.4654 14.3439C5.4654 14.1627 5.39344 13.989 5.26535 13.8609C5.13725 13.7328 4.96352 13.6609 4.78237 13.6609Z"
                                        fill="#787D84" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"
                                    fill="none" data-bs-toggle="modal" :data-bs-target="`#ShareModal` + index"
                                    class="cursor-pointer">
                                    <path
                                        d="M16.1261 12.9016C15.639 12.9052 15.1589 13.0191 14.7221 13.2347C14.2853 13.4504 13.9029 13.7621 13.6038 14.1467L7.61739 11.1535C7.69439 10.8826 7.7356 10.6028 7.73995 10.3213C7.7356 10.0397 7.69439 9.75997 7.61739 9.48913L13.6038 6.49591C13.9029 6.88044 14.2853 7.19223 14.7221 7.40786C15.1589 7.62349 15.639 7.73736 16.1261 7.74093C16.764 7.74093 17.3877 7.55176 17.9181 7.19735C18.4485 6.84293 18.8619 6.33918 19.106 5.74981C19.3502 5.16044 19.414 4.51191 19.2896 3.88623C19.1651 3.26056 18.8579 2.68584 18.4069 2.23475C17.9558 1.78367 17.381 1.47647 16.7554 1.35202C16.1297 1.22756 15.4812 1.29144 14.8918 1.53556C14.3024 1.77969 13.7987 2.1931 13.4443 2.72352C13.0898 3.25395 12.9007 3.87755 12.9007 4.51549C12.905 4.79704 12.9462 5.0768 13.0232 5.34765L7.03681 8.34087C6.7377 7.95633 6.35537 7.64455 5.91853 7.42892C5.48168 7.21329 5.00166 7.09941 4.51451 7.09584C3.65907 7.09584 2.83866 7.43567 2.23377 8.04056C1.62889 8.64544 1.28906 9.46585 1.28906 10.3213C1.28906 11.1767 1.62889 11.9971 2.23377 12.602C2.83866 13.2069 3.65907 13.5467 4.51451 13.5467C5.00166 13.5432 5.48168 13.4293 5.91853 13.2137C6.35537 12.998 6.7377 12.6862 7.03681 12.3017L13.0232 15.2949C12.8492 15.9465 12.8839 16.6362 13.1222 17.2671C13.3606 17.8979 13.7907 18.4382 14.352 18.8119C14.9134 19.1857 15.5778 19.374 16.2518 19.3506C16.9257 19.3271 17.5754 19.0929 18.1094 18.6811C18.6434 18.2692 19.0349 17.7003 19.2288 17.0544C19.4227 16.4085 19.4092 15.718 19.1903 15.0801C18.9714 14.4423 18.5581 13.889 18.0084 13.4983C17.4588 13.1075 16.8005 12.8989 16.1261 12.9016ZM16.1261 2.58022C16.5089 2.58022 16.883 2.69372 17.2013 2.90637C17.5195 3.11902 17.7676 3.42127 17.9141 3.77489C18.0605 4.12852 18.0989 4.51763 18.0242 4.89304C17.9495 5.26844 17.7652 5.61328 17.4946 5.88393C17.2239 6.15458 16.8791 6.3389 16.5037 6.41357C16.1283 6.48824 15.7391 6.44992 15.3855 6.30344C15.0319 6.15697 14.7296 5.90892 14.517 5.59066C14.3043 5.27241 14.1908 4.89825 14.1908 4.51549C14.1908 4.00222 14.3947 3.50998 14.7577 3.14705C15.1206 2.78411 15.6129 2.58022 16.1261 2.58022ZM4.51451 12.2566C4.13175 12.2566 3.75758 12.1431 3.43933 11.9304C3.12108 11.7178 2.87303 11.4155 2.72655 11.0619C2.58008 10.7083 2.54175 10.3191 2.61643 9.94374C2.6911 9.56833 2.87542 9.2235 3.14607 8.95285C3.41672 8.6822 3.76155 8.49788 4.13696 8.42321C4.51236 8.34854 4.90148 8.38686 5.2551 8.53334C5.60873 8.67981 5.91097 8.92786 6.12363 9.24611C6.33628 9.56437 6.44978 9.93853 6.44978 10.3213C6.44978 10.8346 6.24588 11.3268 5.88295 11.6897C5.52002 12.0527 5.02777 12.2566 4.51451 12.2566ZM16.1261 18.0624C15.7434 18.0624 15.3692 17.9489 15.0509 17.7362C14.7327 17.5236 14.4846 17.2213 14.3382 16.8677C14.1917 16.5141 14.1534 16.1249 14.228 15.7495C14.3027 15.3741 14.487 15.0293 14.7577 14.7587C15.0283 14.488 15.3732 14.3037 15.7486 14.229C16.124 14.1543 16.5131 14.1927 16.8667 14.3391C17.2203 14.4856 17.5226 14.7337 17.7352 15.0519C17.9479 15.3702 18.0614 15.7443 18.0614 16.1271C18.0614 16.6404 17.8575 17.1326 17.4946 17.4955C17.1316 17.8585 16.6394 18.0624 16.1261 18.0624Z"
                                        fill="#787D84" />
                                </svg>
                                <svg width="20" height="20" @click="selectAudio(track, index)" style="cursor: pointer;"
                                    v-if="currentTrack == index" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Media / Pause_Circle">
                                            <path id="Vector"
                                                d="M14 9V15M10 9V15M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                                stroke="#787D84" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </g>
                                    </g>
                                </svg>
                                <svg @click="selectAudio(track, index)" v-else style="cursor: pointer;"
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    class="cursor-pointer" fill="none">
                                    <path
                                        d="M8 14.5L14 10L8 5.5V14.5ZM10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                                        fill="#787D84" />
                                </svg>

                            </div>
                        </div>
                        <!-- Share Modal Start -->
                        <div class="modal fade ShareModal" :id="`ShareModal${index}`" tabindex="-1"
                            aria-labelledby="ShareModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-body">

                                        <div class="d-flex icons-box location-content justify-content-between mt-lg-5">
                                            <a href="mailto:example@gmail.com"
                                                class="share-icons text-center text-decoration-none">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <g clip-path="url(#clip0_144_12285)">
                                                            <path
                                                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H17V20H12C7.66 20 4 16.34 4 12C4 7.66 7.66 4 12 4C16.34 4 20 7.66 20 12V13.43C20 14.22 19.29 15 18.5 15C17.71 15 17 14.22 17 13.43V12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C13.38 17 14.64 16.44 15.54 15.53C16.19 16.42 17.31 17 18.5 17C20.47 17 22 15.4 22 13.43V12C22 6.48 17.52 2 12 2ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                                                                fill="#1E4D45" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_144_12285">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <h6 style="color: #3D5A80;">E-mail</h6>
                                            </a>
                                            <a v-bind:href="`https://wa.me/03093201506?text=${track.audio_url}`"
                                                target="_blank" class="share-icons text-center text-decoration-none">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M16.6 14C16.4 13.9 15.1 13.3 14.9 13.2C14.7 13.1 14.5 13.1 14.3 13.3C14.1 13.5 13.7 14.1 13.5 14.3C13.4 14.5 13.2 14.5 13 14.4C12.3 14.1 11.6 13.7 11 13.2C10.5 12.7 10 12.1 9.6 11.5C9.5 11.3 9.6 11.1 9.7 11C9.8 10.9 9.9 10.7 10.1 10.6C10.2 10.5 10.3 10.3 10.3 10.2C10.4 10.1 10.4 9.89998 10.3 9.79998C10.2 9.69998 9.7 8.49998 9.5 7.99998C9.4 7.29998 9.2 7.29998 9 7.29998C8.9 7.29998 8.7 7.29998 8.5 7.29998C8.3 7.29998 8 7.49998 7.9 7.59998C7.3 8.19998 7 8.89998 7 9.69998C7.1 10.6 7.4 11.5 8 12.3C9.1 13.9 10.5 15.2 12.2 16C12.7 16.2 13.1 16.4 13.6 16.5C14.1 16.7 14.6 16.7 15.2 16.6C15.9 16.5 16.5 16 16.9 15.4C17.1 15 17.1 14.6 17 14.2C17 14.2 16.8 14.1 16.6 14ZM19.1 4.89998C15.2 0.999976 8.9 0.999976 5 4.89998C1.8 8.09998 1.2 13 3.4 16.9L2 22L7.3 20.6C8.8 21.4 10.4 21.8 12 21.8C17.5 21.8 21.9 17.4 21.9 11.9C22 9.29997 20.9 6.79998 19.1 4.89998ZM16.4 18.9C15.1 19.7 13.6 20.2 12 20.2C10.5 20.2 9.1 19.8 7.8 19.1L7.5 18.9L4.4 19.7L5.2 16.7L5 16.4C2.6 12.4 3.8 7.39998 7.7 4.89998C11.6 2.39998 16.6 3.69998 19 7.49998C21.4 11.4 20.3 16.5 16.4 18.9Z"
                                                            fill="#3D5A80" />
                                                    </svg>
                                                </div>
                                                <h6 style="color: #3D5A80;">Whatsapp</h6>
                                            </a>
                                            <a v-bind:href="`https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20content!&url=${track.audio_url}`"
                                                s target="_blank" class="share-icons text-center text-decoration-none">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M22.9914 3.95021C22.9915 3.77357 22.9448 3.60007 22.8561 3.44735C22.7673 3.29464 22.6397 3.16817 22.4862 3.08084C22.3326 2.9935 22.1587 2.94842 21.9821 2.95017C21.8054 2.95193 21.6324 3.00046 21.4807 3.09083C20.8954 3.43921 20.2652 3.70601 19.6077 3.88383C18.6686 3.07806 17.471 2.63713 16.2337 2.64164C14.8762 2.6432 13.5726 3.17223 12.5979 4.11702C11.6232 5.06181 11.0539 6.3484 11.01 7.70512C8.33402 7.27838 5.90868 5.88164 4.19649 3.78126C4.09333 3.65609 3.96158 3.55757 3.81235 3.494C3.66313 3.43043 3.5008 3.40368 3.33907 3.41601C3.17743 3.42932 3.02147 3.4818 2.88467 3.56892C2.74786 3.65603 2.63434 3.77516 2.55391 3.91601C2.14144 4.63582 1.90454 5.44276 1.86246 6.27131C1.82038 7.09986 1.9743 7.92666 2.31172 8.68456L2.30977 8.68651C2.15812 8.77991 2.03296 8.91066 1.94628 9.06625C1.85959 9.22185 1.81427 9.39708 1.81465 9.57519C1.81282 9.72211 1.82163 9.86898 1.84102 10.0146C1.94316 11.2729 2.50081 12.4507 3.40938 13.3271C3.34775 13.4446 3.31013 13.5731 3.29873 13.7052C3.28732 13.8373 3.30237 13.9704 3.34297 14.0967C3.73909 15.3308 4.58147 16.3727 5.70528 17.0185C4.56352 17.46 3.3307 17.614 2.11543 17.4668C1.89051 17.4386 1.66266 17.4876 1.46928 17.6059C1.2759 17.7242 1.12846 17.9047 1.05115 18.1178C0.973837 18.3309 0.971244 18.5639 1.04379 18.7787C1.11634 18.9935 1.25973 19.1772 1.45043 19.2998C3.54053 20.646 5.97411 21.3617 8.4602 21.3613C11.2795 21.393 14.0302 20.4921 16.2844 18.7988C18.5387 17.1054 20.1702 14.7145 20.925 11.998C21.2781 10.8146 21.4583 9.58648 21.4602 8.35157C21.4602 8.28614 21.4602 8.21876 21.4592 8.15138C21.9813 7.58831 22.3858 6.92668 22.6489 6.20527C22.912 5.48387 23.0284 4.7172 22.9914 3.95021ZM19.6848 7.16212C19.5196 7.35746 19.436 7.60891 19.4514 7.86427C19.4611 8.02927 19.4602 8.19527 19.4602 8.35157C19.4581 9.39511 19.3052 10.4329 19.0061 11.4326C18.3896 13.744 17.0152 15.7817 15.1031 17.2192C13.1911 18.6568 10.8519 19.4111 8.4602 19.3613C7.60108 19.3616 6.74492 19.2606 5.90942 19.0606C6.97483 18.7172 7.97101 18.1879 8.8518 17.4971C9.01403 17.3693 9.13275 17.1945 9.19169 16.9967C9.25063 16.7988 9.24688 16.5875 9.18098 16.3918C9.11507 16.1961 8.99023 16.0257 8.82358 15.9038C8.65694 15.7819 8.45665 15.7145 8.2502 15.7109C7.41903 15.698 6.62533 15.363 6.03633 14.7764C6.18575 14.7481 6.33419 14.7129 6.48165 14.6709C6.69766 14.6094 6.8867 14.477 7.01831 14.295C7.14993 14.1131 7.21647 13.8921 7.20723 13.6677C7.19798 13.4433 7.11348 13.2285 6.96734 13.058C6.82119 12.8874 6.62191 12.7711 6.40157 12.7275C5.91911 12.6323 5.46512 12.427 5.07489 12.1277C4.68466 11.8284 4.3687 11.4432 4.15157 11.002C4.3323 11.0266 4.51418 11.0419 4.69649 11.0479C4.91308 11.0511 5.12509 10.9854 5.30187 10.8603C5.47865 10.7351 5.61104 10.5569 5.67989 10.3516C5.74587 10.1443 5.74248 9.92123 5.67022 9.7161C5.59797 9.51096 5.46079 9.33499 5.2795 9.21485C4.83965 8.92182 4.47935 8.52427 4.23086 8.0578C3.98237 7.59134 3.85346 7.07052 3.85567 6.54201C3.85567 6.47561 3.85762 6.4092 3.86153 6.34377C6.10279 8.43402 9.00985 9.66621 12.0705 9.82326C12.225 9.82934 12.3789 9.80024 12.5205 9.73816C12.6621 9.67607 12.7877 9.58262 12.8879 9.46486C12.9871 9.34596 13.0573 9.20566 13.0931 9.05501C13.1288 8.90437 13.1291 8.74748 13.0939 8.5967C13.0367 8.35806 13.0076 8.11357 13.007 7.86818C13.0079 7.01271 13.3482 6.19254 13.9531 5.58764C14.558 4.98274 15.3781 4.64251 16.2336 4.64161C16.6737 4.64043 17.1093 4.7305 17.5129 4.90615C17.9165 5.0818 18.2792 5.3392 18.5783 5.66212C18.6937 5.7862 18.8388 5.87871 19 5.93085C19.1612 5.98299 19.333 5.99303 19.4992 5.96001C19.91 5.88006 20.3149 5.7724 20.7111 5.63775C20.4409 6.19072 20.0955 6.70369 19.6848 7.16212Z"
                                                            fill="#3D5A80" />
                                                    </svg>
                                                </div>
                                                <h6 style="color: #3D5A80;">Twitter</h6>
                                            </a>
                                            <a v-bind:href="`https://t.me/share/url?url=${track.audio_url}&text=Check%20out%20this%20awesome%20content!`"
                                                target="_blank" class="share-icons text-center text-decoration-none">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M22.2647 2.42778C21.98 2.19091 21.6364 2.03567 21.2704 1.97858C20.9045 1.92149 20.5299 1.96469 20.1866 2.10357L2.26566 9.33892C1.88241 9.4966 1.55618 9.76711 1.33026 10.1145C1.10434 10.462 0.989427 10.8699 1.00076 11.2841C1.0121 11.6984 1.14916 12.0994 1.39374 12.434C1.63832 12.7685 1.97886 13.0208 2.37016 13.1573L5.99516 14.418L8.01566 21.0997C8.04312 21.1889 8.08297 21.2739 8.13404 21.352C8.14179 21.364 8.15272 21.373 8.16096 21.3846C8.21996 21.467 8.29127 21.5397 8.37239 21.6004C8.39546 21.618 8.41755 21.6345 8.44221 21.6501C8.53714 21.7131 8.64228 21.7591 8.75294 21.7862L8.76478 21.7872L8.77149 21.7901C8.83802 21.8036 8.90574 21.8105 8.97364 21.8106C8.98017 21.8106 8.98597 21.8074 8.99244 21.8073C9.0949 21.8055 9.19647 21.7879 9.29353 21.755C9.31611 21.7473 9.33546 21.7345 9.35737 21.7252C9.42975 21.6952 9.49832 21.6567 9.56166 21.6106C9.61238 21.5679 9.66312 21.5251 9.71388 21.4824L12.416 18.4991L16.4463 21.6211C16.8011 21.8974 17.2379 22.0475 17.6875 22.0479C18.1587 22.0473 18.6154 21.8847 18.9809 21.5874C19.3465 21.2901 19.5987 20.8762 19.6954 20.4151L22.958 4.39849C23.032 4.03801 23.0065 3.66421 22.8844 3.31708C22.7623 2.96995 22.5481 2.66255 22.2647 2.42778ZM9.37016 14.7364C9.2315 14.8745 9.13672 15.0505 9.0977 15.2422L8.78819 16.7462L8.00413 14.1532L12.0694 12.0362L9.37016 14.7364ZM17.6719 20.0401L12.9092 16.3506C12.71 16.1966 12.46 16.1234 12.2092 16.1455C11.9583 16.1675 11.725 16.2833 11.5557 16.4697L10.6903 17.4249L10.9961 15.9385L18.0791 8.85549C18.2482 8.68665 18.3512 8.46285 18.3695 8.22461C18.3878 7.98638 18.3201 7.74947 18.1788 7.55681C18.0375 7.36414 17.8319 7.22845 17.5992 7.17433C17.3664 7.1202 17.122 7.15121 16.9102 7.26174L6.74491 12.5544L3.02055 11.1915L20.999 3.99905L17.6719 20.0401Z"
                                                            fill="#3D5A80" />
                                                    </svg>
                                                </div>
                                                <h6 style="color: #3D5A80;">Telegram</h6>
                                            </a>
                                            <a v-bind:href="`https://www.facebook.com/sharer/sharer.php?u=${track.audio_url}`"
                                                target="_blank" class="share-icons text-center text-decoration-none">
                                                <div>
                                                    <svg fill="#3d5a80" width="24" height="24" viewBox="0 0 1920 1920"
                                                        xmlns="http://www.w3.org/2000/svg" stroke="#3d5a80">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                            stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path
                                                                d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                                                                fill-rule="evenodd"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6 style="color: #3B5998;">Facebook</h6>
                                            </a>

                                        </div>
                                        <div class="text-center mt-5">
                                            <h6 class="fw-700" style="color: rgba(61, 90, 128, 0.50);">أو مشاركة
                                                الرابط</h6>
                                        </div>
                                        <div class="copy-link mt-5">
                                            <input type="text" :id="'copyText' + index" disabled :value="track.audio_url">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                @click="myCopyText(index)" style="cursor: pointer;" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M16 20H8C7.20435 20 6.44129 19.6839 5.87868 19.1213C5.31607 18.5587 5 17.7956 5 17V7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V17C3 18.3261 3.52678 19.5979 4.46447 20.5355C5.40215 21.4732 6.67392 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21C17 20.7348 16.8946 20.4804 16.7071 20.2929C16.5196 20.1054 16.2652 20 16 20ZM21 8.94C20.9896 8.84813 20.9695 8.75763 20.94 8.67V8.58C20.8919 8.47718 20.8278 8.38267 20.75 8.3L14.75 2.3C14.6673 2.22222 14.5728 2.15808 14.47 2.11H14.38L14.06 2H10C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V15C7 15.7956 7.31607 16.5587 7.87868 17.1213C8.44129 17.6839 9.20435 18 10 18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 9 21 9 21 8.94ZM15 5.41L17.59 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V5.41ZM19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H13V7C13 7.79565 13.3161 8.55871 13.8787 9.12132C14.4413 9.68393 15.2044 10 16 10H19V15Z"
                                                    fill="#1E4D45" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Share Modal Start -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppInput from "../Components/Input.vue";
import { apiUrl } from '../api.js';
export default {
    data() {
        return {
            tracklist: [],
            count: 0,
            langCode: this.$route.params.lg,
            playListImg: '',
            currentTrack: null,
            time: []
        }
    },
    components: {
        AppInput,
    },

    methods: {
        async fetchPlaylistTrack(search) {
            const query = search?.target.value;
            // console.log('query', query);
            try {
                const e = localStorage.getItem('lang')
                const id = this.$route.params.id;
                var response;
                if (query == undefined || query == '') {
                    response = await axios.get(`${apiUrl}/api/get-playlist-detail-track-api/ /${id}/${e}`);
                } else {
                    response = await axios.get(`${apiUrl}/api/get-playlist-detail-track-api/${query}/${id}/${e}`);
                }
                if (response.status == 200) {
                    // console.log('fetching playlist Track:', response.data.playlist?.localize_tracks);
                    if (response.data.playlist?.localize_tracks !== undefined) {
                        this.tracklist = response.data.playlist?.localize_tracks;
                        this.playListImg = response.data.playlist.image;
                        this.audioDuration();
                    }
                }
            } catch (error) {
                // Handle errors
                console.error('Error fetching playlist Track:', error);
            }
        },
        selectAudio(audio, index) {
            // console.log('save track:', audio.audio_url);
            var local = localStorage.getItem('count');

            // Retrieve the current value from local storage
            var local = localStorage.getItem('count');

            // Check if the value exists in local storage
            if (local) {
                // If it exists, parse it as an integer and increment by 1
                local = parseInt(local) + 1;
            } else {
                // If it doesn't exist, set it to a random number between 1 and 100 (adjust the range as needed)
                local = Math.floor(Math.random() * 100) + 1;
            }

            var audioElement = document.getElementById('audio_');
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }

            if (this.currentTrack == index) {
                this.currentTrack = null;

            } else {
                this.currentTrack = index;
                var track = audio.name.replace(' ', '-').trim();
                this.$router.push({
                    params: {
                        track: track.replace(' ', '-')
                    }
                });

                localStorage.setItem('track', JSON.stringify(this.tracklist));
                localStorage.setItem('track_index', index);
                localStorage.setItem('track_img', this.playListImg);
            }

        },
        audioDuration(audioUrl) {
            var audio = new Audio(audioUrl);
            var self = this; // Save the reference to 'this'

            audio.addEventListener('loadedmetadata', function () {
                // ('Audio duration:', audio.duration.toFixed(2));
                var audioDuration = audio.duration.toFixed(2);
                var hours = Math.floor(audioDuration / 3600);
                var minutes = Math.floor((audioDuration % 3600) / 60);
                var remainingSeconds = Math.floor(audioDuration % 60);

                // Add leading zero if needed
                hours = (hours < 10) ? '0' + hours : hours;
                minutes = (minutes < 10) ? '0' + minutes : minutes;
                remainingSeconds = (remainingSeconds < 10) ? '0' + remainingSeconds : remainingSeconds;

                var track_time = minutes + ':' + remainingSeconds;
                var check_exist = self.time.includes(track_time)
                if (!check_exist) {
                    self.time.push(track_time); // Use 'self' instead of 'this'
                }
                // console.log(self.time);
            });

            audio.addEventListener('error', function () {
                console.error('Error loading audio:', audio.error);
            });
        },

        myCopyText(id) {

            var copyText = document.getElementById("copyText" + id);
            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);

            // Alert the copied text
            alert("Copied the text: " + copyText.value);
        }

    },
    watch: {
        '$route.params.lg': function (newLgValue) {
            this.langCode = newLgValue;
            this.fetchPlaylistTrack();
            this.audioDuration();
        },
        '$route.params.id': function () {
            this.fetchPlaylistTrack();
            this.audioDuration();
        }
    },
    mounted() {
        this.fetchPlaylistTrack();
        this.audioDuration();

        setInterval(() => {
            var local = localStorage.getItem('track')
            if (!local) {
                this.currentTrack = null;
            }
        }, 500);
    }
}
</script>
