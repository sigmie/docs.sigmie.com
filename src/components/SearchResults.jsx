import { Fragment, useState, useRef } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { ExclamationIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { useRouter } from 'next/router'
import { SigmieSearch } from '@sigmie/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SearchResults({ onClose, isOpen }) {
  const [open, setOpen] = useState(true)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const searchInput = useRef()

  let visit = (value) => {
    console.log(value)
  }

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all dark:divide-gray-600">
              <SigmieSearch
                apiKey="Xuknxreas0tu5VMDRTiVUpkNgJY56YoYbbAdYG5I"
                query={query}
                perPage={5}
                filter=""
                search="sigmie-com-docs"
                applicationId="svvhug7c38lsrznsn"
                debounceMs={150}
              >
                {({ hits, total, loading }) => (
                  <div>
                    <main
                      className={`mx-auto flex w-full max-w-xl flex-col space-y-4 shadow-xl`}
                    >
                      <Combobox value={query} onChange={visit}>
                        {({ open }) => (
                          <div className="relative">
                            <div
                              className={`relative w-full cursor-default rounded-t-md bg-white text-left shadow-md focus:outline-none focus-visible:ring-0 focus-visible:ring-red-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300  sm:text-sm ${
                                open ? 'rounded-t-lg' : 'rounded-lg'
                              }`}
                            >
                              <Combobox.Button as="div">
                                <Combobox.Input
                                  ref={searchInput}
                                  className={`w-full bg-transparent py-3 pl-4  text-sm leading-5 text-gray-600 outline-none ring-0 focus:outline-none`}
                                  onChange={(event) =>
                                    setQuery(event.target.value)
                                  }
                                />
                              </Combobox.Button>
                              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-4 text-sm text-gray-400">
                                <div className="flex flex-row items-center space-x-2">
                                  <div className="font-base rounded-md border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 shadow">
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
                                <Combobox.Options className="relative max-h-[800px] w-full overflow-auto bg-white py-1 text-base text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {total === 0 && query !== '' ? (
                                    <div className="relative flex h-40 cursor-default select-none flex-row items-center py-2 px-4 text-lg text-zinc-400">
                                      <div className="mx-auto">
                                        <svg
                                          width="40"
                                          height="40"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                          fillRule="evenodd"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        >
                                          <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
                                        </svg>
                                      </div>

                                      <div className="mx-auto">
                                        <div className="w-56 text-center">
                                          No results for "
                                          <span className="font-medium text-slate-100">
                                            {query}
                                          </span>
                                          "
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    Object.values(hits).map((hit) => (
                                      <Combobox.Option
                                        key={hit._id}
                                        className={({ active }) =>
                                          `relative cursor-default select-none py-2  ${
                                            active
                                              ? ' text-white'
                                              : 'text-slate-400'
                                          }`
                                        }
                                        value={hit}
                                      >
                                        {({ selected, active }) => (
                                          <div
                                            className={`relative flex select-none flex-col cursor-pointer border-t border-zinc-200 px-4 pt-2 pb-4 ${
                                              active
                                                ? 'bg-zinc-50 text-slate-900'
                                                : 'text-zinc-800'
                                            }`}
                                          >
                                            <div className="max-w-lg overflow-hidden rounded-md border-slate-300">
                                              <div className="flex flex-col">
                                                <div className="text-lg font-bold">
                                                  <span className="text-orange-500 font-normal">#</span> {hit.title}
                                                </div>
                                                <div
                                                  className=""
                                                  dangerouslySetInnerHTML={{
                                                    __html:
                                                      hit._highlight['content']
                                                        .join('...')
                                                        .substring(0, 256)
                                                  }}
                                                />

                                                {hit.subtitles?.map(
                                                  (subtitle) => {
                                                    {
                                                      subtitle
                                                    }
                                                  }
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </Combobox.Option>
                                    ))
                                  )}
                                </Combobox.Options>
                                <div className="bg-zin-100 absolute bottom-0 flex h-12 w-full flex-row items-center justify-between rounded-b-lg border-t border-slate-100 bg-zinc-50 px-4 py-2 text-slate-500">
                                  <div className="flex flex-row items-center space-x-2">
                                    <div className="font-base rounded-md border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 shadow">
                                      <svg width="15" height="15">
                                        <g
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1"
                                        >
                                          <path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="font-base rounded-md border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 shadow">
                                      <svg width="15" height="15">
                                        <g
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="1"
                                        >
                                          <path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="text-sm text-zinc-700">
                                      to navigate
                                    </div>
                                  </div>

                                  <div className="flex flex-row items-center space-x-2">
                                    <div className="font-base rounded-md border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 shadow">
                                      ESC
                                    </div>
                                    <div className="text-sm text-zinc-700">
                                      to close
                                    </div>
                                  </div>

                                  <div className="flex flex-row items-center space-x-2">
                                    <div className="font-base rounded-md border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 shadow">
                                      ENTER
                                    </div>
                                    <div className="text-sm text-zinc-700">
                                      to visit
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Transition>
                          </div>
                        )}
                      </Combobox>
                    </main>
                  </div>
                )}
              </SigmieSearch>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
