import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'

// import './nav.css';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" z-10 sticky">
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="http://localhost:3000/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto"  src='data:image/png;base64,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' alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-gray-900">
            Company
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-lg  font-semibold leading-6 text-gray-100 rounded py-2.5 px-2.5 bg-[#FFD700] hover:py-3.5 hover:px-3.5">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src='data:image/png;base64,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'
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3  block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}