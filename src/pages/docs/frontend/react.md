---
title: React JS
description:
---


![React JS Example](https://res.cloudinary.com/markos-nikolaos-orfanos/video/upload/c_crop,g_center,h_350,w_366,x_0,y_0/v1675775192/documentation/CleanShot_2023-02-07_at_15.05.01_k7i32j.gif "Sigmie React JS")


We provide a **Frontend** React JS library that integrates nicely with
[HeadlessUI](https://headlessui.com/) by [Tailwind](https://tailwindcss.com/).
## Installation

To get started, install Headless UI and Sigmie React via npm:

```sh
npm install -D @headlessui/react @sigmie/react @heroicons/vue
```

## Example


Here is the above example to get you started:

```jsx
import { Fragment, useEffect, useRef, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SigmieSearch } from '@sigmie/react'

export default function Search() {
  let [isOpen, setIsOpen] = useState(true)
  let [query, setQuery] = useState('')
  const searchInput = useRef();

  let visit = (value) => {
    console.log(value);
  }

  function handleKeyDown(e) {
    // On Esc
    if (e.keyCode === 27) {
      searchInput.current?.blur();
    }

    // On CMD + K
    if (e.keyCode === 75 && e.metaKey) {
      setIsOpen(true)
      searchInput.current?.focus();
      searchInput.current?.click();
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let addKeydownListener = function () {
    document.addEventListener("keydown", handleKeyDown);

  };

  let removeKeydownListener = function () {
    document.removeEventListener('keydown', handleKeyDown);
  };

  useEffect(() => {
    addKeydownListener();
    return () => {
      removeKeydownListener()
    }
  });

  return (
    <>
      <div className='bg-white min-h-screen'>
        <div className={`relative max-w-xl mx-auto w-full cursor-default text-left shadow-md focus:outline-none focus-visible:ring-0 focus-visible:ring-red-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm  rounded-t-md rounded-lg`}>
          <button
            onClick={openModal}
            className="w-full shadow-lg items-center rounded-lg px-4 absolute bg-zinc-800 top-10 z-10 cursor-pointer text-left focus:outline-none ring-0  py-3 pl-4 text-sm leading-5 text-zinc-300 outline-none flex flex-row justify-between"
          >
            <div>
              Search...
            </div>

            <div className="flex flex-row items-center space-x-2">
              <div
                className="bg-black px-2 py-1 rounded-md text-zinc-300 font-semibold text-xs"
              >
                CMD/CTR
              </div>
              <div className="">+</div>
              <div
                className="bg-black px-2 py-1 rounded-md text-zinc-300 font-semibold text-xs"
              >
                K
              </div>
            </div>

          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="transition-all w-full absolute top-20">
                    <SigmieSearch
                      apiKey="Dw4cThA9iGZwPw0r8VFMEiZwWGzroKFg6C0nb39D"
                      query={query}
                      perPage={5}
                      filter=""
                      search="testing"
                      applicationId="svvhug7c38lsrznsn"
                      debounceMs={150}
                    >
                      {({ hits, total, loading }) =>
                        <div>
                          <main className={`max-w-xl mx-auto w-full flex flex-col space-y-4 shadow-xl`}>
                            <Combobox value={query} onChange={visit}>
                              {({ open }) => (
                                <div className="relative">
                                  <div className={`relative bg-zinc-800 w-full cursor-default text-left shadow-md focus:outline-none focus-visible:ring-0 focus-visible:ring-red-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm  rounded-t-md ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
                                    <Combobox.Button as='div'>
                                      <Combobox.Input
                                        ref={searchInput}
                                        className={`w-full focus:outline-none ring-0 bg-transparent  py-3 pl-4 text-sm leading-5 text-zinc-300 outline-none`}
                                        onChange={(event) => setQuery(event.target.value)}
                                      />
                                    </Combobox.Button>
                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-400 text-sm">
                                      <div className="flex flex-row items-center space-x-2">
                                        <div
                                          className="bg-black px-2 py-1 rounded-md text-zinc-300 font-semibold text-xs"
                                        >
                                          ESC
                                        </div>
                                      </div>
                                    </Combobox.Button>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    leave=""
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                  >
                                    <div className="h-auto pb-12">
                                      <Combobox.Options className="relative bg-zinc-800 max-h-[800px] w-full overflow-auto text-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {total === 0 && query !== '' ? (
                                          <div className="relative cursor-default select-none py-2 px-4 text-zinc-400 h-40 flex flex-row items-center text-lg">
                                            <div className="mx-auto">
                                              <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
                                              </svg>
                                            </div>

                                            <div className="mx-auto">
                                              <div className="w-56 text-center">
                                                No results for "<span className="text-zinc-100 font-medium">{
                                                  query
                                                }</span
                                                >"
                                              </div>
                                            </div>
                                          </div>
                                        ) : (
                                          Object.values(hits).map((hit) => (
                                            <Combobox.Option
                                              key={hit._id}
                                              className={({ active }) =>
                                                `relative cursor-default select-none py-2  ${active ? ' text-white' : 'text-zinc-400'
                                                }`
                                              }
                                              value={hit}
                                            >
                                              {({ selected, active }) => (
                                                <div className={`relative cursor-default select-none pt-2 pb-4 px-4 flex flex-col items-center border-t border-zinc-800 ${active ? 'bg-black text-white' : 'text-zinc-400'}`}>
                                                  <div className="block p-3 overflow-hidden max-w-lg border-zinc-700 rounded-md border">
                                                    {JSON.stringify(hit) }
                                                  </div>
                                                </div>
                                              )}
                                            </Combobox.Option>
                                          ))
                                        )}
                                      </Combobox.Options>
                                      <div
                                        className="absolute rounded-b-lg bottom-0 h-12 text-zinc-500 bg-zinc-800 w-full px-4 py-2 flex flex-row justify-between items-center border-t border-zinc-700"
                                      >
                                        <div
                                          className="flex flex-row items-center space-x-2"
                                        >
                                          <div className='bg-black px-2 py-1 rounded-md text-zinc-300 text-xs'>
                                            <svg width="15" height="15"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>
                                          </div>
                                          <div className='bg-black px-2 py-1 rounded-md text-zinc-300 text-xs'>
                                            <svg width="15" height="15"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>
                                          </div>
                                          <div className="text-zinc-300 text-sm">to navigate</div>
                                        </div>

                                        <div
                                          className="flex flex-row items-center space-x-2"
                                        >
                                          <div className='bg-black px-2 py-1 rounded-md text-zinc-300 font-semibold text-xs'>
                                            ESC
                                          </div>
                                          <div className="text-zinc-300 text-sm">to close</div>
                                        </div>

                                        <div className="flex flex-row items-center space-x-2">
                                          <div
                                            className="bg-black px-2 py-1 rounded-md text-zinc-300 font-semibold text-xs"
                                          >
                                            ENTER
                                          </div>
                                          <div className="text-zinc-300 text-sm">to visit</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Transition>
                                </div>
                              )
                              }
                            </Combobox >
                          </main >
                        </div >}
                    </SigmieSearch >
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}

```
