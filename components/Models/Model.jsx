import React from 'react'

const Model = () => {
    return (
        <div><div class="text-center">
            <button type="button" class="border-2 rounded-md md:text-sm text-[#01366a] border-blue-900 py-2 px-4 font-[500] 
                    hover:bg-blue-900 hover:text-white transition-all" data-hs-overlay="#hs-bg-gray-on-hover-cards">
               View All Docs
            </button>
        </div>
            <div id="hs-bg-gray-on-hover-cards" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-5xl lg:w-full m-3 lg:mx-auto">
                    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                            <h3 class="font-bold text-gray-800 dark:text-gray-200">
                                Plugins
                            </h3>
                            <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-bg-gray-on-hover-cards">
                                <span class="sr-only">Close</span>
                                <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>

                        <div class="p-4 overflow-y-auto">
                            <div class="sm:divide-y divide-gray-200 dark:divide-gray-700">
                                <div class="py-3 sm:py-6">
                                    <h4 class="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                                        Base
                                    </h4>

                                    {/* <!-- Grid --> */}
                                    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                                        {/* <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Accordion
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card -->

                                        <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M12.4077 1H12.9077C14.0123 1 14.9077 1.89543 14.9077 3V13C14.9077 14.1046 14.0123 15 12.9077 15H2.90771C1.80315 15 0.907715 14.1046 0.907715 13V3C0.907715 1.89543 1.80314 1 2.90771 1H5.10034C5.83943 1 6.43858 1.59915 6.43858 2.33824C6.43858 3.07732 7.03773 3.67647 7.77681 3.67647H14.4077M8.5 1H8.90771C10.0123 1 10.9077 1.89543 10.9077 3V3.5M3.90771 8H9.90771M3.90771 11.5H11.9077" stroke="currentColor" stroke-linecap="round"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Tabs
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card -->

                                        <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Scrollspy
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card -->

                                        <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 6.00002V13M3 8.00002H6M10 8.00002H13M3 11H6M10 11H13M1 5.50002V13.5C1 14.6046 1.89543 15.5 3 15.5H13C14.1046 15.5 15 14.6046 15 13.5V5.50002C15 4.39545 14.1046 3.50002 13 3.50002H11.2024C10.6481 3.50002 10.1186 3.26992 9.74033 2.86465L8.73105 1.78329C8.33572 1.35971 7.66428 1.35971 7.26894 1.78329L6.25967 2.86465C5.88142 3.26992 5.35193 3.50002 4.79756 3.50002H3C1.89543 3.50002 1 4.39545 1 5.50002Z" stroke="currentColor" stroke-linecap="round"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Mega Menu <span class="ml-1 inline bg-blue-50 border border-blue-300 text-blue-600 text-[.6125rem] leading-4 uppercase rounded-full py-0.5 px-2 dark:bg-blue-900/[.75] dark:border-blue-700 dark:text-blue-500">Hot</span>
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card -->

                                        <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"></path>
                                                        <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Dropdown
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card --> */}
                                    </div>
                                    {/* <!-- End Grid --> */}
                                </div>

                                <div class="py-3 sm:py-6">
                                    <h4 class="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                                        Advanced
                                    </h4>

                                    {/* <!-- Grid --> */}
                                    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                                        {/* <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                                                        <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Modal
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card -->

                                        <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path>
                                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Offcanvas
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card -->

                                        <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
                                                        <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Sidebar <span class="ml-1 inline bg-blue-50 border border-blue-300 text-blue-600 text-[.6125rem] leading-4 uppercase rounded-full py-0.5 px-2 dark:bg-blue-900/[.75] dark:border-blue-700 dark:text-blue-500">New</span>
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card --> */}

                                        {/* <!-- Card --> */}
                                        <a class="bg-white p-4 transition duration-300 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05]" href="../docs/frameworks-vuejs.html">
                                            <div class="flex">
                                                <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-l-xl">
                                                    <svg class="w-5 h-5 text-gray-800 dark:text-gray-200" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                                                    </svg>
                                                </div>

                                                <div class="grow ml-6">
                                                    <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                                                        Popover
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                        A framework for building web user interfaces.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- End Card --> */}
                                    </div>
                                    {/* <!-- End Grid --> */}

                                    <p class="mt-4 text-xs text-gray-500">
                                        Completely unstyled, fully accessible UI <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="../plugins.html">plugins</a> for popular features that for one reason or another don't belong in core.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                            <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
                                Installation Guide
                                <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Model