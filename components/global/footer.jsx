import React from 'react'

export default function Footer() {
  return (
    <div className='my-3 max-w-screen-sm mx-auto px-3'>
      <footer className='p-2 border bg-white bg-opacity-60 rounded-lg'>
          <span className='flex gap-3 items-center'>
            <img className="w-12 max-sm:w-9" src="/images/hojreh-logo.png" alt="cafe-logo" />
            <p className='text-teritary-500 text-opacity-80'>تمامی حقوق مادی و معنوی این سایت متلعق به مجموعه حجره است</p>
          </span>
          <hr className='my-3' />
          <p> طراحی و توسعه : <a className='font-semibold underline' href="https://arsigh.ir/" target='_blank'>ارسلان قوچانی</a></p>
      </footer>
    </div>
  )
}

