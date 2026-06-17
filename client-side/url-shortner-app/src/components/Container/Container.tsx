import React from 'react'
import FormContainer from '../FormContainer/FormContainer'

const Container: React.FC = () => {
  return (
    // removed the extra nested container — FormContainer handles its own width now
    <section className="container mx-auto px-4 py-10 sm:py-16">
      <FormContainer />
    </section>
  )
}

export default Container
