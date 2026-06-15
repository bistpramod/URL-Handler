import React from 'react'
interface IHeaderProps{

}
const Header : React.FunctionComponent<HeaderProps>= () => {
  return (
<>
<div className='bg-slate-900'>
    <div className='container p-2 mx-auto'>
        <nav className='py-5'>
            <div className="">
                URL Shortner
            </div>
        </nav>
    </div>

</div>

</>
  )
}

export default Header