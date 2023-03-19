import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DropDown } from '../dropdown/DropDown'
import { Discord } from '../icons/Discord'
import { GitHub } from '../icons/GitHub'
import { Search } from '../icons/Search'
import { Input } from '../input/Input'

const Header = () => {
  return (
    <header className="main__header not__full">
      <div className="left">
        <Link href="/">
          <Image src="/nx/logo.svg" width={50} height={50} alt="Logo" />
        </Link>
      </div>
      <Input
        icon={<Search _color="#242424" />}
        type="text"
        placeholder="search..."
      />
      <div className="right">
        <div className="links">
          <Link target="_blank" href="https://discord.gg/d6pRBjBUyn">
            <Discord width={25} />
          </Link>
          <Link target="_blank" href="https://github.com/niiyy/NX">
            <GitHub width={25} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
