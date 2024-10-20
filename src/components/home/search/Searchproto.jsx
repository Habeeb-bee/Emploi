import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Country } from "country-state-city";
import { useState } from 'react'

//// people= countryData, filteredPouple= filteredCountry

export default function Searchproto() {
    const countryData = Country.getAllCountries();
    const [active, setActive] = useState(false);
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(countryData)

  const filteredCountry =
    query === ''
      ? countryData
      : countryData.filter((country) => {
          return ( country &&
        country.name &&
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.name.toUpperCase().includes(query.toLowerCase()) &&
        country.name.toUpperCase().startsWith(query.toLowerCase()) ||
        country.name.toLowerCase().startsWith(query.toLowerCase()))
        })

        const changeEvent = (value) =>{
          setQuery(value);

          if (setQuery === "") {
            setActive(!active)
          }
        }

        

  return (
    <div className="mx-auto h-screen w-52 pt-20 bg-[#000]">
      <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')} __demoMode>
        <div className="relative">
          <ComboboxInput
            className={clsx(
              'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            displayValue={(country) => country?.name}
            onChange={(event) => changeEvent(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>
        
        
        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
            'transition duration-100 ease-in data-[leave]:data-[closed]:hidden'
          )}
        >
            <div className={active ? 'hidden' : 'text-red-500'}>
          {filteredCountry.map((country, id) => (
            <ComboboxOption
              key={id}
              value={country}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <div className="text-sm/6  text-white">{country.name}</div>
            </ComboboxOption>
          ))} </div>
        </ComboboxOptions>
     
      </Combobox>
    </div>
  )
}
